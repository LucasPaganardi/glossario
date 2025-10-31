// Código JavaScript para criar um plano de fundo animado (canvas) para o site
// Este arquivo deve ser salvo como 'background.js' e linkado no HTML via <script src="background.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    // Cria o canvas e o adiciona ao body
    const canvas = document.createElement('canvas');
    canvas.id = 'background-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1'; // Atrás do conteúdo
    canvas.style.pointerEvents = 'none'; // Não interfere com cliques
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let stars = [];
    const numStars = 100; // Número de estrelas

    // Função para redimensionar o canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Classe para estrelas
    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speed = Math.random() * 0.5 + 0.1;
            this.opacity = Math.random() * 0.8 + 0.2;
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Inicializa estrelas
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
    }

    // Função de animação
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Fundo gradiente escuro (tema programação)
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#0f0f23'); // Escuro topo
        gradient.addColorStop(1, '#1a1a2e'); // Escuro fundo
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Desenha e atualiza estrelas
        stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
});
