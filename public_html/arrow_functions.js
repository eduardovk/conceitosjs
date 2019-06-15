// Resumo de utilizacao de Arrow Functions

function executar_exemplo(valores, divs){
    
    // executa conforme codigo definido
    // (parametros) => { codigo }
    var somar = (x, y) => { return x + y};
    
    // ou
    // executa e retorna automaticamente a expressao
    // (parametros) => expressao
    var multiplicar = (x, y) => x*y;
    
    // quando houver apenas um parametro,
    // nao eh necessario parenteses
    // ex.:
    var dobrar = x => x*2;
    
    document.getElementById(divs[0]).innerHTML = `Somar(${valores[0]},${valores[1]}) = ` + somar(valores[0], valores[1]);
    document.getElementById(divs[1]).innerHTML = `Multiplicar(${valores[0]},${valores[1]}) = ` + multiplicar(valores[0], valores[1]);
    document.getElementById(divs[2]).innerHTML = `Dobrar(${valores[0]}) = ` + dobrar(valores[0]);
    
    // utlizando arrow function com map em array
    var incrementar = valores.map(valor => ++valor);
    document.getElementById(divs[3]).innerHTML = `Incrementar(${valores}) = ` + incrementar;
    
    //utilizando arrow function com callback
    function timerDiv4(texto){
        document.getElementById(divs[4]).innerHTML = texto;
    }
    setTimeout((texto) => {timerDiv4('1 segundo!');}, 1000);
}