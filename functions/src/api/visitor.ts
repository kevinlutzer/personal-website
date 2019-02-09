import {Request, Response} from 'express';
import {buildVisitorCreateFailureApiResponse, buildVisitorCreateSuccessApiResponse, MODEL} from '../model/visitor.api.model';
import * as admin from 'firebase-admin';

// Handlers
export async function Create(req: Request, res: Response, db: FirebaseFirestore.Firestore) {

    // validate request ip
    const requestIp = req.header('fastly-client-ip');
    if (!requestIp) {
        res.status(400)
        res.send("was not able to get the ip from the request headers")
        return
    }
    
    // validate request 
    const visitorType = req.body.visitorType || req.body.type
    if (!visitorType) {
        res.status(408)
        res.send("type or visitorType must be in the request body")
        return
    }

    const data = {
        ip: requestIp,
        type: visitorType,
        created: admin.firestore.Timestamp.now()
    }

    try {
        await db
        .collection(MODEL)
        .doc(requestIp)
        .set(data)

    } catch (err) {
        console.error(err)
        res.json(buildVisitorCreateFailureApiResponse("failed to create visitor"))
        res.status(500)
        return
    }

    console.log("creating user -> " + JSON.stringify(data))
    res.json(buildVisitorCreateSuccessApiResponse("successfully created the visitor"))
    return;
}
