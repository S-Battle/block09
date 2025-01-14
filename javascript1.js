console.log("Hello World");

let buttons = document.querySelectorAll("img");
let labelArea = document.querySelector("#label");

buttons.forEach((button) =>{
    button.addEventListener("mouseover", (() =>{
        button.classList.add("lrgSize");
        button.classList.remove("regSize");           
        addToLabel(button.id);
    }));
});

buttons.forEach((button) =>{
    button.addEventListener("mouseout", (() =>{
        button.classList.add("regSize");
        button.classList.remove("lrgSize"); 
        removeFromLabel();   
    }));
});

function addToLabel(language){    

    let textToSay; 
    switch(language){
        case 'Java':
            textToSay = "Java is arguably the best programming language.  Java is a strict typed language. java is used in both desktop and mobile applications.  It's my personal favorite language.";
            break;
        case 'Python': 
            textToSay = "Python can return multiple variables or objects from a single return statement.  It's many modules make it easy for scientific research and machine learning.";
            break;
        case 'Javascript':
            textToSay = "Javascript is vital to the internet.  Without Javascript, websites would have no functionality.";
            break;
        case 'C':
            textToSay = "C is a fast compiled language.  C can be used to program embedded computers.  C has been used in the creation of modern day operating systems.";
            break;

    };

    let newParagraph = document.createElement('p');
    let newText = document.createTextNode(textToSay);
    labelArea.appendChild(newText);
};

function removeFromLabel(){
    if(labelArea.hasChildNodes){
        let labelText = labelArea.childNodes;
       for(let i = labelArea.childNodes.length; i >= 1; i--){
        labelArea.removeChild(labelText[i -1]);
       }
    }    
}