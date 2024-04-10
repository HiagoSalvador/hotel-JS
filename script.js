let nomeHotel = prompt('Insira o nome do hotel:');
alert(`O nome do Hotel é ${nomeHotel}!`);
let usuario = prompt('Insira o seu nome:');

senha();

function senha() {
    let senha = prompt(`${usuario}, qual sua senha de funcionário?`);

    if (senha != 2678){
        alert('Senha incorreta, operação não autorizada!')
        senha();
    } else {
        alert(`Bem vindo ao Hotel ${nomeHotel}, ${usuario}. É um imenso prazer ter você por aqui!`);
        inicio();
    }
}

function inicio() {

    let opcaoInicial = parseInt(prompt('Selecione uma opção: \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Reserva de Eventos \n4.) Abastecimento de Carros \n5.) Manutenção \n6.) Sair'));

    switch (opcaoInicial){
        case 1 :
            reservaQuartos();
            break;
        case 2 :
            cadastrarHospedes();
            break;
        case 3 :
            eventos();
            break;
        case 4 :
            abastecerCarro();
            break;
        case 5 :
            manutencao();
            break;
        case 6 :
            sair();
            break;
        default :
            erro();
    }
}		

function reservaQuartos() {
    let valorDiaria = parseFloat(prompt('Qual é o valor padrão da diária?'));

    if (valorDiaria <= 0){
        alert('Reserva não efetuada, valor incorreto.');

        reservaQuartos();
    } else {
        let diaria = parseInt(prompt('Quantas diárias serão necessárias?'));
    }

    if (diaria <= 0 || diaria > 30) {
        alert('Reserva não efetuada, não aceitamos menos de 1 dia ou mais de 30 dias.');

        reservaQuartos();
    } else {
        let calcDiaria = (valorDiaria * diaria);

    }

    alert(`O valor de ${diaria} dias de hospedagem é de R$${calcDiaria}.`);

    let nomeHospede = prompt('Qual é o nome do hóspede?');
    let resposta = prompt(`${usuario}, você confirma a hospedagem para ${nomeHospede} por ${diaria} dias? S/N`);

    if (resposta == 'S' || resposta == 's') {
        alert(`${usuario}, reserva efetuada para ${nomeHospede}. O valor total é de R$${calcDiaria}.`);
        
        inicio();
    } else if (resposta == 'N' || resposta == 'n') {
        alert(`${usuario}, reserva não efetuada.`);

        inicio();
    }
}

function cadastrarHospedes() {
    let lista = [];

    function escolha(){
        let opcao = parseInt(prompt('Selecione uma opção: \n1.) Cadastrar \n2.) Pesquisar \n3.) Sair'));

        switch(opcao){
            case 1 :
                cadastro();
                break;
            case 2 :
                pesquisarHospedes();
                break;
            case 3 :
                inicio();
                break;
            default :
                falha();
        }
    }
    
    function cadastro(){
        let valorDiaria = parseFloat(prompt('Qual é o valor padrão da diária?'));

        if (valorDiaria <= 0){
            alert('Reserva não efetuada, valor incorreto.');
    
            escolha();
        } else {
            let diaria = parseInt(prompt('Quantas diárias serão necessárias?'));
        }

        if (diaria <= 0 || diaria > 30) {
            alert('Reserva não efetuada, não aceitamos menos de 1 dia ou mais de 30 dias.');
    
            escolha();
        } else {
            let nomeHospede = prompt('Qual é nome do hóspede?');
        
            if (lista.length <= 15){
                lista.push(nomeHospede);

                let idadeHospede = parseInt(prompt('Qual é a idade do hóspede?'));

                    if(idadeHospede <= 6){
                        let resultado = ((valorDiaria * diaria) * 0);
                        alert(`${nomeHospede} cadastrada(o) com sucesso e possui gratuidade.\nO valor total da hospedagem é: R$${resultado} por ${diaria} dias.`);
                    } else if(idadeHospede >= 60) {
                        let resultado = ((valorDiaria * diaria)/2);
                        alert(`${nomeHospede} cadastrada(o) com sucesso e paga meia.\nO valor total da hospedagem é: R$${resultado} por ${diaria} dias.`);
                    } else {
                        let resultado = (valorDiaria * diaria);
                        alert(`${nomeHospede} cadastrada(o) com sucesso.\nO valor total da hospedagem é: R$${resultado} por ${diaria} dias.`)
                    }

                escolha();
            } else if (lista.length > 15) {
                alert('Máximo de cadastros atingido.');

                escolha();
            }
        }
    }

    function pesquisarHospedes() {
        let pesquisa = prompt('Qual é nome do hóspede?');
        let indice = lista.indexOf(pesquisa);

        if (indice !== -1) {
            alert(`Hóspede ${pesquisa} foi encontrada(o)!`);
            
            escolha();
          } else {
            alert(`Hóspede ${pesquisa} não foi encontrada(o)!`);

            escolha();
          }
    }

    function falha() {
        alert('Por favor, informe um número entre 1 e 3');
        escolha();
    }

    escolha();
}

function eventos() {

    function escolha(){
        let opcao = parseInt(prompt('Selecione uma opção de reserva: \n1.)Evento \n2.)Buffet \n3.)Auditório \n4.)Restaurante \n5.) Sair'));

        switch(opcao){
            case 1 :
                eventosCadastro();
                break;
            case 2 :
                reservaBuffet();
                break;
            case 3 :
                reservaAuditorio();
                break;
            case 4 :
                reserletestaurante();
                break;
            case 5 :
                inicio();
                break;
            default :
                falha();
        }
    }

    function eventosCadastro(){
        let garcons = 10.50;

        let duracaoEvento = parseInt(prompt('Qual a duração do evento em horas?'));
        let quantGarcons = parseInt(prompt('Quantos garçons serão necessários?'));
        let calcGarcons = ((garcons * quantGarcons) * duracaoEvento);

        alert(`Custo total: R$${calcGarcons}`);
        let confirma = prompt('Gostaria de efetuar a reserva? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert(`${usuario}, reserva efetuada com sucesso.`);

            escolha();
        } else if (confirma == 'N' || confirma == 'n'){
            alert(`Reserva não efetuada.`);

            escolha();
        }
    }

    function reservaBuffet(){
        let cafeConvidado = 0.2;
        let aguaConvidado = 0.5;
        let salgadoConvidado = 7;

        let quantConvidados = parseInt(prompt('Qual o número de convidados para o evento?'));

        if (quantConvidados > 350){
            alert('Quantidade de convidados superior à capacidade máxima, suporta apenas 350 convidados.');

            escolha();
        } else {
            let calcCafe = parseInt(cafeConvidado * quantConvidados);
            let calcAgua = parseInt(aguaConvidado * quantConvidados);
            let calcSalgado = Math.ceil((salgadoConvidado * quantConvidados)/100);
            let total = ((calcCafe * 0.8) + (calcAgua * 0.4) + (calcSalgado * 34));

            alert(`O evento precisará de ${calcCafe} litros de café, ${calcAgua} litros de água, ${calcSalgado * 100} salgados. O custo total do evento será de R$${total}.`);

            let confirma = prompt('Gostaria de efetuar a reserva? S/N');

            if (confirma == 'S' || confirma == 's'){
                alert(`${usuario}, reserva efetuada com sucesso.`);

                escolha();
            } else if (confirma == 'N' || confirma == 'n'){
                alert(`Reserva não efetuada.`)

                escolha();
            }

        }


    }

    function reservaAuditorio(){
        let auditorioLaranja = 150;
        let auditorioColorado = 350;

        let quantConvidados = parseInt(prompt('Qual o número de convidados para o evento?'));

        if (quantConvidados > auditorioColorado){
            alert('Quantidade de convidados superior à capacidade máxima, suporta apenas 350 convidados.');

            escolha();
        } else {
            if (quantConvidados <= 150){
                alert('Use o auditório Laranja');

                let confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${usuario}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            } else if (quantConvidados <= 220){
                let calcAudLaranja = (quantConvidados - auditorioLaranja);
                
                alert(`Use o auditório Laranja (inclua mais ${calcAudLaranja} cadeiras)`);

                let confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${usuario}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            } else if (quantConvidados > 220) {
                alert(`Use o auditório Colorado`);

                let confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${usuario}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            }
        }
    }

    function reserletestaurante() {
        let dia = parseInt(prompt("Qual o dia do seu evento?"));
        let hora = parseInt(prompt("Qual a hora do seu evento?"));
        let empresa = prompt("Qual o nome da empresa?");
      
        if (dia < 1 || dia > 7 || hora < 0 || hora > 24) {
          alert("Dia ou hora inválidos. Tente novamente.");
          return;
        }
      
       
        let disponivel = true;
        if (!disponivel) {
          alert("Restaurante indisponível nesse dia e hora. Tente novamente.");
          return;
        }
      
        alert("Reserva realizada com sucesso!");
      }
      
      reserletestaurante();

    function falha() {
        alert('Por favor, informe um número entre 1 e 3');
        
        escolha();
    }

   escolha()
   inicio()
}

function abastecerCarro() {
    // Pegar os preços dos combustíveis
    let hiagoShellAlcool = parseFloat(prompt('Qual o valor do álcool no posto Hiago Shell?'));
    let hiagoShellGasolina = parseFloat(prompt('Qual o valor da gasolina no Hiago Fuel?'));
    let hiagoPetroAlcool = parseFloat(prompt('Qual o valor do álcool no posto Hiago Gas?'));
    let hiagoPetroGasolina = parseFloat(prompt('Qual o valor da gasolina no Hiago Petro?'));
    let tanque = 42;

    
    let calcHiagoShellAlcool, calcHiagoShellGasolina, calcHiagoPetroAlcool, calcHiagoPetroGasolina;

    // Comparar preços e determinar o posto mais barato para cada tipo de combustível
    if (hiagoShellAlcool < hiagoPetroAlcool) {
        calcHiagoShellAlcool = parseFloat(hiagoShellAlcool * tanque);
    } else {
        calcHiagoPetroAlcool = parseFloat(hiagoPetroAlcool * tanque);
    }

    if (hiagoShellGasolina < hiagoPetroGasolina) {
        calcHiagoShellGasolina = parseFloat(hiagoShellGasolina * tanque);
    } else {
        calcHiagoPetroGasolina = parseFloat(hiagoPetroGasolina * tanque);
    }


    if (calcHiagoShellAlcool && calcHiagoShellAlcool < calcHiagoShellGasolina) {
        alert(`${usuario}, é mais barato abastecer com álcool no posto Hiago Shell! \nO valor total para encher o tanque é R$${calcHiagoShellAlcool}.`);
    } else if (calcHiagoShellGasolina && calcHiagoShellGasolina < calcHiagoShellAlcool) {
        alert(`${usuario}, é mais barato abastecer com gasolina no posto Hiago Shell! \nO valor total para encher o tanque é R$${calcHiagoShellGasolina}.`);
    } else if (calcHiagoPetroAlcool && calcHiagoPetroAlcool < calcHiagoPetroGasolina) {
        alert(`${usuario}, é mais barato abastecer com álcool no posto Hiago Petro! \nO valor total para encher o tanque é R$${calcHiagoPetroAlcool}.`);
    } else if (calcHiagoPetroGasolina && calcHiagoPetroGasolina < calcHiagoPetroAlcool) {
        alert(`${usuario}, é mais barato abastecer com gasolina no posto Hiago Petro! \nO valor total para encher o tanque é R$${calcHiagoPetroGasolina}.`);
    } else {
        alert(`Os preços dos combustíveis nos postos Hiago Shell e Hiago Petro são iguais!`);
    }

   
    let confirma = prompt('Você deseja abastecer? S/N');

    if (confirma == 'S' || confirma == 's') {
        alert('Abastecimento realizado com sucesso!');

        inicio();
    } else if (confirma == 'N' || confirma == 'n') {
        alert('Abastecimento cancelado.');

        inicio();
    }
}

function manutencao() {
    let nomeEmpresa = [];
    let valor = [];
    let start = '';
    let final = 'N'

    while (start != final){
        let empresa = prompt('Qual é o nome da empresa?');
        nomeEmpresa.push(empresa);

        let preco = parseFloat(prompt('Qual o valor por aparelho?'));
        let quantAparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
        let desconto = parseInt(prompt('Qual a porcentagem de desconto?'));
        let minAparelhos = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));

        if (quantAparelhos >= minAparelhos){
            let calcManutencao = (quantAparelhos * preco);
            let calcDesconto = (( calcManutencao * desconto) / 100);
            let resultado = (calcManutencao - calcDesconto);

            alert(`O serviço de ${empresa} custará R$${resultado}.`);
            valor.push(resultado);
        } else if (quantAparelhos < minAparelhos){
            let calcManutencao = (quantAparelhos * preco);

            alert(`O serviço de ${empresa} custará R$${calcManutencao}.`);
            valor.push(calcManutencao);
        }

        let continuar = prompt(`Deseja informar novos dados, ${usuario}? (S/N)`);

        if (continuar == 'N' || continuar == 'n'){
            let start = 'N';
        } else if (continuar == 'S' || continuar == 's'){
            let start = '';
        }
    }

        let menorOrcamento = Math.min(...valor);
        let posicao = valor.indexOf(menorOrcamento);
        let nomeDaEmpresa = nomeEmpresa[posicao];
        alert(`O orçamento de menor valor é o de ${nomeDaEmpresa} por R$${menorOrcamento}.`);
        inicio();

}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    let confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo, ${usuario}.`)
        window.close();
    } else {
        inicio();
    }
}