// Exemplo de utilizacao de async e await, em comparacao a outros metodos

function executar_exemplo(div1, div2, div3) {

// Recebe um numero, uma div para escreve-lo, tempo de delay e uma bool
// que caso true, simula um erro na operacao
// Retorna uma promise
    function escreveNum(num, div, tempo, erro = false) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(div).innerHTML += num + '  ';
                if (!erro) {
                    resolve();
                } else {
                    reject('Erro');
                }
            }, tempo);
        });
    }

// Forma tradicional, os numeros nao aparecerao em ordem pois
// estao sendo escritos de forma assincrona e nao aguardam o anterior
    function escreveNumerosSemAwait(div) {
        escreveNum(1, div, 1000);
        escreveNum(2, div, 300);
        escreveNum(3, div, 100);
        escreveNum(4, div, 200);
    }

// Utilizando promises, um encadeamento de then garante que 
// os numeros sejam escritos em ordem
    function escreveNumerosComPromises(div) {
        escreveNum(1, div, 1000)
                .then(() => escreveNum(2, div, 300)
                            .then(() => escreveNum(3, div, 100)
                                        .then(() => escreveNum(4, div, 200))))
                .catch(err => alert(err));
    }

// com async e await, o proximo numero aguarda (await) a 
// escrita do anterior
    async function escreveNumerosComAwait(div) {
        await escreveNum(1, div, 1000);
        await escreveNum(2, div, 300);
        await escreveNum(3, div, 100);
        escreveNum(4, div, 200);
    }

    escreveNumerosSemAwait(div1);
    escreveNumerosComPromises(div2);
    escreveNumerosComAwait(div3);

}