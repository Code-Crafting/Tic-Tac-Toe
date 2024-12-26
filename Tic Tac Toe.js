// Access
let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let winner = document.querySelector(".winner");

// Variables
let playerX = true;
const winPattern = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
let count = 0;
// Functions


boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(playerX == true){
            box.innerText = "X";
            box.style.color = "#C62E2E";
            playerX = false;
        }else{
            box.innerText = "O";
            box.style.color = "#EB8317";
            playerX = true;
        }
        box.disabled = true; // disabling boxes to prevent over writing

        checkWinner();

        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            winner.innerText = `It's a draw`;
        }
    });
});

// * disabling boxes so that players dont continue the game after the showing the winner.
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const checkWinner = () =>{

    for(let patterns of winPattern){
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                disableBoxes();
                winner.innerText = `Player${val1} is the winner`;
                return true;
            }
        }
    }
};

restart.addEventListener("click", () =>{
    playerX = true;
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false; //enabling boxes for new game.
    }
    winner.innerText = "";
    count = 0;
});