// input field value receiving function

function gettingInputValue(value){
    const inputValue = document.getElementById(value+'-input').value;
    const integerValue = parseInt(inputValue);
    return integerValue;
}
// function for showing the amounts in html
function showingBalance(elementId,amount){
    document.getElementById(elementId).innerText = amount;
}
// Calculate Button Event
document.getElementById('calculate-button').addEventListener('click',function(){
    // taking integer input of input fields
    const incomeAmount = gettingInputValue('income');
    const foodAmount = gettingInputValue('food');
    const rentAmount = gettingInputValue('rent');
    const clothesAmount = gettingInputValue('clothes');
    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    const balance = incomeAmount - totalExpenses; 
    // showing total expenses & balance in html 
    showingBalance('total-expenses',totalExpenses);
    showingBalance('balance',balance);

})

// Save Button Event 
document.getElementById('save-button').addEventListener('click',function(){
    const savePercentage = gettingInputValue('save');
    const incomeAmount = gettingInputValue('income');
    const saveAmount =Math.round((savePercentage/100) * incomeAmount); 
    showingBalance('saving-amount',saveAmount);
    const balance = parseInt(document.getElementById('balance').innerText)
    const remainingBalance = balance - saveAmount;
    showingBalance('remaining-balance',remainingBalance);
})