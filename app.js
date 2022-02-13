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