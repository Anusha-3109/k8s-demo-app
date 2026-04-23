require("dotenv").config({ path: ".env" });

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "dev";
const APP_MESSAGE = process.env.APP_MESSAGE || "Hello from k8s-demo-app";
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/demo";

let db;

async function connectDB() {
  const options = {};
  
  if (process.env.MONGO_TLS === "true") {
    options.tls = true;
    options.tlsAllowInvalidCertificates = true;
    options.tlsAllowInvalidHostnames = true;
  }

  const client = new MongoClient(MONGO_URL, options);
  await client.connect();

  db = client.db();
  console.log("Connected to MongoDB");
}

app.get("/", async (req, res) => {
  try {
    const count = db ? await db.collection("visits").countDocuments() : 0;

    res.json({
      message: APP_MESSAGE,
      version: APP_VERSION,
      visits: count,
      hostname: process.env.HOSTNAME || "local",
      port: PORT,
      status: "healthy",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/health", async (req, res) => {
  try {
    if (!db) {
      return res.status(500).send("DB not connected");
    }

    await db.command({ ping: 1 });
    res.status(200).send("OK");
  } catch (err) {
    res.status(500).send("DB not ready");
  }
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });
