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

    if(usernameRegex.test(Name.value) && emailRegex.test(Email.value) && passwordRegex.test( Password.value) && cnicRegex.test(CNIC.value) && ageRegex.test(Age.value)){
        console.log(Name.value)
        console.log(Email.value)
        console.log(Password.value)
        console.log(CNIC.value)
        console.log(Age.value)
    }
    else{
        console.log("Enter UserName min 4 & max 14 character long, Number & Special Character Not Allowed");
        console.log("Enter Valid Email Includes eg: @gmail.com");
        console.log("Enter 8 Character Long Password Includes One Special & Capital Letter");
        console.log("Enter CNIC In A Format: XXXXX-XXXXXXX-X");
        console.log("Enter Age between 18 to 60");

    }
})