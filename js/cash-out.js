document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
       const cashOut =  document.getElementById('input-cash-out').value;
       const cashOutNumber = parseFloat(cashOut)
       const pinNumber = document.getElementById('input-cash-out-pin').value;
       console.log( cashOutNumber, pinNumber)

       if(pinNumber === '1234'){
        const currectAmount = document.getElementById('currect-amount').innerText;
        const currectAmountNumber = parseFloat(currectAmount);
        const newBalance = currectAmountNumber - cashOutNumber;
        console.log(newBalance)

        document.getElementById('currect-amount').innerText = newBalance

       }
       else{
        alert('failed your add money. Please try again!')
       }
    })