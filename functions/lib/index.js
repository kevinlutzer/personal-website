"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const visitor_1 = require("./api/visitor");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });
const handler = new visitor_1.VisitorHandler(db);
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:
app.post('/api/visitor/create', (req, res) => handler.Create(req, res, db));
app.get('/api/visitor/list', (req, res) => handler.List(req, res, db));
// Expose Express API as a single Cloud Function:
exports.Visitor = functions.https.onRequest(app);
exports.bigben = functions.https.onRequest((req, res) => {
    const hours = (new Date().getHours() % 12) + 1; // London is UTC + 1hr;
    res.status(200).send(`<!doctype html>
      <head>
        <title>Time</title>
      </head>
      <body>
        ${'BONG '.repeat(hours)}
      </body>
    </html>`);
});
//# sourceMappingURL=index.js.map