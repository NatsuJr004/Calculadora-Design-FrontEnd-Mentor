// Display e Resultado
var value = null;
let arr = [];

// Função pegaValor 
function pegaValor(dado){
  let display = document.querySelector('#display');
  display.value = dado;

  if(display.value != undefined || display.value != null){
  value = display.value;
  arr.push(display.value);
  display.innerText = arr.join('');
  }
}

// Função resultado 
function res(){
  display.innerText = eval(arr.join(''));
  arr = [];
}


// Função de Resetar  
function reset(){
  arr = [];
  display.innerText = 'Foi Resetado!';
}

// Função de Deletar 
function del(){
  arr.pop()
  display.innerText = arr.join('');
}