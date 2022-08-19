// setUp Plus Button 
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const CurrentInputValue = getInputValue('phone-input');
    const newInputValue = CurrentInputValue + 1;
    setInputValue('phone-input', newInputValue);
    // update price 
    const newPrice = 1219 * newInputValue;
    setPriceValue('price-update', newPrice);
    // setup subtotal 
    subtotal();
    // setup tax 
    tax();
    // setup total 
    total();

});
// setUp Minus Button 
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const CurrentInputValue = getInputValue('phone-input');
    if (CurrentInputValue >= 1) {
        const newMinusInputValue = CurrentInputValue - 1;
        setInputValue('phone-input', newMinusInputValue);
        // update price 
        const newPrice = 1219 * newMinusInputValue;
        setPriceValue('price-update', newPrice);
        // setup subtotal 
        subtotal();
        // setup tax 
        tax();
        // setup total 
        total();
    }
    else {
        alert("You don't order negative format");
    }
});
document.getElementById('phone-remove').addEventListener('click', function(){
    document.getElementById('phone-exit').style.display = 'none';
})

