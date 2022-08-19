// setup plus 
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const oldInputValue = getInputValue('case-input');
    const newInputValue = oldInputValue + 1;
    setInputValue('case-input', newInputValue);
    // update price 
    const newPrice = 59 * newInputValue;
    setPriceValue('case-value', newPrice);
    // setup subtotal 
    subtotal();
    // setup tax 
    tax();
    // setup total 
    total();
});
// setup Minus 
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const oldInputValue = getInputValue('case-input');
    if (oldInputValue >= 1) {
        const newInputValue = oldInputValue - 1;
        setInputValue('case-input', newInputValue);
        // update price 
        const newPrice = 59 * newInputValue;
        setPriceValue('case-value', newPrice);
        // setup subtotal 
        subtotal();
        // setup tax 
        tax();
        // setup total 
        total();

    }
    else {
        alert('Negative Value is not detected');
    }
});
document.getElementById('case-remove').addEventListener('click', function(){
    document.getElementById('case-exit').style.display = 'none';
})