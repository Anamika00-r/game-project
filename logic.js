let boxes = document.querySelectorAll('.Box');
let resetBtn = document.querySelector('#Reset');
let newgameBtn = document.querySelector('#newgame');
let win = document.querySelector('#winner');
let msg = document.querySelector('.msgcontainer');

let player1 = true; //player1 or player2

arr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (player1) {
            Box.innerText = "O";
            player1 = false;
        }
        else {
            Box.innerText = "X";
            player1 = true;
        }
        Box.disabled = true;
        checkWinner();
    });
});
const resetButton = () => {
    player1 = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msg.classList.add("hidden");
    }
};

const disableButtons = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const Showwinner = (Winner) =>  {
    win.innerText = `Congratulations, Winner is ${Winner}`;
    msg.classList.remove("hidden");
    disableButtons();
};

const checkWinner = () => {
    for(let pattern of arr) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val){
                console.log("Winner", pos1val);
                Showwinner(pos1val);
            }
        } 
    }
};
    
resetBtn.addEventListener('click', resetButton);
newgameBtn.addEventListener('click', resetButton);
 
