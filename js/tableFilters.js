const dadosApi = [
    { 
        nomePagador: "João da Silva",
        identificacaoNota: "123456",
        dtEmissaoNota: "2023-02-01",
        dtCobranca: "2023-02-10",
        dtPagamento: "2023-02-20",
        valorNota: 100.00,
        status: "Pagamento realizado"
    },
    { 
        nomePagador: "Maria Oliveira",
        identificacaoNota: "789012",
        dtEmissaoNota: "2023-02-05",
        dtCobranca: "2023-03-15",
        dtPagamento: "",
        valorNota: 150.00,
        status: "Pagamento em atraso"
    },
    { 
        nomePagador: "José Pereira",
        identificacaoNota: "345678",
        dtEmissaoNota: "2023-02-10",
        dtCobranca: "2023-04-20",
        dtPagamento: "",
        valorNota: 80.00,
        status: "Cobrança realizada"
    },
    { 
        nomePagador: "Fernanda Silva",
        identificacaoNota: "123456",
        dtEmissaoNota: "2023-01-05",
        dtCobranca: "2023-01-15",
        dtPagamento: "2023-01-20",
        valorNota: 150.00,
        status: "Pagamento realizado"
    },
    { 
        nomePagador: "Rodrigo Oliveira",
        identificacaoNota: "789012",
        dtEmissaoNota: "2023-02-10",
        dtCobranca: "2023-02-20",
        dtPagamento: "",
        valorNota: 100.00,
        status: "Pagamento em atraso"
    },
    { 
        nomePagador: "Carla Santos",
        identificacaoNota: "345678",
        dtEmissaoNota: "2023-03-15",
        dtCobranca: "2023-03-25",
        dtPagamento: "",
        valorNota: 80.00,
        status: "Cobrança realizada"
    },
    { 
        nomePagador: "André Lima",
        identificacaoNota: "901234",
        dtEmissaoNota: "2023-04-20",
        dtCobranca: "2023-04-30",
        dtPagamento: "2023-05-05",
        valorNota: 200.00,
        status: "Pagamento realizado"
    },
    { 
        nomePagador: "Mariana Almeida",
        identificacaoNota: "567890",
        dtEmissaoNota: "2023-05-25",
        dtCobranca: "2023-06-05",
        dtPagamento: "",
        valorNota: 120.00,
        status: "Pagamento em atraso"
    },
    { 
        nomePagador: "Rafaela Costa",
        identificacaoNota: "234567",
        dtEmissaoNota: "2023-06-30",
        dtCobranca: "2023-07-10",
        dtPagamento: "2023-07-15",
        valorNota: 90.00,
        status: "Cobrança realizada"
    },
    { 
        nomePagador: "Paulo Souza",
        identificacaoNota: "890123",
        dtEmissaoNota: "2023-07-05",
        dtCobranca: "2023-07-15",
        dtPagamento: "",
        valorNota: 150.00,
        status: "Pagamento realizado"
    },
    { 
        nomePagador: "Amanda Lima",
        identificacaoNota: "456789",
        dtEmissaoNota: "2023-08-10",
        dtCobranca: "2023-08-20",
        dtPagamento: "2023-08-25",
        valorNota: 180.00,
        status: "Pagamento em atraso"
    },
    { 
        nomePagador: "Guilherme Santos",
        identificacaoNota: "012345",
        dtEmissaoNota: "2023-09-15",
        dtCobranca: "2023-09-25",
        dtPagamento: "",
        valorNota: 70.00,
        status: "Cobrança realizada"
    },
    { 
        nomePagador: "Camila Oliveira",
        identificacaoNota: "678901",
        dtEmissaoNota: "2023-10-20",
        dtCobranca: "2023-10-30",
        dtPagamento: "2023-11-05",
        valorNota: 110.00,
        status: "Pagamento realizado"
    },
    { 
        nomePagador: "Pedro Alves",
        identificacaoNota: "234567",
        dtEmissaoNota: "2023-11-25",
        dtCobranca: "2023-12-05",
        dtPagamento: "",
        valorNota: 130.00,
        status: "Pagamento em atraso"
    },
    { 
        nomePagador: "Bianca Martins",
        identificacaoNota: "890123",
        dtEmissaoNota: "2023-12-30",
        dtCobranca: "2024-01-10",
        dtPagamento: "2024-01-15",
        valorNota: 160.00,
        status: "Cobrança realizada"
    }
];

$(document).ready(function() {

    CarregaSelectsdaTabela();
    CarregarDadosNaTabela(dadosApi);

    $('#mesEmissao').change(function() {
        MudancaFiltrosTabela();
    });

    $('#mesCobranca').change(function() {
        MudancaFiltrosTabela();
    });

    $('#mesPagamento').change(function() {
        MudancaFiltrosTabela();
    });

    $('#statusNota').change(function() {
        MudancaFiltrosTabela();
    });

    $('#btnLimparFiltrosTabela').click(function() {
        CarregarDadosNaTabela(dadosApi);
        $(".selecaoPadraoFiltroTabela").val("todos");
    });

});


function MudancaFiltrosTabela(){

    var mesEmissao = $('#mesEmissao').val();
        var mesCobranca = $('#mesCobranca').val();
        var mesPagamento = $('#mesPagamento').val();
        var statusNota = $('#statusNota').val();
        
        var dadosFiltradosEmissao = [];
        if(mesEmissao != 'todos'){
            dadosFiltradosEmissao = filtrarPorMesEmissao(dadosApi, mesEmissao);
        } else {
            dadosFiltradosEmissao = dadosApi;
        }

        var dadosFiltradosCobranca = [];

        if(mesCobranca != 'todos'){
            dadosFiltradosCobranca = filtrarPorMesCobranca(dadosFiltradosEmissao, mesCobranca);
        } else {
            dadosFiltradosCobranca = dadosFiltradosEmissao;
        }

        var dadosFiltradosPagamento = [];

        if(mesPagamento != 'todos'){
            dadosFiltradosPagamento = filtrarPorMesCobranca(dadosFiltradosCobranca, mesCobranca);
        } else {
            dadosFiltradosPagamento = dadosFiltradosCobranca;
        }
        
        var dadosFiltradosStatusNota = [];

        if(statusNota != 'todos'){
            dadosFiltradosStatusNota = filtrarPorStatus(dadosFiltradosPagamento, statusNota);
        } else {
            dadosFiltradosStatusNota = dadosFiltradosPagamento;
        }
        
        
        CarregarDadosNaTabela(dadosFiltradosStatusNota);

}

function CarregarDadosNaTabela(dados){

    $("#tabelaNotas tbody").empty();
    var tbody = $('#tabelaNotas tbody');

    $.each(dados, function(i, item) {
        var tr = $('<tr>').appendTo(tbody);
        $('<td>').text(item.nomePagador).appendTo(tr);
        $('<td>').text(item.identificacaoNota).appendTo(tr);
        $('<td>').text(formatarDataParaTabela(item.dtEmissaoNota)).appendTo(tr);
        $('<td>').text(formatarDataParaTabela(item.dtCobranca)).appendTo(tr);
        $('<td>').text(formatarDataParaTabela(item.dtPagamento)).appendTo(tr);
        $('<td>').text(item.valorNota.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).appendTo(tr);
        var iconeHTML = $('<i>').addClass('fa-solid fa-file-pdf');
        var iconeHTML2 = $('<i>').addClass('fa-solid fa-file-pdf');
        $('<td>').append(iconeHTML).appendTo(tr);
        $('<td>').append(iconeHTML2).appendTo(tr);
        
        var classe = 'badge ';
        switch (item.status) {
            case 'Pagamento realizado':
              classe += 'text-bg-success'
              break;
            case 'Pagamento em atraso':
                classe += 'text-bg-warning'
                break;
            case 'Cobrança realizada':
                classe += 'text-bg-info'
                break;
            case 'Emitida':
                classe += 'text-bg-info'
                break;
            default:
              console.log(`Sorry, we are out of ${expr}.`);
    };
    var span = $('<span>').text(item.status).addClass(classe);
    $('<td>').append(span).appendTo(tr);
});}

function CarregaSelectsdaTabela(){

     var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
     var statusNota = ["Pagamento realizado", "Pagamento em atraso", "Cobrança realizada", "Emitida"];

    for (var i = 0; i < meses.length; i++) {
        $('#mesEmissao').append('<option value="' + (i + 1) + '">' + meses[i] + '</option>');
        $('#mesCobranca').append('<option value="' + (i + 1) + '">' + meses[i] + '</option>');
        $('#mesPagamento').append('<option value="' + (i + 1) + '">' + meses[i] + '</option>');
    }

    for (var i = 0; i < statusNota.length; i++) {
        $('#statusNota').append('<option value="' + statusNota[i] + '">' + statusNota[i] + '</option>');
    }}

function stringAPIParaData(dataString) {
   
    var partes = dataString.split('-');
    
    if (partes.length === 3) {
        
        var ano = parseInt(partes[0]);
        var mes = parseInt(partes[1]); 
        var dia = parseInt(partes[2]);
        
       
        if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
            return new Date(ano, mes, dia);
        }
    }
    
    return null;
}


function formatarDataParaTabela(dado) {
    if (!dado || dado == "") return "";

    let partes = dado.split('-');
    var dia = String(partes[2]).padStart(2, '0'); 
    var mes = String(partes[1]).padStart(2, '0'); 
    var ano = partes[0]; 

    return dia + '/' + mes + '/' + ano; 
}

function filtrarPorMesEmissao(dados, mesEmissao) {
    return dados.filter(item => stringAPIParaData(item.dtEmissaoNota).getMonth() == mesEmissao);
    }

function filtrarPorMesCobranca(dados, mesCobranca) {
        return dados.filter(item => stringAPIParaData(item.dtCobranca).getMonth() == mesCobranca);
        }

function filtrarPorMesPagamento(dados, mesPagamento) {
            return dados.filter(item => stringAPIParaData(item.dtPagamento).getMonth() == mesPagamento);
            }

function filtrarPorStatus(dados, status) {
    
    return dados.filter(item => {
        return item.status.trim().toUpperCase() == status.trim().toUpperCase()});
    }


