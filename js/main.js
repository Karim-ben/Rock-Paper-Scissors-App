const objectEsl = document.querySelectorAll(".box img");
const rulesEl = document.querySelector(".rules");
const bodyShodowEl = document.querySelector(".body__shadow");
const modalRulesEl = document.querySelector(".modal__rules");
const modalCompareEl = document.querySelector(".modal__compare");
const originalCenterEl = document.querySelector(".original__center");
const resultGameEl = document.querySelector(".result__game");
const scoreResultEl = document.querySelector(".score__result");
const wrapperEl = document.querySelector(".modal__compare__wrapper");




const targetsEl=[...originalCenterEl.children]

let targets = ["rock", "scissors", "paper"];
let textResult="You won"
let score=0



rulesEl.addEventListener("click", function (e) {
  modalRulesEl.style.display = "flex";
  bodyShodowEl.style.display = "block";

  modalRulesEl
    .querySelector(".modal__header img")
    ?.addEventListener("click", (event) => {
      modalRulesEl.style.display = "none";
      bodyShodowEl.style.display = "none";
    });
});
objectEsl.forEach(function (object) {
  object.addEventListener("click", function (e) {
    let randomNumber=Math.floor(Math.random()*(targetsEl.length-1))+1

  
    let element = e.target.parentElement.parentElement;
    let clonedObjectElUser=element.cloneNode(true);
    let clonedObjectElComputure=targetsEl[randomNumber].cloneNode(true);
    let clonedResultGameEl = resultGameEl.cloneNode(true);
    clonedResultGameEl.style.display = "flex";
    

    modalCompareEl.innerHTML=""

    modalCompareEl.appendChild(clonedObjectElUser);
    modalCompareEl.appendChild(clonedResultGameEl);
    modalCompareEl.appendChild(clonedObjectElComputure);
    originalCenterEl.style.display = "none";
    modalCompareEl.style.display = "flex";
    wrapperEl.style.display="flex"
let status=checkWin(clonedObjectElUser,clonedObjectElComputure)
if(status==1){
   textResult="You win"
   score+=status

}else if(status==-1) {
    textResult="You loss"
   score+=status
}else{
    textResult="draw"
}
modalCompareEl.querySelector('.result__game__text').textContent=textResult
scoreResultEl.textContent=score
    const playAgainEl=modalCompareEl.querySelector('.result__play__again')
    playAgainEl.addEventListener('click', function (e) {

        modalCompareEl.style.display="none"
        wrapperEl.style.display="none"
        originalCenterEl.style.display ="flex"
       
    });
    
  });
});

function checkWin(user,computure){
    let status;
    let userResult=[...user.classList][0]
    let computureResult=[...computure.classList][0]
   if((userResult=="rock"&& computureResult=="scissors")||(userResult=="paper"&& computureResult=="rock")|| (userResult=="scissors"&& computureResult=="paper")){
   status=1
   }else  if(userResult===computureResult){
    status=0;
}else{
    status=-1
}
   return status
}