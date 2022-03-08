let port = 5001;
let switchedCards = [];

window.onload = async () => {
  let req = await fetch(`http://localhost:${port}/memory`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
  });
  let res = await req.json();
  console.log("res1", res);
  for (cardsIndex in cards) createCardElement(res);
};

function createCardElement(cardsIndex) {
  const board = document.getElementById("cards");
  const cardEl = document.createElement("button");
  cardEl.id = cardsIndex;
  cardEl.className = "card";
  // cardEl.onclick = cardClicked;
  board.appendChild(cardEl);
}

// const cardClicked = (event) => {
//   const cardEl = event.target;
//   const cardsIndex = cardEl.id;

//   async () => {
//     let req = await fetch(`http://localhost:${port}/memory/clicked`, {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: { cardsIndex },
//     });
//     let res = await req.json();
//     console.log("res2", res);
//     //   if (switchedCards.length == 2) {
//     //     if (
//     //       check(cards[switchedCards[0].id].name, cards[switchedCards[1].id].name)
//     //     ) {
//     //       alert("two cards chosen");
//     //     } else {
//     //       twoClose();
//     //     }
//     //   }
//     //   cardEl.className = "card-chosen";
//     //   cardEl.innerHTML = cards[cardsIndex].name;
//     //   if (switchedCards.length == 0 || switchedCards[0].id != cardEl.id) {
//     //     switchedCards.push(cardEl);
//   };
// };

// function twoClose() {
//   if (switchedCards.length == 2) {
//     for (i = 0; i < 2; i++) {
//       console.log(switchedCards[i]);
//       const cardsIndex = switchedCards[i].id;
//       document.getElementById(cardsIndex).innerHTML = "";
//       document.getElementById(cardsIndex).className = "card";
//     }
//     switchedCards = [];
//   }
// }

// function createCardElement(cardsIndex) {
//   const board = document.getElementById("cards");
//   const cardEl = document.createElement("button");
//   cardEl.id = cardsIndex;
//   cardEl.className = "card";
//   cardEl.onclick = cardClicked;
//   board.appendChild(cardEl);
// }

// function check(card1, card2) {
//   return card1 == card2;
// }
