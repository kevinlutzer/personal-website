import * as functions from 'firebase-functions';
import * as admin   from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

import {CreateVisitor} from './api/create_visitor';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
db.settings({timestampsInSnapshots: true});

const app = express();


// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
app.get('/', CreateVisitor);

// Expose Express API as a single Cloud Function:
exports.Visitor = functions.https.onRequest(app);


// return db
//     .collection('Visitor')
//     .doc(id)
//     .set(data)
//     .then(
//         resp => console.log("Added new entity with id: ", id, " and resp: ", resp),
//         err => console.error("Failed to create entity: ", err)
//     );