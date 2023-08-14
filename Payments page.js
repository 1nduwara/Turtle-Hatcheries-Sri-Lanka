// get references to interactive elements for the summary table
let name_out = document.getElementById("name");
let date_out = document.getElementById("date");
let time_out = document.getElementById("time");
let duration_out = document.getElementById("duration");
let Mobile_out = document.getElementById("mobile");
let email_out = document.getElementById("e-mail");
let gender_out = document.getElementById("gender");
let sl_adult_out = document.getElementById("sladultout");
let sl_adult_amount = document.getElementById("sladultamount");
let sl_child_out = document.getElementById("slchildout");
let sl_child_amount = document.getElementById("slchildamount");
let fr_adult_out = document.getElementById("fradultout");
let fr_adult_amount = document.getElementById("fradultamount");
let fr_child_out = document.getElementById("frchildout");
let fr_child_amount = document.getElementById("frchildamount");
let infant_out = document.getElementById("infantout");
let total = document.getElementById("totalamount");


// taking inputs from local storage and displaying in the summary table 
name_out.innerText = localStorage.getItem("Name");
date_out.innerText = localStorage.getItem("date_out");
time_out.innerText = localStorage.getItem("time_out");
duration_out.innerText = "1 hour";
Mobile_out.innerText =`(+${localStorage.getItem("Country code")}) ${localStorage.getItem("Mobile")}`;
email_out.innerText = localStorage.getItem("E-mail");
gender_out.innerText = localStorage.getItem("Gender");
sl_adult_out.innerText = localStorage.getItem("sl_adult_out");
sl_adult_amount.innerText = localStorage.getItem("sl_adult_amount");
sl_child_out.innerText = localStorage.getItem("sl_child_out");
sl_child_amount.innerText = localStorage.getItem("sl_child_amount");
fr_adult_out.innerText = localStorage.getItem("fr_adult_out");
fr_adult_amount.innerText = localStorage.getItem("fr_adult_amount");
fr_child_out.innerText = localStorage.getItem("fr_child_out");
fr_child_amount.innerText = localStorage.getItem("fr_child_amount");
infant_out.innerText = localStorage.getItem("infant_out");
total.innerText = localStorage.getItem("total");



// getting references to interactive elements 
const card_number = document.getElementById("cardNumber");
cardNumberInput = document.getElementById('cardNumber');
let exp_date = document.getElementById("expdate");
let CVV = document.getElementById("CVV");
let crad_name = document.getElementById("crdname");
const theform = document.getElementById("form");
let pay_btn = document.getElementById("paybtn");
const link = document.getElementById("link");

// adding event listners
window.addEventListener("load",init); 
pay_btn.addEventListener("click",display);
card_number.addEventListener('input', formatCardNumber);
card_number.addEventListener("change", display1);
exp_date.addEventListener("change",display1);
CVV.addEventListener("change",display1);
crad_name.addEventListener("change",display1);
//calling functions 
function init()
{
    pay_btn.innerText = `Pay ${localStorage.getItem("total")}`;
    pay_btn.style.border="2px solid red";
    pay_btn.style.boxShadow = "0px 0px";
    pay_btn.style.animationDuration = "0s";
}

// format for the credit card number 
function formatCardNumber(event) 
{
    const inputValue = event.target.value.replace(/\D/g, '');
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    event.target.value = formattedValue;
}

// function to process when clicked on pay button  
function display(event)
{
    if(theform.checkValidity())
    {
        event.preventDefault();        
        localStorage.setItem("card_number", card_number.value);
        localStorage.setItem("expiry_date", exp_date.value);
        localStorage.setItem("CVV", CVV.value);
        localStorage.setItem("name_on_card", crad_name.value);

        pay_btn.style.color="green";
        pay_btn.style.border="2px solid green";
        pay_btn.style.boxShadow = "2px 2px 30px";
        pay_btn.style.animationDuration = "0s";

        link.setAttribute("href", "./Confirmation Page.html");   
        link.setAttribute("target", "_self");
        link.click();
    }    
}

// function to change the button color when all the fields are filled 
function display1()
{
    if(theform.checkValidity())
    {
        pay_btn.style.color="green";
        pay_btn.style.border="2px solid green";
        pay_btn.style.boxShadow = "2px 2px 30px";
        pay_btn.style.animationDuration = "0s";  
    }
    
}

        

        

       


