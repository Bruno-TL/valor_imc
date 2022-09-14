const peso = 60;
const altura = 1.55 ;
const imc = (peso / (altura * altura)).toFixed();

if(imc >= 19 && imc <= 24){
    classificacao.innerHTML = "Peso Ideal";
    imcc.innerHTML = imc;
    valorTabelaImc.innerHTML = '19 - 24';
    console.log('peso ideal')

}else if(imc >= 25 && imc <= 29){
    classificacao.innerHTML = "Sobrepeso";
    imcc.innerHTML = imc;
    valorTabelaImc.innerHTML = '25 - 29';
    console.log('sobrepeso')

}else if(imc >= 30 && imc <= 34) {
    classificacao.innerHTML = "Obesidade grau 1";
    imcc.innerHTML = imc;
    valorTabelaImc.innerHTML = '30 - 34';
    console.log('Obesidade grau 1')

}else if(imc >= 35 && imc <= 39) {
    classificacao.innerHTML = "Obesidade grau 2";
    imcc.innerHTML = imc;
    valorTabelaImc.innerHTML = '35 - 39';
    console.log('Obesidade grau 2')
}else {
    classificacao.innerHTML = "Obesidade grau 3";
    imcc.innerHTML = imc;
    valorTabelaImc.innerHTML = '40 +';
    console.log('Obesidade grau 3')
}
