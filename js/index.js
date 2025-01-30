
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // get pin number
   const pinNumber = document.getElementById('input-pin-number').value;
   const phoneNumber = document.getElementById('input-phone-number').value

    if(pinNumber === '1234' && phoneNumber === '5'){
       window.location.href = '/home.html'
    }
    else{
        alert('wrong your information!')
        console.log('')
    }
})