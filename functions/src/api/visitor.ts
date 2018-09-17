import {Request, Response} from 'express';
import {FirebaseFirestore} from '@firebase/firestore-types';
import {convertFirebaseVisitor, Visitor} from '../model/visitor.api.model';

export class VisitorHandler {

    constructor(db: FirebaseFirestore.Firestore) {
        this.db = db;
    }

    public db: FirebaseFirestore.Firestore;

    private validateRequestIp(req: Request): string {
        const requestIps = req.headers['x-forwarded-for']
        if ( ( typeof requestIps != "string") && requestIps.length ) {
            return requestIps[0];
        } else {
            return requestIps.toString();
        }
    }

    // Handlers
    public async Create(req: Request, res: Response, db: FirebaseFirestore.Firestore) {

        // validate request ip
        const requestIp = this.validateRequestIp(req);
        if (!requestIp) {
            res.status(400)
            res.send("the x-forwarded-for header must contain an ip")
            return
        }

        // validate request 
        const visitorType = req.body.visitorType
        if (!visitorType) {
            res.status(408)
            res.send("visitorType must be in the request body")
            return
        }

        const data = {
            ip: requestIp,
            type: visitorType
        }

        try {
            await db
            .collection('Visitor')
            .doc(requestIp)
            .set(data)

        } catch (err) {
            res.send("Failed to create visitor")
            res.status(500)
            return
        }

        res.send("Created visitor")
        return;
    }

    public async List(req: Request, res: Response, db: FirebaseFirestore.Firestore) {
        const results = await db
            .collection('Visitor')
            .get()

        const visitors = results.docs.map((v) => convertFirebaseVisitor(v.data()))
        res.json(visitors)
        return
    }
}