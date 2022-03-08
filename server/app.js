const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cards = [
  { name: `A` },
  { name: `B` },
  { name: `C` },
  { name: `A` },
  { name: `B` },
  { name: `C` },
];

let switchedCards = [];

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = randomNum(0, arr.length);
    let a2 = randomNum(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

function main() {
  shuffle(cards);
}

main();

app.post("/memory", (req, res) => {
  res.send(JSON.stringify(cards));
});

app.post("/memory/clicked", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(switchedCards));
});

app.listen(port, () => {
  console.log(`ex listening at http://localhost:${port}`);
});
