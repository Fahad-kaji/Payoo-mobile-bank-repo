document.getElementById('add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin');
    const accountNumber = document.getElementById('account-number').value;
    
    const mainBalance = getInnerTextById('main-balance');
    console.log(mainBalance);
    
    if(accountNumber.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            setInnerTextByIdAndValue('main-balance',sum)
        }
        else{
            console.log('Invalid Pin Number');
            
        }
    }
    else{
        console.log('Invalid account number');
        
    }
})