let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX = true;

const winPattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enableBoxes=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
};

const resetGame = () => {
    turnX=true;
    enableBoxes();
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");

        if(turnX){
            box.innerText="X";
            turnX=false;
            box.classList.add("turn");
        }else{
            box.innerText="O";
            turnX=true;
            box.classList.remove("turn");
        }

        box.disabled=true;
        checkPattren();
    });
});

const showWinner=(winner) => {
    msg.innerText=`Congratulations , The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(box of boxes){
        box.disabled=true;
    }
};

const checkPattren=()=>{
    for(let pattren of winPattrens){
        let pos1Val =boxes[pattren[0]].innerText;
        let pos2Val =boxes[pattren[1]].innerText;
        let pos3Val =boxes[pattren[2]].innerText;
    

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);