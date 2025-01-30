document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault()
        const pinNumber = document.getElementById('input-pin-add').value
        const amountQuantity = document.getElementById('input-amount-add').value
        console.log(pinNumber, amountQuantity)
});