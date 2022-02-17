// input field value receiving function
function gettingInputValue(value){
//    const error = parseInt(value);
  
    const inputValue = document.getElementById(value+'-input').value;
    const integerValue = parseInt(inputValue);
        return integerValue;
}
// function for showing the amounts in html
function showingBalance(elementId,amount){
    // if(isNaN(amount)){
    //     document.getElementById('warning-message').style.display=("block");
    // }
    // else
    document.getElementById(elementId).innerText = amount;
}
// Calculate Button Event
document.getElementById('calculate-button').addEventListener('click',function(){
    // taking integer input of input fields
    const incomeAmount = gettingInputValue('income');
    const foodAmount = gettingInputValue('food');
    const rentAmount = gettingInputValue('rent');
    const clothesAmount = gettingInputValue('clothes'); 
    // showing total expenses & balance in html 
    if (isNaN(incomeAmount) || isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)){
        document.getElementById('warning-message').style.display=("block");
    }
    else if (incomeAmount<0 || foodAmount<0 || rentAmount<0 || clothesAmount<0){
        document.getElementById('warning-message2').style.display=("block");
    }
    else{ 
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        const balance = incomeAmount - totalExpenses;
        if (totalExpenses > incomeAmount) {
            document.getElementById('error-message').style.display=("block");
        }  
        showingBalance('total-expenses',totalExpenses);
        showingBalance('balance',balance);
        document.getElementById('warning-message').style.display=("none");
        document.getElementById('warning-message2').style.display=("none");
    }

})

// Save Button Event 
document.getElementById('save-button').addEventListener('click',function(){
    const savePercentage = gettingInputValue('save');
    const incomeAmount = gettingInputValue('income');
    if(isNaN(savePercentage)){
        document.getElementById('warning-message3').style.display=("block");
    }
    else if(savePercentage < 0){
        document.getElementById('warning-message4').style.display=("block");
    }
    else {
        const saveAmount =Math.round((savePercentage/100) * incomeAmount);
        document.getElementById('warning-message3').style.display=("none");
        document.getElementById('warning-message4').style.display=("none");
        showingBalance('saving-amount',saveAmount);
        const balance = parseInt(document.getElementById('balance').innerText)
        const remainingBalance = balance - saveAmount;
        showingBalance('remaining-balance',remainingBalance);
    }
})