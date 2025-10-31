// Código JavaScript para gerar dinamicamente uma seção de direitos autorais (copyright) no rodapé do site
// Salve este código em um arquivo separado, ex: 'copyright.js', e linke no HTML via <script src="copyright.js"></script>
// Ele cria um elemento <footer> com o ano atual e informações básicas.

document.addEventListener('DOMContentLoaded', () => {
    // Cria o elemento footer
    const footer = document.createElement('footer');
    footer.id = 'copyright-footer';
    footer.style.position = 'relative'; // Para não interferir com o fundo fixo
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.backgroundColor = 'rgba(0, 0, 0, 0.44)'; // Fundo semi-transparente
    footer.style.color = '#fff';
    footer.style.fontSize = '14px';
    footer.style.zIndex = '10'; // Acima do fundo

    // Conteúdo do copyright (ano atual dinâmico)
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        &copy; ${currentYear} Glossário Interativo de Termos de Programação. Todos os direitos reservados.<br>
        Desenvolvido por Lucas Paganardi. | <a href="#" style="color: #ccc;">Política de Privacidade</a> | <a href="#" style="color: #ccc;">Termos de Uso</a>
    `;

    // Adiciona ao body
    document.body.appendChild(footer);
});
