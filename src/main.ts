import express from "express";
import bodyParser from "body-parser";
import { Card } from "./models/Card";

export const app = express();

app.use(bodyParser.json());

const yugiohCards = [
  {
    name: "Magicien sombre",
    attack: 2500,
    type: "attack",
  },
  {
    name: "Monster rebord",
    attack: 0,
    type: "magick",
  },
  {
    name: "Dragon blanc aux yeux bleus",
    attack: 3000,
    type: "attack",
  },
];

function getMessage(): string {
  return "Express + TypeScript Server";
}

app.get("/api/", (req, res) => {
  res.send({ message: getMessage() });
});

app.get("/api/cards",async (req, res) => {
//   res.json(yugiohCards);
  res.json(await Card.findAll())
});

app.post("/api/cards",async (req, res) => {
  console.log("adding new card");
  const card = req.body;
//   yugiohCards.push(card);
  await Card.create(card)
  res.end();
});

const PORT = 3000;


export const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
