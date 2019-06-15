//Resumo de utilizacao metodos call, apply, bind

function executar_exemplo(div1, div2, div3) {
    
    var obj = {num: 2};

    var addToThis = function (a, b) {
        return this.num + a + b;
    }

//usando CALL, o metodo addToThis eh chamado para o objeto obj, utilizando os parametros individualmente (3, 4)
    document.getElementById(div1).innerHTML += addToThis.call(obj, 3, 4)

//usando APPLY, o metodo addToThis eh chamado para o objeto obj, enviando os parametros em forma de array [3,4]
    document.getElementById(div2).innerHTML += addToThis.apply(obj, [3, 4])

//usando BIND, a funcao addToThis eh devolvida utilizando agora o objeto obj como "this", contendo suas propriedades (num:2)
    var funcao = addToThis.bind(obj)
    document.getElementById(div3).innerHTML += funcao(3, 4)
    
}


