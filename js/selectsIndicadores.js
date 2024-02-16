function atualizarPeriodo() {
    var dropdown1 = document.getElementById("typeInterval");
    var dropdown2 = document.getElementById("periodo");
    var btn = document.getElementById("btn-processar");
    
    dropdown2.innerHTML = "<option value=''>Escolha um período ...</option>";
    btn.disabled = true;
    btn.classList.add("btn-secondary");

    // Determinar as opções a serem adicionadas com base na seleção no dropdown1
    if (dropdown1.value === "1") {
      var opcoes = ["Janeiro", "Feveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    } else if (dropdown1.value === "2") {
      var opcoes = ["1º Trimestre", "2º Trimestre", "3º Trimestre", "4º Trimestre"];
    } else if (dropdown1.value === "3") {
      var opcoes = ["2023"];
    }

    for (var i = 0; i < opcoes.length; i++) {
        var option = document.createElement("option");
        option.text = opcoes[i];
        option.value = opcoes[i];
        dropdown2.add(option);
      }

      dropdown2.disabled = false;
  
}

function habilitarProcessar(){
    var btn = document.getElementById("btn-processar");
    var dropdown = document.getElementById("periodo");
    
    btn.disabled = false;

    btn.classList.remove("btn-secondary");

    if (dropdown.value !== "") {
        btn.disabled = false;
        btn.classList.add("btn-primary"); // Habilitar o botão
      } else {
        btn.disabled = true;
        btn.classList.add("btn-secondary");
        // Desabilitar o botão
      }
}