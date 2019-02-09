"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const visitor_1 = require("./api/visitor");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:
app.post('/api/visitor/create', (req, res) => visitor_1.Create(req, res, db));
// Expose Express API as a single Cloud Function:
exports.Visitor = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map