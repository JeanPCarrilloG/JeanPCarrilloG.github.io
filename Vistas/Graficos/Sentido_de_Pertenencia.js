function crearGraficoPaz() {
  const tituloEjeY = document.getElementById('tituloEjeY').innerText;
  const tituloEjeX = document.getElementById('tituloEjeX').innerText;

  const ctx = document.getElementById('graficoPaz').getContext('2d');
  if (window.chartPaz) window.chartPaz.destroy();

  window.chartPaz = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
        2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      datasets: [{        
        data: [151, 149, 150, 151, 151, 150, 150, 148, 146,
          148, 150, 151, 148, 151, 151, 146, 146],
        fill: false,
        borderColor: 'darkblue',
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: tituloEjeY
          }
        },
        x: {
          title: {
            display: true,
            text: tituloEjeX
          }
        }
      }
    }
  });
}

function crearGraficoHomicidios() {
  const ejeYHomicidios = document.getElementById('ejeYHomicidios').innerText;
  const ejeXHomicidios = document.getElementById('ejeXHomicidios').innerText;

  const ctx = document.getElementById('graficoHomicidios').getContext('2d');
  if (window.chartHomicidios) window.chartHomicidios.destroy();

  window.chartHomicidios = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023, 2024],
      datasets: [{        
        data: [62.45, 66.97, 69.16, 69.45, 56.70, 48.03, 42.47, 40.46, 39.32,
          36.47, 35.35, 34.18, 35.32, 35.68, 33.16, 28.41, 26.90, 25.74, 25.02,
          25.34, 25.75, 24.24, 27.48, 25.7, 25.7, 25.4],
        fill: false,
        borderColor: 'darkgreen',
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: ejeYHomicidios
          }
        },
        x: {
          title: {
            display: true,
            text: ejeXHomicidios
          }
        }
      }
    }
  });
}

function crearGraficoDesempleo() {
  const ejeYDesempleo = document.getElementById('ejeYDesempleo').innerText;
  const ejeXDesempleo = document.getElementById('ejeXDesempleo').innerText;

  const ctx = document.getElementById('graficoDesempleo').getContext('2d');
  if (window.chartDesempleo) window.chartDesempleo.destroy();

  window.chartDesempleo = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        1999,
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023, 2024,
      ],
      datasets: [{

        data: [
          20.1,
          20.5, 15, 14.5, 13.2, 13.7, 11.1, 11.1, 11.2, 11.3, 12.1,
          11.2, 10.3, 10, 9.2, 8.8, 8.6, 8.9, 9.1, 9.4, 10.3,
          16, 13.9, 10.5, 9.6, 9.6,
        ],
        fill: false,
        borderColor: 'darkred',
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: ejeYDesempleo
          }
        },
        x: {
          title: {
            display: true,
            text: ejeXDesempleo
          }
        }
      }
    }
  });
}

const observar = new MutationObserver(() => crearGraficoPaz());
observar.observe(document.getElementById('textosGrafico'), {
  childList: true, subtree: true, characterData: true
});

const observarHomicidios = new MutationObserver(() => crearGraficoHomicidios());
observarHomicidios.observe(document.getElementById('textosGraficoHomicidios'), {
  childList: true, subtree: true, characterData: true
});

const observarDesempleo = new MutationObserver(() => crearGraficoDesempleo());
observarDesempleo.observe(document.getElementById('textosGraficoDesempleo'), {
  childList: true, subtree: true, characterData: true
});

window.onload = function () {
  setTimeout(() => {
    crearGraficoPaz();
    crearGraficoHomicidios();
    crearGraficoDesempleo();
  }, 100);
};
