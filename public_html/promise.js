// Exemplo de utilizacao de Promise em simulacao de requisicao externa (mesma situação da Callback)

function executar_exemplo(div1) {

// simula uma tabela de pessoas em um db
    var pessoas = [
        {id: 1, nome: 'João', idade: 45},
        {id: 2, nome: 'Felipe', idade: 28}
    ];
    
    
// simula uma requisicao GET a um webservice com tempo de resposta de 1 segundo
    function getPessoas(div) {
        document.getElementById(div).innerHTML = '<i>buscando...</i>';
        setTimeout(() => {
            var resultado = '';
            pessoas.forEach((pessoa, index) => {
                resultado += `id: ${pessoa.id}  nome: ${pessoa.nome}  idade: ${pessoa.idade}<br>`;
            });
            document.getElementById(div).innerHTML = resultado;
        }, 1000);
    }

// simula um POST a um webservice com tempo de resposta de 2 segundos 
// e retorna uma Promise 
    function postPessoa(pessoa, div) {
        document.getElementById(div).innerHTML = `<i>inserindo ${pessoa.nome}...</i>`;
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                pessoas.push(pessoa);
                if(true){
                    resolve(); // Caso tenha inserido com sucesso a pessoa
                }else{
                    reject('Erro ao inserir pessoa!'); // Caso tenha falhado em inserir a pessoa
                }
            }, 2000);
        });
        
    }
    
    // postPessoa eh chamado e aguarda pela Promise
    // caso a Promise tenha dado resolve, chama getPessoas
    // caso a Promise tenha dado reject, exibe erro
    postPessoa({id: 3, nome: 'Eduardo', idade: 25}, div1)
            .then(() => getPessoas(div1)) // resolve
            .catch(err => alert(err)); // reject
    
}