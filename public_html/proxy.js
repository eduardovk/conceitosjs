// Exemplo de utilizacao de Proxy

function executar_exemplo(div1, div2) {

    // o Handler sera um intermediario entre a manipulacao do alvo e o alvo em si
    var handler = {
        // chamado quando acessar alguma variavel do alvo
        get: (target, key) => {
            return target[key].toUpperCase();
        },
        // chamado quando inserido ou alterado um valor do alvo
        set: (target, key, value) => {
            target[key] = value.replace(' ', '');
        }
    };

    var alvo = {
        0: 'eduardo',
        1: 'Mateus'
    };
    
    // eh criado um proxy que determina o alvo e o manipulador
    var alvoProxy = new Proxy(alvo, handler);
    
    // ao acessar o elemento 0 do alvo, eh acionado o get, 
    // que transforma o elemento em UPPERCASE
    document.getElementById(div1).innerHTML += `<i>${alvoProxy[0]}</i>`;
    
    // ao setar um valor para o elemento 2 do alvo, eh
    // acionado o set, que remove os espacos do valor
    alvoProxy[2] = 'joao silva';
    
    // acionado o get para o novo valor, que vira em UPPERCASE
    document.getElementById(div2).innerHTML += `<i>${alvoProxy[2]}</i>`;
    
}