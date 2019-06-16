// Exemplo de utilizacao de Generator Functions

function executar_exemplo(div1, div2, div3) {

    // Generator Function
    function* func(div1, div2, div3) {
        document.getElementById(div1).innerHTML += `<b>Primeiro</b> next(). <br>`;
        var y = yield 5;
        document.getElementById(div2).innerHTML += `<b>Segundo</b> next(). Valor de Y: ${y}<br>`; 
        var x = yield 10;
        document.getElementById(div3).innerHTML += `<b>Terceiro</b> next(). Valor de X: ${x}<br>`;
        
        // Termino
        return 20;
        
        // Inalcancavel
        var z = yield 30;
        document.getElementById('xxx').innerHTML += 'Este trecho nunca sera executado, pois esta apos o return';
    }
    
    // Diferente das funcoes tradicionais, a variavel ira 
    // receber uma generator function ao inves do retorno da funcao
    var f = func(div1, div2, div3);

    // Executa tudo ate o primeiro yield
    var y_yield = f.next().value;
    document.getElementById(div1).innerHTML += '<i>Ainda há codigo a ser executado.<br>Valor do yield: </i>' + v_yield;
    
    // Executa desde o primeiro yield ate o segundo
    var v_yield = f.next(27).value;
    document.getElementById(div2).innerHTML += '<i>Ainda há codigo a ser executado.<br>Valor do yield: </i>' + v_yield;
    
    // Executa do segundo yield em diante, desta vez passando um valor para o yield
    var valor_return = f.next(15).value;
    document.getElementById(div3).innerHTML += '<i><b>Não</b> há mais codigo a ser executado.<br>Valor do return: </i>' + valor_return;
  

}