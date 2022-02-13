function getPin(){
    const pin = Math.round(Math.random() * 10000); // 4 digit pabo or 3 
    const pinString = pin + ''; // pin string hobe...
    if(pinString.length == 4){
        return pin;
    } else {
        
        // console.log('got 3 digit ',pin);
        return getPin(); // function nijeke call korbe ....... 3 digit hole
    }
}


function generatePin(){
    const pin = getPin(); // getPin () a jabe .... value nibe
    document.getElementById('display-pin').value = pin; /// akhen show korbe
   
}

///

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText; // value gulo show korbe ... 1,2,3....
    const calcInput = document.getElementById('typed-numbers'); // input field calling
    // jodi number na hoy....
    if(isNaN(number)){
    if(number =='C'){ 
    calcInput.value = '';
}
    }
    else{
    const previousNumber = calcInput.value; // show korbe
    const newNumber = previousNumber + number; // 12 evabe asbe..
    calcInput.value = newNumber; // number value store here
    }

});

function verifyPin(){
    const pin = document.getElementById('display-pin').value; // pin value
    const typedNumber = document.getElementById('typed-numbers').value; // type value
                // message showing
    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    if(pin ==typedNumber){          // jod pin value == type value hoy
    
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

    } else{        // jod pin value == type value na hoy

        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        
    }
}

