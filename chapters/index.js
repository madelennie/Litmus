// Title then click on the title and add prompt asking name, after that input fields
// that{ will continue with button choices (window reload after submitting answer) 
// Variables for DOM
let action = document.getElementsByClassName("action");
let question = document.getElementById('question');
let answer = document.getElementById("answer");
let button = document.querySelector('button');
let body = document.querySelector('body');

// First Use

addName = () => {
    
    // let name = prompt("Hello traveller, what's your name?", "");
    let name = localStorage.getItem("name");
    if(!name){
        name = prompt("Hello traveller, what's your name?");
        localStorage.setItem("name", name);
    } 
    console.log(localStorage);
}

let userName = localStorage.getItem("name");
console.log(userName);

addName();

// Continue First Chapter
userName = localStorage.getItem("name");
continueChapter = () => {
    answer.innerHTML =
            "Welcome " + `${userName}` + ", " + "nice to meet you!";

    let button = document.querySelector('button');
    button.style = "block";
    button.classList.add("firstButton");

}
//Invoke Chapter
continueChapter();
// window.onload = () => continueChapter();

// Make first choice
document.querySelector('button').addEventListener("click",null);

function firstChoice() {
    
    answer.remove();
    button.remove();


    question.innerHTML = 
      "So " +  `${userName}` +  " what would you like to do?";

    let choiceOne = document.createElement('button');
    let textOne = document.createTextNode(" I don't know...?");
    let aText = document.createTextNode("So you're off?");
    let bText = document.createTextNode("You're rude...");
    let newP = document.createElement("p");

    let choiceTwo = document.createElement('button');
    let textTwo = document.createTextNode("Let's play!");
    let cText = document.createTextNode("Great! Let's start!");
    let goBackBtn = document.createElement('button');
    let goBackTxt = document.createTextNode('Ok, go back!');

    //First button " I don't know"
    choiceOne.append(textOne);
    body.append(choiceOne);
    choiceOne.classList.add("one");

    choiceOne.addEventListener('click', function(){
        choiceOne.remove();
        question.remove();
        choiceTwo.remove();

        body.append(aText);
        

        let i = 0;
    
        let interval = setInterval(function(){
        if(i <= 0){
            body.append(newP);
            newP.append(bText);

            goBackBtn.append(goBackTxt);
            body.append(goBackBtn);

            goBackBtn.classList.add("gback");

            goBackBtn.addEventListener('click', function() {

                question.innerHTML = 
                "So " +  `${userName}` +  " what would you like to do?";

                body.append(question);

                choiceOne.append(textOne);
                body.append(choiceOne);

                choiceTwo.append(textTwo);
                body.append(choiceTwo);

                aText.remove();
                bText.remove();
                goBackBtn.remove();
        
            });
        

        }else{
            clearInterval(interval);
        }
            i++;
        }, 2000);
    });   
    
    //Second button "Let's play"
    choiceTwo.append(textTwo);
    body.append(choiceTwo);
    choiceTwo.classList.add("two");

    choiceTwo.addEventListener('click', function() {
    
        choiceOne.remove();
        choiceTwo.remove();
        question.remove();
        bText.remove();

        body.append(cText);

        let buttonDiv = document.createElement("div");
        let buttonOne = document.createElement('button');
        let bOneText = document.createTextNode('Kitchen');
        buttonOne.classList.add("bOne");

        buttonOne.addEventListener('click', function() {
            cText.remove();
            buttonOne.remove();
            buttonTwo.remove();
            fetchCoffee();
        });

        let buttonTwo = document.createElement('button');
        let bTwoText = document.createTextNode('Garage');
        buttonTwo.classList.add("bTwo");

        body.append(buttonDiv);
        buttonDiv.append(buttonOne);
        buttonOne.append(bOneText);
    
        body.append(buttonDiv);
        buttonDiv.append(buttonTwo);
        buttonTwo.append(bTwoText);

    });
};