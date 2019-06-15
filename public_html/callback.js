// simula uma tabela de pessoas em um db
var pessoas = [
    {id: 1, nome: "João", idade: 45},
    {id: 2, nome: "Felipe", idade: 28}
];


function getPessoas(div){
	document.getElementById(div).innerHTML = "buscando...";
    setTimeout(() => {
        var resultado = "";
        pessoas.forEach((pessoa, index) =>{
            resultado += `id: ${pessoa.id}  nome: ${pessoa.nome}  idade: ${pessoa.idade}<br>`;
        });
        document.getElementById(div).innerHTML = resultado;
    }, 1000);
}

getPessoas('div1');