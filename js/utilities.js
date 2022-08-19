function getInputValue(inputId){
    const inputValueString = document.getElementById(inputId).value;
    const numberInputValue = parseInt(inputValueString);
    return numberInputValue;
}
function getTextValue(elementId){
    const textValueString = document.getElementById(elementId).innerText;
    const price = parseInt(textValueString);
    return price;
}
function setInputValue(id, newValue){
    const inputId = document.getElementById(id);
    inputId.value = newValue;
}
function setPriceValue(id, newValue){
    const textId = document.getElementById(id);
    textId.innerText = newValue;
}
function subtotal(){
    const phonePrice = getTextValue('price-update');
    const casePrice = getTextValue('case-value');
    const subtotal = phonePrice + casePrice;
    setPriceValue('sub-total', subtotal);
};
function tax(){
    const phonePrice = getTextValue('price-update');
    const casePrice = getTextValue('case-value');
    const subtotal = phonePrice + casePrice;
    const tax = (subtotal * 0.1).toFixed(2);
    setPriceValue('tax-value', tax);
}
function total(){
    const subtotal = parseFloat(document.getElementById('sub-total').innerText);
    const tax = parseFloat(document.getElementById('tax-value').innerText);
    const total = Math.round(subtotal + tax);
    setPriceValue('total', total);

}
