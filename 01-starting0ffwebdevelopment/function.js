
const celciusToKelvin = (temp) =>{
    return temp+273;
}

console.log(celciusToKelvin(27));



const conversionUnit = (temp , unit) =>{
    return ans = unit === 'K' ? 273  + temp : temp- 273;
}

console.log(conversionUnit(308 , 'C'));