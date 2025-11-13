
document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    if(accountNumber.length === 11){
        if(pin.length === 4){
            window.location.href="./main.html"
            
        }
        else{
            alert('pin thik nai ')
            
        }
        
    }
    else{
        alert('You need valid Account Number');
        
    }
    
    
})
