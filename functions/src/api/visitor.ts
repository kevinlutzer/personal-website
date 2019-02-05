import {Request, Response} from 'express';
import {buildVisitorCreateFailureApiResponse, buildVisitorCreateSuccessApiResponse, MODEL} from '../model/visitor.api.model';
import * as admin from 'firebase-admin';

export class VisitorHandler {

    private _db: FirebaseFirestore.Firestore

    constructor(
        db: FirebaseFirestore.Firestore
    ){this._db = db;}

    private validateRequestIp(req: Request): string {
        const requestIps = req.headers['x-forwarded-for'].toString();
        if (!requestIps) return requestIps

        return requestIps.split(',')[0]
    }

    // Handlers
    public async Create(req: Request, res: Response) {

        // validate request ip
        let requestIp;
        try {
            requestIp = this.validateRequestIp(req);
        } catch {
            res.status(400);
            res.send("x-forwarded-for is malformed")
            return;
        }
        if (!requestIp) {
            res.status(400)
            res.send("the x-forwarded-for header must contain an ip")
            return
        }
        
        // validate request 
        const visitorType = req.body.visitorType || req.body.type
        if (!visitorType) {
            res.status(408)
            res.send("visitorType must be in the request body")
            return
        }

        // get created date/time
        const created = admin.firestore.Timestamp.now()

        const data = {
            ip: requestIp,
            type: visitorType,
            created: created
        }

        try {
            await this._db
            .collection(MODEL)
            .doc(requestIp)
            .set(data)

        } catch (err) {
            res.json(buildVisitorCreateFailureApiResponse("failed to create visitor"))
            res.status(500)
            return
        }

        res.json(buildVisitorCreateSuccessApiResponse("successfully created the visitor"))
        return;
    }
}