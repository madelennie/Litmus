const coffeeDiv = document.createElement('div');
const coffeeTitle = document.createElement('h2');
const coffeeP = document.createElement('p');
const coffeeTxt = document.createTextNode("");
const value = document.createElement('input');

const ch1 = document.createElement('button');
const ch1txt = document.createTextNode("Load coffeemachine");

const ch2 = document.createElement('button');
const ch2txt = document.createTextNode("Eat coffeepowder from jar");

const command = document.createElement("div");
command.classList.add(".list");

const ul = document.createElement("ul");
ul.classList.add(".ul");

const li = document.createElement("li");
li.classList.add(".li");


function fetchCoffee() {
    body.append(coffeeDiv);
    coffeeDiv.append(coffeeTitle);
    coffeeDiv.append(coffeeTxt);

    body.append(ch1);
    ch1.append(ch1txt);
    ch1.classList.add("coffeemaker");

    body.append(ch2);
    ch2.append(ch2txt);
    ch2.classList.add("coffeeater");


    coffeeTitle.innerText = "You're tired - make some coffee!";

    ch1.addEventListener("click", function() {
        addP();
    });
};

// Adding promptfunction
function addP() {

    ch1.remove();
    ch2.remove();
    coffeeTitle.remove();
    coffeeDiv.remove();

    let comment = document.createElement('p');
    comment.innerText = "Your coffemachine is broken";
    // let newChoice = document.createElement("p");
    // newChoice.innerText= "What will you do";


    const input = document.createElement("input");
    input.classList.add("inp");

    const answerBtn = document.createElement("button");
    answerBtn.innerHTML = ">";
    answerBtn.classList.add("prompt");

    const fastCoffeeBtn = document.createElement("button");
    fastCoffeeBtn.innerText = "Make a cup of fastcoffee";
    fastCoffeeBtn.classList.add("fcb");

    const eatCoffeeP = document.createElement("button");
    eatCoffeeP.innerText = "I'll take a spoon of coffepowder";
    eatCoffeeP.classList.add("ecp");

    body.append(command);   
    command.append(comment);
    // let newChoice = document.createElement("p");
    // newChoice.innerText = "What will you do";
    let i = 0;
    let interval = setInterval(function() {
        if(i <= 0){
            let newChoice = document.createElement("p");
            newChoice.innerText = "What will you do?";
    
            body.append(comment);
            comment.append(newChoice);
            body.append(fastCoffeeBtn);
            body.append(eatCoffeeP);

        } else{
            clearInterval(interval);
        }
            i++;
        }, 2000)

    command.append(answerBtn);
    command.append(input);


    addAnswer = () => {
        let answer = localStorage.setItem("answer", input.value);
        localStorage.getItem("answer");

        let talk = localStorage.getItem("answer");

        console.log(localStorage);
    };

    document.querySelector("input").addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
        comment.remove();
        body.append(command);
            addParagraph(e);
            addAnswer();
        command.append(answerBtn);
        command.append(input);
        
        }
        
    });

    answerBtn.addEventListener("click", function() {
        addAnswer();
        body.append(command);
        command.append(comment);
        command.append(ul);
        command.append(answerBtn);
        command.append(input);
    });

    // Random answers to questions/outputs from input


const insultOne = {
    quote: "Nope"
}
const insultTwo = {
    quote: "Why?"
}
const insultThree = {
    quote: "I don/'t know?"
}
const insultFour = {
    quote: "Fix it?"
}
const quotes = [insultOne, insultTwo, insultThree, insultFour];

const randomSelector = quotes => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}


function removePara() {
    ul.remove([1]);
}

// Load answers and quotes after eachother in DOM:
function addParagraph(e) {

    console.log(e.target.value)
    const valueParagraph = document.createElement("li")
    valueParagraph.innerText = e.target.value;
    
    //sååååå!! måste väl vara samma sak som där nere..

    const insults = randomSelector(quotes); 
    const insultParagraph = document.createElement("li");
    insultParagraph.innerText = insults.quote;
    
    command.append(ul);
    ul.append(valueParagraph);
    ul.append(insultParagraph);
    // command.append(valueParagraph)
    // command.append(insultParagraph)
    removePara();


};

}