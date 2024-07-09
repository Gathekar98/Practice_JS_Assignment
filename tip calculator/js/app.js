let bill = document.querySelector('#bill');
let tip = document.querySelector('#tip');
let submit = document.querySelector('#calculate');
let total = document.querySelector('#total');
 let calculate = ()=>{
    // Convert input values to numbers
    var billAmount = parseFloat(bill.value);
    var tipPercentage = parseFloat(tip.value);
    var totalamount = billAmount + (billAmount * (tipPercentage / 100)); 
    total.innerHTML =`${totalamount}`;
   //  console.log('Total:', totalamount); 
    // console.log('Bill Amount:', billAmount);
    // console.log('Tip Percentage:', tipPercentage); 

 }
 submit.addEventListener('click',()=>{
  calculate()
 })