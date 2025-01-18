console.log("Hello World");

let buttons = document.querySelectorAll("img");
let labelArea = document.querySelector("#label");
let labelAreaBig = document.querySelector("#label1200");
let labelAreaSmall = document.querySelector("#labelSmall")

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
    if(window.innerWidth >1200 && window.innerWidth <= 1600){
        console.log(window.screenX);
        labelAreaBig.appendChild(newText);
    }
    else if(window.innerWidth <= 1200 ){
        console.log(window.innerWidth) ;
        labelAreaSmall.appendChild(newText);
    }
    else{
        console.log("not in range");
        console.log(window.screenX);
    labelArea.appendChild(newText);
    }
};

function removeFromLabel(){
    if(labelArea.hasChildNodes){
        let labelText = labelArea.childNodes;
       for(let i = labelArea.childNodes.length; i >= 1; i--){
        labelArea.removeChild(labelText[i -1]);
       }
    }  
    if(labelAreaBig.hasChildNodes){
        let labelText = labelAreaBig.childNodes;
       for(let i = labelAreaBig.childNodes.length; i >= 1; i--){
        labelAreaBig.removeChild(labelText[i -1]);
       }
    }      
    if(labelAreaSmall.hasChildNodes){
        let labelText = labelAreaSmall.childNodes;
       for(let i = labelAreaSmall.childNodes.length; i >= 1; i--){
        labelAreaSmall.removeChild(labelText[i -1]);
       }
    }     
}