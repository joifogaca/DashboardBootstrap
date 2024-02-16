function formatarData(dado) {
    if (!dado || dado == "") return ""; // Retorna uma string vazia se a data for nula ou indefinida

    let data = new Date(dado);
    var dia = String(data.getDate()).padStart(2, '0'); // Obtém o dia, garantindo que tenha dois dígitos
    var mes = String(data.getMonth() + 1).padStart(2, '0'); // Obtém o mês (vale ressaltar que os meses são baseados em zero, então adicionamos 1), garantindo que tenha dois dígitos
    var ano = data.getFullYear(); // Obtém o ano

    return dia + '/' + mes + '/' + ano; // Retorna a data formatada
}

$(document).ready(function() {
   
    // Array com os nomes dos meses
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var statusNota = ["Pagamento realizado", "Pagamento em atraso", "Cobrança realizada", "Emitida"];

    var dados = [
        { 
            nomePagador: "João da Silva",
            identificacaoNota: "123456",
            dtEmissaoNota: "2024-02-01",
            dtCobranca: "2024-02-10",
            dtPagamento: "2024-02-20",
            valorNota: 100.00,
            status: "Pagamento realizado"
        },
        { 
            nomePagador: "Maria Oliveira",
            identificacaoNota: "789012",
            dtEmissaoNota: "2024-02-05",
            dtCobranca: "2024-02-15",
            dtPagamento: "",
            valorNota: 150.00,
            status: "Pagamento em atraso"
        },
        { 
            nomePagador: "José Pereira",
            identificacaoNota: "345678",
            dtEmissaoNota: "2024-02-10",
            dtCobranca: "2024-02-20",
            dtPagamento: "",
            valorNota: 80.00,
            status: "Cobrança realizada"
        },
        // Adicione mais itens conforme necessário
    ];

    var tbody = $('#tabelaNotas tbody');

    $.each(dados, function(i, item) {
        var tr = $('<tr>').appendTo(tbody);
        $('<td>').text(item.nomePagador).appendTo(tr);
        $('<td>').text(item.identificacaoNota).appendTo(tr);
        $('<td>').text(formatarData(item.dtEmissaoNota)).appendTo(tr);
        $('<td>').text(formatarData(item.dtCobranca)).appendTo(tr);
        $('<td>').text(formatarData(item.dtPagamento)).appendTo(tr);
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
});

    // Loop para popular o dropdown com os meses
    for (var i = 0; i < meses.length; i++) {
        $('#mesEmissao').append('<option value="' + (i + 1) + '">' + meses[i] + '</option>');
        $('#mesCobranca').append('<option value="' + (i + 1) + '">' + meses[i] + '</option>');
        $('#mesPagamento').append('<option value="' + (i + 1) + '">' + meses[i] + '</option>');
    }

    for (var i = 0; i < statusNota.length; i++) {
        $('#statusNota').append('<option value="' + (i + 1) + '">' + statusNota[i] + '</option>');
    }

    $('#mesEmissao').change(function() {
        var mesSelecionado = $(this).val();
console.log(mesSelecionado);
        if (mesSelecionado === 'todos') {
            $('#tabelaNotas tbody tr').show();
        } else {
            $('#tabelaNotas tbody tr').hide();
            $('#tabelaNotas tbody tr').each(function() {
                //var dataEmissao = new Date($(this).find('td:eq(2)').text());
                let strEmissao = $(this).find('td:eq(2)').text();
                let dataEmissao = stringParaData(strEmissao);
                console.log(dataEmissao);
                var mes = dataEmissao.getMonth() + 1;
                if (mes == mesSelecionado) {
                    $(this).show();
                }
            });
        }
    });

});

function stringParaData(dataString) {
    // Dividir a string da data em dia, mês e ano
    var partes = dataString.split('/');
    
    // Verificar se a string da data tem três partes
    if (partes.length === 3) {
        // Extrair o dia, mês e ano da string
        var dia = parseInt(partes[0]);
        var mes = parseInt(partes[1]) - 1; // Meses são baseados em zero, então subtrai-se 1
        var ano = parseInt(partes[2]);
        
        // Verificar se os componentes da data são válidos
        if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
            // Criar um novo objeto Date com os componentes extraídos
            return new Date(ano, mes, dia);
        }
    }
    
    // Se a string da data não estiver no formato esperado ou se os componentes forem inválidos, retorna null
    return null;
}


