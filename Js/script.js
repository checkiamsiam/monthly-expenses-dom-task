//functions //
//total expenses function(used 2 times)
function totalExpense() {
  let food = Number(document.getElementById('food').value);
  let rent = Number(document.getElementById('rent').value);
  let clothes = Number(document.getElementById('clothes').value);
  return food + rent + clothes;
}
//all events on click calculate button
document.getElementById('calculate').addEventListener('click', function () {
  //error handle
  if (isNaN(document.getElementById('income').value) == true ||
    isNaN(document.getElementById('food').value) == true ||
    isNaN(document.getElementById('rent').value) == true ||
    isNaN(document.getElementById('clothes').value) == true ||
    Number(document.getElementById('income').value) < 0 ||
    Number(document.getElementById('food').value) < 0 ||
    Number(document.getElementById('rent').value) < 0 ||
    Number(document.getElementById('clothes').value) < 0 ||
    document.getElementById('income').value == '') {
    document.getElementById('overall-error').style.visibility = 'visible';
    document.getElementById('calculate').style.border = '2px solid red';
    if (isNaN(document.getElementById('income').value) == true ||
      document.getElementById('income').value == '' ||
      Number(document.getElementById('income').value) < 0) {
      document.getElementById('income-error').style.visibility = 'visible';
    } if (isNaN(document.getElementById('food').value) == true ||
      Number(document.getElementById('food').value) < 0) {
      document.getElementById('food-error').style.visibility = 'visible';
    } if (isNaN(document.getElementById('rent').value) == true ||
      Number(document.getElementById('rent').value) < 0) {
      document.getElementById('rent-error').style.visibility = 'visible';
    } if (isNaN(document.getElementById('clothes').value) == true ||
      Number(document.getElementById('clothes').value) < 0) {
      document.getElementById('clothes-error').style.visibility = 'visible';
    }
  } else { //main calculations on click calculate button 
    document.getElementById('total-expense').innerText = totalExpense();
    document.getElementById('balance').innerText = document.getElementById('income').value - totalExpense();
    // error handing on solved
    var erroors = document.querySelectorAll('.error');
    for (const error of erroors) {
      error.style.visibility = 'hidden';
    }
    document.getElementById('calculate').style.border = '2px solid transparent';
    // if you expense more then your income
    if (Number(document.getElementById('balance').innerText) < 0) {
      alert('You need loan this month because you expense more than your income in this month')
    }
  }
})
//all events on click saving button 
document.getElementById('save').addEventListener('click', function () {
  if (isNaN(document.getElementById('save-per').value) == true ||
    Number(document.getElementById('save-per').value) < 0 ||
    document.getElementById('save-per').value == '') {
    document.getElementById('saving-error').style.visibility = 'visible';
    document.getElementById('save').style.border = '2px solid red'
  } else {
    document.getElementById('saving-amount').innerText = parseInt(document.getElementById('income').value) * (document.getElementById('save-per').value / 100);
    document.getElementById('remaining-balance').innerText = Number(document.getElementById('balance').innerText) - Number(document.getElementById('saving-amount').innerText);
    document.getElementById('saving-error').style.visibility = 'hidden';
    document.getElementById('save').style.border = '2px solid transparent';
    if (Number(document.getElementById('saving-amount').innerText) > Number(document.getElementById('balance').innerText)) {
      alert('the amount you want to save is greater than your remaining cash')
    }
  }
})