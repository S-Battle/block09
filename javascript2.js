const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');



form.addEventListener('submit', (e) => {
    console.log("Submit pressed");
  e.preventDefault()
  submitButton.disabled = true
  
 
  window.location.href = './success.html'
})

submitButton.addEventListener("click", (o =>{

    form.requestSubmit();


}));