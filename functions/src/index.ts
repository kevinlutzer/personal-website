import * as functions from 'firebase-functions';
import * as admin   from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

import {VisitorHandler} from './api/visitor';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
db.settings({timestampsInSnapshots: true});

const handler = new VisitorHandler(db);

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
app.post('/api/visitor/create', handler.Create);
app.get('/api/visitor/list', handler.List);

// Expose Express API as a single Cloud Function:
exports.Visitor = functions.https.onRequest(app);
