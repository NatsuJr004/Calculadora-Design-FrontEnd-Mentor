// Display e Resultado
let value = null;
let arr = [];

// Numeros 
let btn_0 = document.querySelector('#btn_0').value;
let btn_1 = document.querySelector('#btn_1').value;
let btn_2 = document.querySelector('#btn_2').value;
let btn_3 = document.querySelector('#btn_3').value;
let btn_4 = document.querySelector('#btn_4').value;
let btn_5 = document.querySelector('#btn_5').value;
let btn_6 = document.querySelector('#btn_6').value;
let btn_7 = document.querySelector('#btn_7').value;
let btn_8 = document.querySelector('#btn_8').value;
let btn_9 = document.querySelector('#btn_9').value;

// sinais 
let btn_menos = document.querySelector('#btn_menos').value;
let btn_mais = document.querySelector('#btn_mais').value;
let btn_multiplica = document.querySelector('#btn_multiplica').value;
let btn_divide = document.querySelector('#btn_divide').value;
let btn_igual = document.querySelector('#btn_igual').value;


function pegaValor(dado){
  let display = document.querySelector('#display');
  display.value = dado;

  if(display.value != undefined || display.value != null){
  let value = display.value;
  arr.push(display.value);
  display.innerText = arr.join('');
  }
}

function res(){
  display.innerText = eval(arr.join(''));
  arr = [];
}

function del(){
  alert('Desculpe Mas Esse Botão Ainda Não Está Funcionando!')
}

function reset(){
  arr = [];
  display.innerText = 'Foi Resetado!';
}