let currentPlayer = "Red";
let gameStatus = "Game On";
let boxes = document.querySelectorAll(".box");




for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (boxes[i].style.backgroundColor.trim() == "" && gameStatus == "Game On") {
            boxes[i].style.backgroundColor = currentPlayer;

            currentPlayer = currentPlayer == "Red" ? "Blue" : "Red";

            document.querySelector("#player").style.backgroundColor = currentPlayer;

            if (
                boxes[0].style.backgroundColor == boxes[1].style.backgroundColor &&
                boxes[1].style.backgroundColor == boxes[2].style.backgroundColor &&
                boxes[0].style.backgroundColor.trim() != ""
            ) {
                showWinner(0, 1, 2);
            } else if (
                boxes[3].style.backgroundColor == boxes[4].style.backgroundColor &&
                boxes[4].style.backgroundColor == boxes[5].style.backgroundColor &&
                boxes[3].style.backgroundColor.trim() != ""
            ) {
                showWinner(3, 4, 5);
            } else if (
                boxes[6].style.backgroundColor == boxes[7].style.backgroundColor &&
                boxes[7].style.backgroundColor == boxes[8].style.backgroundColor &&
                boxes[6].style.backgroundColor.trim() != ""
            ) {
                showWinner(6, 7, 8);
            } else if (
                boxes[0].style.backgroundColor == boxes[3].style.backgroundColor &&
                boxes[3].style.backgroundColor == boxes[6].style.backgroundColor &&
                boxes[0].style.backgroundColor.trim() != ""
            ) {
                showWinner(0, 3, 6);
            } else if (
                boxes[1].style.backgroundColor == boxes[4].style.backgroundColor &&
                boxes[4].style.backgroundColor == boxes[7].style.backgroundColor &&
                boxes[1].style.backgroundColor.trim() != ""
            ) {
                showWinner(1, 4, 7);
            } else if (
                boxes[2].style.backgroundColor == boxes[5].style.backgroundColor &&
                boxes[5].style.backgroundColor == boxes[8].style.backgroundColor &&
                boxes[2].style.backgroundColor.trim() != ""
            ) {
                showWinner(2, 5, 8);
            } else if (
                boxes[0].style.backgroundColor == boxes[4].style.backgroundColor &&
                boxes[4].style.backgroundColor == boxes[8].style.backgroundColor &&
                boxes[0].style.backgroundColor.trim() != ""
            ) {
                showWinner(0, 4, 8);
            } else if (
                boxes[2].style.backgroundColor == boxes[4].style.backgroundColor &&
                boxes[4].style.backgroundColor == boxes[6].style.backgroundColor &&
                boxes[2].style.backgroundColor.trim() != ""
            ) {
                showWinner(2, 4, 6);
            }
        }
    });
}

document.querySelector(".reset").addEventListener("click", function () {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "";
    }
    gameStatus = "Game On";
});

function showWinner() {
    document.querySelector(".message").style.display = "block";
    gameStatus = "Game Over";
}