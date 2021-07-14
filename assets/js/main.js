(function () {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputWeight = e.target.querySelector('#weight');
        const weight = Number(inputWeight.value);

        const inputHeight = e.target.querySelector('#height');
        const height = Number(inputHeight.value);

        if (!weight || weight>595) {
            setResultado('Peso inválido', false);
            return;
        }
        if (!height || height>2.50) {
            setResultado('Altura inválida', false);
            return;
        }
        
        const imc = calcImc(weight, height);
        const msg = msgImc(imc, weight, height);
        const result = `IMC : ${imc} <br> ${msg}.`;

        setResultado(result, true);
 

    });

    calcImc = (weight, height)  => {
        const imc = weight / height * height;
        return imc.toFixed(2);
    };

    criaP = () => {
        const p = document.createElement('p');
        return p;
    };


    setResultado = (msg, isValid) => {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-verde');
        } else {
            p.classList.add('paragrafo-vermelho');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    };

    msgImc = (imc, peso, altura) => {
        const mensagem = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1'
        , 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc>=39.9) return mensagem[5];
        if(imc>=34.9) return mensagem[4];
        if(imc>=29.9) return mensagem[3];
        if(imc>=24.9) return mensagem[2];
        if(imc>=18.5) return mensagem[1];
        if(imc<18.5) return mensagem[0];
    };



})();

