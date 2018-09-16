"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const create_visitor_1 = require("./api/create_visitor");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:
app.get('/', create_visitor_1.CreateVisitor);
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
//# sourceMappingURL=index.js.map