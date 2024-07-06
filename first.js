let boxes=document.querySelectorAll(".box");
let messagecontainer=document.querySelector(".messagecontainer");
let message=document.querySelector("#message");
let resetbtn=document.querySelector("#resetbtn");

let turnX=true;

let count=0;

const winnerPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;

        let win=checkWinner();

        if (count===9 && !win){

            drawGame();
        }
    })
} );

const drawGame = () =>{
    message.innerText="DRAW GAME";
    messagecontainer.classList.remove("hide");

}

const checkWinner = () =>{

    for (let pattern of winnerPattern){
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;

        if (val1!="" && val2!= "" && val3!=""){
            if (val1===val2 && val2===val3){
                displayWinner(val1);
            }
        }
    }
}

const displayWinner = (winner) =>{

    message.innerText=`CONGRATULATIONS!!! Player ${winner} won`;
    messagecontainer.classList.remove("hide");
    disabledBoxes();

}

const disabledBoxes = () =>{

    for (let box of boxes){
        box.disabled=true;
    }
} 

const resetGame = () =>{

    count=0;
    turnX=true;
    messagecontainer.classList.add("hide");
    enabledBoxes();
}

const enabledBoxes =() =>{
    for (let box of boxes){
        box.innerText="";
        box.disabled=false;
    } 
}

resetbtn.addEventListener("click",resetGame);
