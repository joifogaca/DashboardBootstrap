const ctxInadimplencia = document.getElementById('inadimplenciaChart');

const dataInadimplencia = [
    { mes: "Janeiro", valor: 10 },
    { mes: "Fevereiro", valor: 20 },
    { mes: "Março", valor: 30 },
    { mes: "Abril", valor: 50 },
    { mes: "Maio", valor: 60 },
    { mes: "Junho", valor: 80 },
    { mes: "Julho", valor: 40 },
    { mes: "Agosto", valor: 40 },
    { mes: "Setembro", valor: 50 },
    { mes: "Outubro", valor: 70 },
    { mes: "Novembro", valor: 90 },
    { mes: "Dezembro", valor: 100 }
]
new Chart(ctxInadimplencia, {
  type: 'bar',
  data: {
    labels: dataInadimplencia.map(row => row.mes),
    datasets: [{
      label: 'Gráfico de Inadimplência',
      data: dataInadimplencia.map(row => row.valor),
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctxReceita = document.getElementById('receitaChart');

const dataReceita = [
    { mes: "Janeiro", valor: 30 },
    { mes: "Fevereiro", valor: 20 },
    { mes: "Março", valor: 30 },
    { mes: "Abril", valor: 80 },
    { mes: "Maio", valor: 60 },
    { mes: "Junho", valor: 80 },
    { mes: "Julho", valor: 90 },
    { mes: "Agosto", valor: 40 },
    { mes: "Setembro", valor: 60 },
    { mes: "Outubro", valor: 70 },
    { mes: "Novembro", valor: 90 },
    { mes: "Dezembro", valor: 100 }
]
new Chart(ctxReceita, {
  type: 'bar',
  data: {
    labels: dataReceita.map(row => row.mes),
    datasets: [{
      label: 'Gráfico de Inadimplência',
      data: dataReceita.map(row => row.valor),
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});