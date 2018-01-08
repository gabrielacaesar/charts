      google.charts.load('current', {'packages':['treemap']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'ID');
      data.addColumn('string', 'Parent');
      data.addColumn('number', 'Number Of Lines');
      data.addRows([
        ['Principais autos de infração', null, 0],

        ['CLT', 'Principais autos de infração', null],
        ['Lei 5.889 de 1973', 'Principais autos de infração', null],
        ['Lei 7.998 de 1990', 'Principais autos de infração', null],
        ['Outros', 'Principais autos de infração', null],

        ['45% dos autos são da Consolidação das Leis do Trabalho', 'CLT', null],
        ['Artigo 41: admitir ou manter empregado sem o respectivo registro em livro, ficha ou sistema eletrônico competente', '45% dos autos são da Consolidação das Leis do Trabalho', 221],
        ['Artigo 29, caput: deixar de anotar a CTPS do empregado, no prazo de 48 horas, contado do início da prestação laboral', '45% dos autos são da Consolidação das Leis do Trabalho', 143],
        ['Artigo 444, c/c art 2 da Lei 7.998 de 1990: manter empregado trabalhando sob condições contrárias às disposições de proteção do trabalho, quer seja submetido a regime de trabalho forçado, quer seja reduzido à condição análoga à de escravo', '45% dos autos são da Consolidação das Leis do Trabalho', 107],
        ['Artigo 459, parágrafo 1: deixar de efetuar, até o 5º (quinto) dia útil do mês subsequente ao vencido, o pagamento integral do salário mensal devido ao empregado', '45% dos autos são da Consolidação das Leis do Trabalho', 78],
        ['Artigo 464: efetuar o pagamento do salário do empregado, sem a devida formalização do recibo', '45% dos autos são da Consolidação das Leis do Trabalho', 73],
        ['Artigo 74, S 2º: Deixar de consignar em registro mecânico, manual ou sistema eletrônico, os horários de entrada, saída e período de repouso efetivamente praticados pelo empregado, nos estabelecimentos com mais de 10 (dez) empregados', '45% dos autos são da Consolidação das Leis do Trabalho', 72],
        ['Artigo 13, caput: admitir empregado que não possua CTPS', '45% dos autos são da Consolidação das Leis do Trabalho', 67],

        ['47% dos autos são da Lei 5.889 de 1973', 'Lei 5.889 de 1973', null],
        ['Artigo 13, c/c item 31.5.1.3.1, alínea "a", da NR-31: deixar de submeter trabalhador a exame médico admissional, antes que assuma suas atividades', '47% dos autos são da Lei 5.889 de 1973', 129],
        ['Artigo 13, c/c item 31.20.1 da NR-31: deixar de fornecer aos trabalhadores, gratuitamente, equipamentos de proteção individual', '47% dos autos são da Lei 5.889 de 1973', 98],
        ['Artigo 13, c/c item 31.23.5.1, alínea "b", da NR-31: deixar de dotar o alojamento de armários individuais para guarda de objetos pessoais', '47% dos autos são da Lei 5.889 de 1973', 81],
        ['Artigo 13, c/c item 31.5.1.3.6 da NR-31: deixar de equipar o estabelecimento rural com material necessário à prestação de primeiros socorros', '47% dos autos são da Lei 5.889 de 1973', 75],
        ['Artigo 13, c/c item 31.23.5.3 da NR-31: deixar de fornecer roupas de cama adequadas às condições climáticas locais', '47% dos autos são da Lei 5.889 de 1973', 70],

        ['4% dos autos são da Lei 7.998 de 1990', 'Lei 7.998 de 1990', null],
        ['Lei 7.998 de 1990	- Artigo 24: deixar de comunicar ao Ministério do Trabalho e Emprego a admissão de empregado, no prazo estipulado em notificação para comprovação do registro do empregado lavrada em ação fiscal conduzida por auditor-fiscal do Trabalho', '4% dos autos são da Lei 7.998 de 1990', 108],

      ]);

      var tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

      var options = {
        highlightOnMouseOver: true,
        minColor: '#F78181',
        midColor: '#FE9A2E',
        maxColor: '#FF0000',
        headerHeight: 60,
        fontColor: 'black',
        showScale: false,
        height: 700,
        useWeightedAverageForAggregation: true
      };

        tree.draw(data, options);

      }
