import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("WhatsApp bot is running!");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);

  res.send({
    message: {
      text: "Hello! Your WhatsApp bot is active."
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port", port);
});
