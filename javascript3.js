let counter = 5;
const timerTime = document.querySelector(".fp4");
document.load = (counter = 5);
let pageLoaded = false;
console.log(pageLoaded);
let bodyPage = document.querySelector(".collection");

setInterval(fiveSecTimer, 1000);

function backPressed(){       

    let allElements = bodyPage.childNodes;

    for (let i = allElements.length - 1; i > 0 ; i --){
        bodyPage.removeChild(allElements[i]);
    }

    let errorMessage = document.createElement("h1.error");
    let message = document.createTextNode("OOPS..... It looks like you clicked the back button after submitting.  Please, don't click back as you may submit your form twice.  You will be redirected to the home page.")
    errorMessage.appendChild(message);
    bodyPage.appendChild(errorMessage);
    setTimeout(() => {
        pageLoaded = true;
        window.location.href = "./index.html";
      }, 5000)
}



function fiveSecTimer( ){
   if(pageLoaded === true){
    backPressed();
    return;
   }
      
    if(timerTime.children.length > 0){
        timerTime.removeChild(timerTime.children[0]);
    }
    counter--;
    newParagraph = document.createElement("h3");
    newParagraph.setAttribute("class", "exitText");
    
    // newParagraph.style.color = "red";
    // newParagraph.fontSize = "xx-large";
    newParagraphText = document.createTextNode(counter + " seconds!!!");
    newParagraph.appendChild(newParagraphText);
    timerTime.appendChild(newParagraph);    
    if(counter <= 0){
        
        setTimeout(() => {
            pageLoaded = true;
            window.location.href = "./index.html";
          }, 1)
    }
    console.log(counter);
  }