import express from "express";
import getDateObj from "../utils/helper.js";

const router = express.Router();

router.get("/timestamp/:date?", (req, res) => {
  const inputDate = req.params.date;
  const date = inputDate ? getDateObj(inputDate) : new Date();

  if (!date) {
    return res.json({ message: "Invalid date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

export default router;
