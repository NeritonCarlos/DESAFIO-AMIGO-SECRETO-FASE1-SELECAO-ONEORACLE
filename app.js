//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeamigos = [];

// funçao responsavel por adicionar elementos em um array
function adicionarAmigo(){
       
        let inputamigo = document.getElementById("amigo");
        let nome = inputamigo.value;

        // Verifica se o campo que recebe um nome esta em branco
        if(!nome){
          alert("Digite o nome do amigo!");
          return;
        }
        // Verifica se o nome é um número
        if (!isNaN(nome) && nome.trim() !== "") {
            alert(`${nome} É um número, O nome do amigo não pode ser um número! Adicione novamente!.`);
            document.querySelector('input').value = ""; 
            return false;
        }
        // Verifica se o nome tem pelo menos 3 letras
        const letras = nome.replace(/[^a-zA-Z]/g, ''); // Remove tudo que não é letra
        if (letras.length < 3) {
          alert(`${nome} O nome do amigo deve ter pelo menos 3 letras! Adicione novamente!`);
          document.querySelector('input').value = "";   
          return false;
        }
        // Verifica se o nome contém caracteres especiais
        const caracteresEspeciais = /[^a-zA-Z\s]/;
        if (caracteresEspeciais.test(nome)) {
           alert(`${nome} O nome não pode conter caracteres especiais!Adicione novamente!.`);
           document.querySelector('input').value = "";   
           return false;
        }
        else {
            listaDeamigos.push(nome);
            atualizarListaamigos();
            console.log(listaDeamigos);
            document.querySelector('input').value = ""; 
            return true;
              }
}
// lista os  elementos do array na tela por meio de uma tag
function atualizarListaamigos(){
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for( let i = 0 ; i<listaDeamigos.length; i++){
    let item = document.createElement("li");
    item.textContent = listaDeamigos[i];
    listaAmigos.appendChild(item);
  }
}
// funçao responsavel por sotear elementos de um array por meio de um indece aleatorio ate que a lista estaja vazia
function sortearAmigo(){

  let indiceSorteado = Math.floor(Math.random() * listaDeamigos.length);
  console.log(listaDeamigos[indiceSorteado]); 
  let resultado = document.getElementById("resultado");

  if(listaDeamigos.length == 0){
    alert(`A lista de amigos esta vazia, Adicione amigos para sortea-los!`);
    resultado.innerHTML = `${""}`;
    return;
  }
  if(listaDeamigos.length > 0){ 
    resultado.innerHTML = `O amigo sorteado foi: ${listaDeamigos[indiceSorteado]}`;
    listaDeamigos.splice(indiceSorteado,1);
    console.log(listaDeamigos);
    atualizarListaamigos();
  }
  
}




