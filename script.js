//Accessing Buttons
let box = document.querySelectorAll(".box");
let reset = document.querySelector(".rst");
let prtWinner = document.querySelector(".winner");
let newGame = document.querySelector(".newGameBtn");



//winning patterns
let patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Functions
newGameButton = () => {
    turnO = true;
    for (all of box){
        all.disabled = false;
        all.innerText = "";
        prtWinner.classList.add("hide");
    }
}
resetButton = () => {
    turnO = true;
    for (all of box){
        all.disabled = false;
        all.innerText = "";
        prtWinner.classList.add("hide");
    }
}
disableBoxes = () => {
    for (let all of box){
        all.disabled = true;
    }
}
printWinner = (winner) => {
    prtWinner.innerText = `Winner is ${winner}`;
    prtWinner.classList.remove("hide");
    disableBoxes();

}
const checkwinner = () => {
    for (let pattern of patterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText);
            let pos1 = box[pattern[0]].innerText;
            let pos2 = box[pattern[1]].innerText;
            let pos3 = box[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 == pos2 && pos2 == pos3){
                    console.log("winner" , pos1);
                    printWinner(pos1);
                }  
            }
              
    }
}


//Logic
let turnO = true;
box.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO == true){
            box.innerText = "X";
            turnO = false;
        } else if(turnO == false){
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

reset.addEventListener ("click" , resetButton);
newGame.addEventListener("click", newGameButton);


