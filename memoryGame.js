const cards = [
    { name: `A` },
    { name: `B` },
    { name: `C` },
    { name: `A` },
    { name: `B` },
    { name: `C` },
];

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function shuffle(arr) {
    for (let i = 0; i < 100; i++) {
        let a1 = randomNum(0, arr.length)
        let a2 = randomNum(0, arr.length)
        if (a1 == a2) {
            i--;
            continue
        }
        swap(arr, a1, a2)
    }
}

function main() {
    console.log(...cards);
    shuffle(cards)
    console.log(cards);
}
main()

const check = (iCards1, iCards2) => (iCards1 == iCards2) ? alert(`same card chosen twice`) : (cards[iCards1][`name`] == cards[iCards2][`name`]);