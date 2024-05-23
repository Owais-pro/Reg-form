const form =document.querySelector('#form');
const Name =document.querySelector('#Name');
const Email =document.querySelector('#Email');
const Password =document.querySelector('#Password');
const CNIC =document.querySelector('#CNIC');
const Age =document.querySelector('#Age');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    // Regex for validation
    let usernameRegex = /^[a-zA-Z]{4,14}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    let cnicRegex = /^\d{5}-\d{7}-\d$/;
    let ageRegex = /^(1[9-9]|[2-5][0-9]|60)$/;





})