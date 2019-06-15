// Exemplo de utilizacao de Callback em simulacao de requisicao externa

function executar_exemplo(div1, div2) {

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

//----ASSINCRONO----//
// simula um POST a um webservice com tempo de resposta de 2 segundos
    function postPessoa(pessoa, div) {
        document.getElementById(div).innerHTML = `<i>inserindo ${pessoa.nome}...</i>`;
        setTimeout(() => {
            pessoas.push(pessoa);
        }, 2000);
    }
    // Executando desta forma nao ira aparecer a pessoa Eduardo no getPessoas, pois 
    // o post demora mais que o get neste exemplo, e os metodos executam de forma assincrona
     postPessoa({id: 3, nome: 'Eduardo', idade: 25}, div1);
     getPessoas(div1);
//-----------------//


//----SINCRONO-----//
// simula um POST a um webservice com tempo de resposta de 2 segundos 
// e chama uma funcao de callback quando finalizada a execucao
    function postPessoaWithCallback(pessoa, callback, div) {
        document.getElementById(div).innerHTML = `<i>inserindo ${pessoa.nome}...</i>`;
        setTimeout(() => {
            pessoas.push(pessoa);
            callback(div2);
        }, 2000);
    }
    // Executando desta forma, so sera exibida a lista de pessoas apos o
    // termino do POST, assim, alem da pessoa Eduardo inserida anteriormente,
    // veremos tambem a pessoa Pedro inserida nesse momento
    postPessoaWithCallback({id: 4, nome: 'Pedro', idade: 32}, getPessoas, div2);
//-----------------//

}