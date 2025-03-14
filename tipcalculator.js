let billAmount=document.getElementById("billAmount");
let percentageTip=document.getElementById("percentageTip");
let tipAmount=document.getElementById("tipAmount");
let totalAmount=document.getElementById("totalAmount");
function claculateButton(){
    if(billAmount.value==="" || percentageTip.value===""){
        document.getElementById("errorMessage").textContent="Please Enter a valid input"
    }
    else{
        document.getElementById("errorMessage").textContent=""
    }
    tipAmount=(percentageTip.value/100)*billAmount.value;
        totalAmount=Number(tipAmount)+Number(billAmount.value);
        tipAmount=String(tipAmount);
        totalAmount=String(totalAmount)
        document.getElementById("tipAmount").value=tipAmount;
        document.getElementById("totalAmount").value=totalAmount;
}