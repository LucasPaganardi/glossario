function aplicarEstilos() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f9;
            color: #333;
        }

        h1 {
            color: #0056b3;
            text-align: center;
            border-bottom: 2px solid #ccc;
            padding-bottom: 10px;
        }

        .secao {
            margin-bottom: 30px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
        }

        h2 {
            color: #007bff;
            margin-top: 0;
            padding-bottom: 10px;
            border-bottom: 1px dashed #eee;
        }

        h3 {
            color: #bdbdbd;
            margin-top: 0;
            padding-bottom: 2px;
            border-bottom: 1px dashed #eee;
        }

        .termo-card {
            margin: 15px 0;
            padding: 10px;
            border-left: 5px solid #0056b3;
            background-color: #e9f7ff;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s;
        }

        .termo-card:hover {
            background-color: #d0eaff;
        }

        .termo-card h3 {
            margin: 0;
            display: inline-block;
            color: #0056b3;
        }

        .termo-card .expander {
            float: right;
            font-weight: bold;
            font-size: 1.2em;
        }

        .definicao {
            display: none; /* Escondido por padrão */
            margin-top: 10px;
            padding: 10px;
            border-top: 1px solid #cceeff;
            background-color: #f7fcff;
        }

        .definicao p {
            margin: 5px 0;
            line-height: 1.5;
        }

        .definicao strong {
            color: #007bff;
        }

        .definicao ul {
            list-style-type: none;
            padding-left: 0;
        }

        .definicao ul li::before {
            content: "• ";
            color: #28a745;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
    `;
    document.head.appendChild(style);
}

// Estrutura de Dados do Glossário (igual ao original)
const termosGlossario = [
    {
        secao: "Seção 11",
        termos: [
            {
                palavra: "HTML",
                significado_achado: "A linguagem para deixar o site bonito.",
                significado_real: "HyperText Markup Language. É a linguagem de marcação fundamental para estruturar o conteúdo de uma página web (cabeçalhos, parágrafos, imagens, links, etc.).",
                sinonimos: ["Marcação", "Estrutura", "Base"]
            },
            {
                palavra: "Desenvolvendo",
                significado_achado: "Ato de fazer um site funcionar.",
                significado_real: "O processo de criação, manutenção e aprimoramento de software, sistemas ou aplicações. No contexto web, é a construção do front-end e/ou back-end.",
                sinonimos: ["Programando", "Codificando", "Criando"]
            },
            {
                palavra: "JavaScript",
                significado_achado: "Um jeito de escrever código para o navegador.",
                significado_real: "Uma linguagem de programação de alto nível usada principalmente para tornar páginas web interativas. É essencial para o comportamento dinâmico (client-side).",
                sinonimos: ["JS", "Script", "ECMAScript"]
            },
            {
                palavra: "Análise",
                significado_achado: "Ler o código para ver se está certo.",
                significado_real: "O estudo detalhado dos requisitos, escopo ou código de um projeto para entender seu funcionamento, identificar problemas, ou planejar soluções.",
                sinonimos: ["Exame", "Avaliação", "Revisão"]
            },
            {
                palavra: "Demonstra",
                significado_achado: "Mostrar um resultado.",
                significado_real: "Ato de exibir, provar ou apresentar o funcionamento de um recurso, protótipo ou aplicação para um público ou cliente.",
                sinonimos: ["Exibe", "Prova", "Apresenta"]
            }
        ]
    },
    {
        secao: "Seção 12",
        termos: [
            {
                palavra: "Parâmetro",
                significado_achado: "Um nome que se dá para uma variável.",
                significado_real: "Um valor (variável) que é passado para uma função ou método quando ele é definido, permitindo que a função opere com diferentes dados.",
                sinonimos: ["Argumento", "Input", "Variável de entrada"]
            },
            {
                palavra: "Sistema",
                significado_achado: "Um programa de computador.",
                significado_real: "Um conjunto organizado de componentes (hardware, software e pessoas) que interagem para cumprir um objetivo específico.",
                sinonimos: ["Plataforma", "Aplicação", "Framework"]
            },
            {
                palavra: "Verifica",
                significado_achado: "Checar se o usuário fez algo certo.",
                significado_real: "Ato de checar uma condição, estado ou valor para determinar sua validade, correção ou se atende a um requisito específico.",
                sinonimos: ["Valida", "Testa", "Confirma"]
            },
            {
                palavra: "Incrementar",
                significado_achado: "Aumentar um número em 1.",
                significado_real: "Aumentar o valor de uma variável, geralmente em uma unidade (adicionar 1), comumente usado em loops e contadores.",
                sinonimos: ["Aumentar", "Acrescentar", "Adicionar"]
            },
            {
                palavra: "Alinhamento",
                significado_achado: "Deixar o texto ou objeto no centro da tela.",
                significado_real: "Em CSS/design, refere-se ao posicionamento e distribuição de elementos (texto, imagens, blocos) em relação a uma borda ou centro.",
                sinonimos: ["Posicionamento", "Distribuição", "Ajuste"]
            }
        ]
    },
    {
        secao: "Seção 13",
        termos: [
            {
                palavra: "Implementa",
                significado_achado: "Fazer o código funcionar.",
                significado_real: "Executar ou colocar em prática um plano, algoritmo ou funcionalidade. É a fase de codificação de uma solução.",
                sinonimos: ["Executa", "Constrói", "Aplica"]
            },
            {
                palavra: "Diretamente",
                significado_achado: "Fazer algo sem rodeios no código.",
                significado_real: "Ato de interagir com um elemento ou recurso sem passar por intermediários ou abstrações.",
                sinonimos: ["Imediatamente", "Prontamente", "Sem desvio"]
            },
            {
                palavra: "Considerado",
                significado_achado: "Algo que o programa usa.",
                significado_real: "Ser levado em conta ou tido como relevante dentro de um contexto ou avaliação de um requisito ou regra.",
                sinonimos: ["Reconhecido", "Visto", "Avaliado"]
            },
            {
                palavra: "Função",
                significado_achado: "Um bloco de código com um nome.",
                significado_real: "Um bloco de código reutilizável projetado para executar uma tarefa específica. Pode aceitar parâmetros e retornar um valor.",
                sinonimos: ["Método", "Rotina", "Sub-rotina"]
            },
            {
                palavra: "Atualizar",
                significado_achado: "Mudar o conteúdo da página.",
                significado_real: "Modificar, corrigir ou tornar mais recente um software, dado ou estado de uma aplicação para refletir novas informações ou versões.",
                sinonimos: ["Renovar", "Modificar", "Refrescar"]
            }
        ]
    }
];

// Função para gerar o HTML do glossário dinamicamente
function gerarGlossarioHTML() {
    const container = document.createElement('div');
    container.id = 'glossario-container';

    termosGlossario.forEach(secaoData => {
        const secaoDiv = document.createElement('div');
        secaoDiv.className = 'secao';

        const h2 = document.createElement('h2');
        h2.textContent = secaoData.secao;
        secaoDiv.appendChild(h2);

        secaoData.termos.forEach((termo, index) => {
            const idTermo = `${secaoData.secao.replace(/\s/g, '-')}-${index}`;

            const termoCard = document.createElement('div');
            termoCard.className = 'termo-card';
            termoCard.onclick = () => toggleDefinicao(idTermo);

            const h3 = document.createElement('h3');
            h3.textContent = termo.palavra;
            termoCard.appendChild(h3);

            const expander = document.createElement('span');
            expander.className = 'expander';
            expander.textContent = '+';
            termoCard.appendChild(expander);

            const definicao = document.createElement('div');
            definicao.id = `def-${idTermo}`;
            definicao.className = 'definicao';

            const p1 = document.createElement('p');
            p1.innerHTML = `<strong>Meu Significado:</strong> ${termo.significado_achado}`;
            definicao.appendChild(p1);

            const p2 = document.createElement('p');
            p2.innerHTML = `<strong>Significado Real:</strong> ${termo.significado_real}`;
            definicao.appendChild(p2);

            const p3 = document.createElement('p');
            p3.innerHTML = `<strong>3 Sinônimos:</strong>`;
            definicao.appendChild(p3);

            const ul = document.createElement('ul');
            termo.sinonimos.forEach(sinonimo => {
                const li = document.createElement('li');
                li.textContent = sinonimo;
                ul.appendChild(li);
            });
            definicao.appendChild(ul);

            termoCard.appendChild(definicao);
            secaoDiv.appendChild(termoCard);
        });

        container.appendChild(secaoDiv);
    });

    return container;
}

// Função JavaScript para mostrar/esconder a definição (igual ao original)
function toggleDefinicao(idTermo) {
    const definicao = document.getElementById(`def-${idTermo}`);
    const card = definicao.parentElement;
    const expander = card.querySelector('.expander');

    if (definicao.style.display === 'block') {
        definicao.style.display = 'none';
        expander.textContent = '+';
        card.style.borderLeftColor = '#0056b3';
        card.style.backgroundColor = '#e9f7ff';
    } else {
        definicao.style.display = 'block';
        expander.textContent = '-';
        card.style.borderLeftColor = '#28a745';
        card.style.backgroundColor = '#dff0d8';
    }
}

// Função principal para inicializar tudo
function inicializar() {
    // Aplicar estilos
    aplicarEstilos();

    // Criar e adicionar o título
    const h1 = document.createElement('h1');
    h1.textContent = 'Glossário Interativo de Termos de Programação';
    document.body.appendChild(h1);

    // Gerar e adicionar o glossário
    const glossario = gerarGlossarioHTML();
    document.body.appendChild(glossario);
}

// Executar quando o DOM estiver pronto (equivalente ao DOMContentLoaded)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}
