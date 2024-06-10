let form = document.querySelector('#form');
let result = document.querySelector('#result');
let submit = document.querySelector('#btn');
let calculate =()=>{
    let birthdateInput = document.querySelector("#birthday").value;
    let birthdate = new Date(birthdateInput);
    // console.log(birthdateInput);
let today = new Date();
// console.log(today);
let age = today.getFullYear() - birthdate.getFullYear();
let month = today.getMonth()- birthdate.getMonth();
    if(month<0 || (month === 0 && today.getDate() <birthdate.getDate())){
        age--;
    } 
result.innerHTML = `Your age is ${age} years old`;
}
submit.addEventListener('click',()=>{
    calculate();
})


