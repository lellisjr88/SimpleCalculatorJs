const button = document.getElementById('button').addEventListener('click', function(){
   const num1 = document.getElementById('num-one').value;
   numOne = parseFloat(num1)
   
   const num2 = document.getElementById('num-two').value;
   numTwo = parseFloat(num2)

   const soma = document.getElementById('box1').checked
   const subtracao = document.getElementById('box2').checked
   const multiplicacao = document.getElementById('box3').checked
   const divisao = document.getElementById('box4').checked

   if (soma == true) {
     const resultSoma = numOne + numTwo
     const resultArea = document.getElementById('resultArea').innerText = resultSoma
   } else if (subtracao == true) {
    const resultSub = numOne - numTwo
    const resultArea = document.getElementById('resultArea').innerText = resultSub
   }else if(multiplicacao == true){
    const resultMult = numOne * numTwo
    const resultArea = document.getElementById('resultArea').innerText = resultMult
   }else if (divisao == true){
    const resultDivide = numOne / numTwo
    const resultArea = document.getElementById('resultArea').innerText = resultDivide
   }
})