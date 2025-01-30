document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const pinNumber = document.getElementById('input-pin-add').value
        const amountQuantity = document.getElementById('input-amount-add').value
        const amountInteger = parseFloat(amountQuantity)
        console.log(pinNumber, typeof amountInteger)

        if (pinNumber === '1234') {
            const currectAmount = document.getElementById('currect-amount').innerText;
            const currectAmountInteger = parseFloat(currectAmount)
            console.log(typeof currectAmountInteger)
            const totalAmount = amountInteger + currectAmountInteger;
            console.log(totalAmount)
            document.getElementById('currect-amount').innerText = totalAmount

        }
        else {
            alert('your pin number in wrong!')
        }

    });

function addMoney() {
    const homeAddMoney = document.getElementById('home-add-money');
    homeAddMoney.classList.remove('hidden')
    const homeCashOut = document.getElementById('home-cash-out');
    homeCashOut.classList.add('hidden')
}
function cashOut() {
    const homeAddMoney = document.getElementById('home-add-money');
    homeAddMoney.classList.add('hidden')
    const homeCashOut = document.getElementById('home-cash-out');
    homeCashOut.classList.remove('hidden')

}