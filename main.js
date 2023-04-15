const calculate = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('type');
    const valueTemp = type.options[tempSelected.selectedIndex].value;
    let degree=0;
    const cToF = (degree) => {
        let fahrenheit = (parseInt(degree) * 9/5) + 32;
        return fahrenheit;
    }
    const cToK= (degree)=>{
        let Kelvin=273.15+parseInt(degree);
        return Kelvin;
    }
    const fToC = (degree) => {
        let celsius = (parseInt(degree) - 32)* 5/9;
        return celsius;
    }
    const fTOK=(degree) =>{
        let kelvin=(parseInt(degree)+459.67)*(5/9);
        return kelvin;
    }
    const kToC=(degree)=>{
        let celsius=(parseInt(degree)-273.15);
        return celsius;
    }
    const kToF=(degree)=>{
        let fahrenheit=(parseInt(degree)-273.15)*(9/5)+32;
        return fahrenheit;
    }

    if(valueTemp == 'cel'){
    let farh = cToF(numberTemp);
    let kel=cToK(numberTemp);
        document.getElementById('result1').innerHTML= `Kelvin: ${kel}`;
    }else if(valueTemp=='fah'){
        let cel= fToC(numberTemp);
        let kel=cToK(numberTemp);
        document.getElementById('result1').innerHTML= `Celsius: ${cel}`;
    }

}