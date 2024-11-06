import express from "express";

const router = express.Router();

router.get("/whoami", (req, res) => {
  const ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipAddress: ipAddress,
    language: language,
    software: software,
  });
});

export default router;
