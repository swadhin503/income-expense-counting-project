function gettingInputValue(value){
    const inputValue = document.getElementById(value+'-input').value;
    const integerValue = parseInt(inputValue);
    return integerValue;
}
document.getElementById('calculate-button').addEventListener('click',function(){
    const incomeAmount = gettingInputValue('income');
    console.log(incomeAmount);
    const foodAmount = gettingInputValue('food');
    console.log(foodAmount);
    const rentAmount = gettingInputValue('rent');
    console.log(rentAmount);
})
