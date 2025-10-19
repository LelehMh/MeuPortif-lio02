// Certifica-se de que THREE está disponível, assumindo que foi carregado via CDN no index.html
const THREE = window.THREE;

const perfilData = {
    nome: "Letícia Mariah",
    titulo: "Estudante de Engenharia de Software",
    bio: "Sou uma estudante de Engenharia de Software, apaixonada por tecnologia, programação e criação de soluções inovadoras. Desde pequena, sempre fui curiosa, explorando jogos, edições e ferramentas digitais, buscando entender como as coisas funcionam e como posso melhorar e criar novas soluções. Estou sempre em busca de novos aprendizados e desafios, com foco em unir criatividade, raciocínio lógico e habilidades práticas para gerar impacto positivo através da tecnologia.",
    linkedin: "https://www.linkedin.com/in/let%C3%ADcia-mariah-4548a523a",
    github: "https://github.com/LelehMh",
    youtube: "https://www.youtube.com/@leticiamariah2960",
    whatsapp: "https://wa.me/556196749763",
    fotoUrl: "image/EUEUEU.jpg"
};

const navItems = [
    { id: 'perfil', label: 'Perfil' },
    { id: 'formacao', label: 'Formação' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'interesses', label: 'Interesses' },
];

const formacaoData = [
    {
        titulo: "Bacharelado, Engenharia de Software - UniCEUB",
        periodo: "Em andamento (a partir de ago/2025)",
        descricao: "Em formação na área de Computação e Engenharia de Software, desenvolvendo habilidades em programação, banco de dados, lógica computacional e metodologias de desenvolvimento. Concluindo uma base sólida para atuar no desenvolvimento de sistemas e soluções tecnológicas que unam eficiência e inovação.",
    },
    {
        titulo: "Técnico em Informática - Escola Técnica de Ceilândia",
        periodo: "ago/2022 - dez/2023",
        descricao: "Formação Técnica com foco em desenvolvimento, gestão e suporte em TI. Trabalhei com: Linguagem de Programação, Linguagem Visual, Banco de Dados, Desenvolvimento de Interfaces Web e Segurança da Informação.",
    },
    {
        titulo: "Ensino Médio - Centro de Ensino Médio 04",
        periodo: "Completo",
        descricao: "Participei ativamente de diversos trabalhos em grupo e projetos escolares. Colaborei na criação de designs para posts e artes de eventos escolares, desenvolvendo habilidades em trabalho em equipe, gestão de projetos e organização.",
    },
];

const cursosComplementares = [
    'Operador de Micro', 'Inglês Técnico', 'Logística', 'Linguagem de Programação',
    'Português Técnico', 'Relações Humanas no Trabalho', 'Montagem e Configuração de Sistemas',
    'Metodologia de Pesquisa e Ensino', 'Legislação Aplicada', 'Banco de Dados'
];

const experienciaData = [
    { titulo: "Nail Designer", anim: 'up', descricao: "Desenvolvi habilidades essenciais de gestão e organização de projetos, aprimorando o atendimento ao cliente, gestão de agendamentos, finanças e prospecção, que são cruciais para o gerenciamento de sistemas e produtos." },
    { titulo: "Vendedor Autônomo Diverso", anim: 'down', descricao: "Como vendedor autônomo, aprimorei a gestão de processos e a análise de dados (financeiros), desenvolvendo capacidade de negociação e persuasão, habilidades valiosas no desenvolvimento de software e na interação com stakeholders." },
    { titulo: "Designer Gráfica Amadora", anim: 'up', descricao: "Minha experiência com design e edição me ensinou a importância da comunicação visual e da usabilidade, além de aprimorar a atenção aos detalhes e a criatividade na resolução de problemas, elementos fundamentais para o design de interfaces (UI/UX)." },
    { titulo: "Assistente de Consultora Financeira", anim: 'down', descricao: "Atuei na análise e organização de dados, na compreensão de processos de mercado e no atendimento a clientes, competências essenciais para sistemas de análise de dados (BI) e para a arquitetura de soluções financeiras." },
    { titulo: "Freelances Diversos", anim: 'up', descricao: "Em diversos projetos como freelancer, desenvolvi autonomia e capacidade de adaptar-me rapidamente a diferentes desafios e tecnologias. Minha experiência em resolução de problemas e gestão de tempo me preparou para a rotina dinâmica e variada do desenvolvimento de software." },
];

const habilidadesData = [
    { titulo: "Programação", emoji: "💻", descricao: "Desenvolvimento de soluções utilizando lógica de programação e criação de códigos eficientes.", progresso: 85, anim: 'right' },
    { titulo: "Desenvolvimento Web", emoji: "🌐", descricao: "Criação de sites e interfaces interativas, utilizando boas práticas de design e usabilidade.", progresso: 90, anim: 'up' },
    { titulo: "Análise de Dados", emoji: "📊", descricao: "Coleta, organização e interpretação de informações para tomada de decisões.", progresso: 75, anim: 'right' },
    { titulo: "Edição de Vídeos e Imagens", emoji: "🎨", descricao: "Habilidades em edição, incluindo ajustes visuais, cortes, montagem e criação de conteúdos atraentes.", progresso: 80, anim: 'down' },
    { titulo: "Gestão e Organização 🐱", emoji: "🗂️", descricao: "Planejamento, execução e acompanhamento de atividades, controle de prazos e organização de recursos, com a agilidade de um felino!", progresso: 95, anim: 'left' },
    { titulo: "Criatividade e Inovação", emoji: "✨", descricao: "Capacidade de propor soluções novas, pensar fora da caixa e transformar ideias em projetos funcionais.", progresso: 88, anim: 'up' },
    { titulo: "Comunicação e Trabalho em Equipe", emoji: "🤝", descricao: "Capacidade de se comunicar claramente e colaborar em projetos coletivos.", progresso: 92, anim: 'right' },
];

const projetosData = [
    {
        titulo: "Estudos e pequenos projetos de programação",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-square text-[#f472b6]">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m10 10-2 2 2 2" />
            <path d="m14 14 2-2-2-2" />
        </svg>`,
        descricao: "Desenvolvimento de soluções, lógica de programação e construção de projetos práticos.",
        tags: ["Lógica de Programação", "Python", "JavaScript", "HTML", "CSS"],
        anim: 'left'
    },
    {
        titulo: "Criação de conteúdos digitais",
        icon: `<img src="https://img.icons8.com/?size=100&id=QO09dQreTaii&format=png&color=F472B6" alt="Icone de Criação de Conteúdo" class="w-16 h-16 object-contain filter brightness-110 saturate-150 hue-rotate-30" onerror="this.onerror=null; this.src='https://placehold.co/60x60/f472b6/0d0d26?text=CT'" />`,
        descricao: "Criação e design de artes digitais, edição de imagens e vídeos, e desenvolvimento de materiais de estudo.",
        tags: ["Design Gráfico", "Edição de Vídeo", "Comunicação Visual"],
        anim: 'right'
    },
    {
        titulo: "Desenvolvimento de mapas mentais e materiais de estudo",
        icon: `<img src="https://img.icons8.com/?size=100&id=bc35kscpXJkc&format=png&color=F472B6" alt="Icone de Mapas Mentais" class="w-16 h-16 object-contain filter brightness-110 saturate-150 hue-rotate-30" onerror="this.onerror=null; this.src='https://placehold.co/60x60/f472b6/0d0d26?text=MM'" />`,
        descricao: "Aplicação de organização e clareza na transmissão de conhecimento, para estudos e concursos.",
        tags: ["Organização", "Metodologia", "Didática"],
        anim: 'left'
    },
    {
        titulo: "Gerenciamento de Grupos e Pesquisas",
        icon: `<img src="https://img.icons8.com/?size=100&id=102880&format=png&color=F472B6" alt="Icone de Gerenciamento de Grupo" class="w-16 h-16 object-contain filter brightness-110 saturate-150 hue-rotate-30" onerror="this.onerror=null; this.src='https://placehold.co/60x60/f472b6/0d0d26?text=GP'" />`,
        descricao: "Minhas experiências em gerenciar grupos e trabalhos de pesquisa e apresentações me ensinaram a ser um ponto de motivação para uma boa performance.",
        tags: ["Liderança", "Trabalho em Equipe", "Comunicação"],
        anim: 'right'
    },
];

const vivenciasImagens = [
    "image/Imagem do WhatsApp de 2025-09-13 à(s) 21.12.50_ec1be269.jpg",
    "image/Imagem do WhatsApp de 2025-09-13 à(s) 21.12.51_1c63ba3b.jpg",
    "image/Imagem do WhatsApp de 2025-09-13 à(s) 21.12.51_10fd4683.jpg",
];

const customStyles = `
    .section {
        padding: 8rem 1rem 6rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10;
    }
    .timeline-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #38bdf8;
        border: 2px solid #1a1a38;
        transform: translateX(-50%);
        z-index: 10;
    }
    .progress-bar {
        height: 8px;
        background-color: #1a1a38;
        border-radius: 9999px;
        overflow: hidden;
    }
    .progress-fill {
        height: 100%;
        background-color: #38bdf8;
        transition: width 1s ease-in-out;
    }
    
    #background-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        pointer-events: none;
        opacity: 0.2;
    }

    @keyframes fadeInMoveUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInMoveDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInMoveLeft {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInMoveRight {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
    }

    .animate-on-scroll { opacity: 0; }
    .animate-on-scroll.visible.up { animation: fadeInMoveUp 1s forwards; }
    .animate-on-scroll.visible.down { animation: fadeInMoveDown 1s forwards; }
    .animate-on-scroll.visible.left { animation: fadeInMoveLeft 1s forwards; }
    .animate-on-scroll.visible.right { animation: fadeInMoveRight 1s forwards; }
`;

// --- Variáveis Globais de Estado ---
let isMenuOpen = false;
const scrollElements = [];

// --- FUNÇÕES DE UTILITY ---

/**
 * Cria um elemento HTML com classes.
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement}
 */
function createElementWithClass(tag, className) {
    const el = document.createElement(tag);
    if (className) {
        el.className = className;
    }
    return el;
}

/**
 * Lida com o SmoothScroll para links âncora.
 * @param {Event} e
 */
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // Fecha o menu móvel após o clique (se estiver aberto)
        if (window.innerWidth < 768 && isMenuOpen) {
            toggleMobileMenu(false);
        }
    }
}

/**
 * Toggle para o menu móvel.
 * @param {boolean} forceState
 */
function toggleMobileMenu(forceState = null) {
    isMenuOpen = forceState !== null ? forceState : !isMenuOpen;
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');

    if (menu) {
        menu.classList.toggle('hidden', !isMenuOpen);
        menu.classList.toggle('block', isMenuOpen);
    }
    if (btn) {
        // Atualiza o ícone do botão (hamburger/x)
        const path = btn.querySelector('path');
        if (path) {
            path.setAttribute('d', isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7");
        }
    }
}

/**
 * Registra um elemento para a animação de scroll.
 * @param {HTMLElement} el
 * @param {string} animClass
 */
function setScrollRef(el, animClass) {
    el.classList.add('animate-on-scroll', animClass);
    scrollElements.push(el);
}

/**
 * Inicializa o IntersectionObserver para as animações de scroll.
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Encontra a classe de animação e adiciona 'visible'
                const animClass = ['up', 'down', 'left', 'right'].find(c => entry.target.classList.contains(c));
                if (animClass) {
                    entry.target.classList.add('visible', animClass);
                    obs.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    scrollElements.forEach(el => {
        if (el) observer.observe(el);
    });
}

// --- LÓGICA DO THREE.JS (Fundo Animado) ---
function initThreeBackground() {
    if (!THREE) {
        console.warn("Three.js não carregado. Pulando animação de fundo.");
        return;
    }

    let scene, camera, renderer, particles, animationId;
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;

    // Define a geometria de um "gatinho" minimalista (cabeça redonda e orelhas triangulares)
    // Usamos um Grupo para manter a cabeça e as orelhas juntas.
    function createMinimalCatGeometry() {
        const catGroup = new THREE.Group();
        const headGeometry = new THREE.SphereGeometry(1.5, 8, 8); // Cabeça redonda
        const earGeometry = new THREE.ConeGeometry(1, 1, 3); // Orelhas triangulares

        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });

        const head = new THREE.Mesh(headGeometry, material);
        head.scale.y = 0.8; // Achata um pouco a cabeça
        
        // Orelha Esquerda
        const earL = new THREE.Mesh(earGeometry, material);
        earL.position.set(-1.2, 1.2, 0);
        earL.rotation.z = Math.PI / 4;
        earL.rotation.x = Math.PI / 2;

        // Orelha Direita
        const earR = new THREE.Mesh(earGeometry, material);
        earR.position.set(1.2, 1.2, 0);
        earR.rotation.z = -Math.PI / 4;
        earR.rotation.x = Math.PI / 2;
        
        catGroup.add(head);
        catGroup.add(earL);
        catGroup.add(earR);
        
        catGroup.scale.set(0.2, 0.2, 0.2); // Reduz o tamanho do gatinho
        return catGroup;
    }

    function init() {
        scene = new THREE.Scene();
        
        // Configuração inicial da câmera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 50;

        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // --- Partículas Abstratas (Estrelas/Poças de Luz) ---
        const particleCount = 1500;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const color = new THREE.Color();

        const accentPink = new THREE.Color(0xf472b6);
        const accentBlue = new THREE.Color(0x38bdf8);

        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 200;
            const y = (Math.random() - 0.5) * 200;
            const z = (Math.random() - 0.5) * 200;
            positions.push(x, y, z);
            
            color.set(Math.random() > 0.5 ? accentPink : accentBlue);
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.3,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // --- Adicionar Gatinhos Minimalistas ---
        const catCount = 10;
        for (let i = 0; i < catCount; i++) {
            const cat = createMinimalCatGeometry();
            
            // Posição aleatória
            cat.position.set(
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100
            );
            // Movimento leve
            cat.userData.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            );
            
            scene.add(cat);
        }

        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }

    function animate() {
        animationId = requestAnimationFrame(animate);

        if (particles && renderer && scene && camera) {
            // Rotação leve das partículas
            particles.rotation.x += 0.0002;
            particles.rotation.y += 0.0003;
            particles.rotation.z += 0.0001;

            // Movimento dos Gatinhos
            scene.children.forEach(child => {
                if (child.userData.velocity) {
                    child.position.add(child.userData.velocity);

                    // Loop (volta para o lado oposto se sair dos limites)
                    if (Math.abs(child.position.x) > 50) child.position.x *= -1;
                    if (Math.abs(child.position.y) > 50) child.position.y *= -1;
                    if (Math.abs(child.position.z) > 50) child.position.z *= -1;
                    
                    // Rotação própria
                    child.rotation.x += 0.01;
                    child.rotation.y += 0.005;
                }
            });

            renderer.render(scene, camera);
        }
    }

    try {
        init();
        animate();
    } catch (e) {
        console.error("Erro ao inicializar Three.js:", e);
    }
}

// --- FUNÇÕES DE RENDERIZAÇÃO DE SEÇÕES (Substituindo Componentes React) ---

function renderHeader(parent) {
    const header = createElementWithClass('header', "fixed top-0 left-0 right-0 z-50 bg-[#0d0d26]/80 backdrop-blur-md p-4 shadow-lg");
    
    header.innerHTML = `
        <nav class="container mx-auto flex justify-between items-center max-w-7xl">
            <a href="#perfil" class="text-3xl font-bold text-[#f472b6] hover:scale-105 transition-transform duration-300">Letícia Mariah <span class="text-white">🐱</span></a>
            <div class="hidden md:flex space-x-6" id="desktop-nav">
                ${navItems.map(item => `
                    <a href="#${item.id}" class="text-lg font-medium hover:text-[#f472b6] transition-colors duration-300">${item.label}</a>
                `).join('')}
                <a href="#contato">
                    <span class="px-5 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-300 font-semibold">Contato</span>
                </a>
            </div>
            <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
        </nav>
        <div id="mobile-menu" class="md:hidden absolute top-full left-0 w-full bg-[#0d0d26] shadow-xl text-center py-4 space-y-4 transition-all duration-300 hidden">
            ${navItems.map(item => `
                <a href="#${item.id}" class="block text-lg font-medium hover:text-[#f472b6] transition-colors duration-300">${item.label}</a>
            `).join('')}
            <a href="#contato">
                <span class="block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-300 font-semibold mx-4">Contato</span>
            </a>
        </div>
    `;
    parent.appendChild(header);

    // Adiciona listeners de scroll
    header.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    document.getElementById('mobile-menu-btn').addEventListener('click', () => toggleMobileMenu());
}

function renderSection(id, className = '') {
    const section = createElementWithClass('section', `section ${className}`);
    section.id = id;
    const contentDiv = createElementWithClass('div', "w-full max-w-7xl mx-auto");
    section.appendChild(contentDiv);
    return { section, contentDiv };
}

function renderPerfilSection(parent) {
    const { section, contentDiv } = renderSection('perfil', 'min-h-screen');
    
    const wrapper = createElementWithClass('div', "w-full flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 p-8 rounded-3xl");
    setScrollRef(wrapper, 'up');

    wrapper.innerHTML = `
        <div class="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400">
            <img src="${perfilData.fotoUrl}" alt="Foto de Perfil" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onerror="this.onerror=null; this.src='https://placehold.co/224x224/f472b6/0d0d26?text=LM'" />
        </div>
        <div class="text-center md:text-left">
            <h1 class="text-5xl md:text-6xl font-bold mb-3 text-white flex items-center justify-center md:justify-start">
                ${perfilData.nome} <span class="ml-3 text-pink-300 text-5xl">🐱</span>
            </h1>
            <p class="text-xl md:text-2xl font-medium text-[#f472b6] mb-4">${perfilData.titulo}</p>
            <p class="text-lg text-gray-400 max-w-lg mb-6 leading-relaxed">
                ${perfilData.bio}
            </p>
            <div class="flex justify-center md:justify-start space-x-6 text-white">
                <a href="${perfilData.linkedin}" target="_blank" class="hover:text-[#f472b6] transition-colors duration-300" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765 0-.975.784-1.765 1.75-1.765s1.75.79 1.75 1.765c0 .975-.784 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4.01-3.118-4.01 0v5.604h-3v-11h3v1.765c1.396-2.586 7.019-2.615 7.019 3.197v6.038z" /></svg>
                </a>
                <a href="${perfilData.github}" target="_blank" class="hover:text-[#f472b6] transition-colors duration-300" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.196-6.086 8.196-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="${perfilData.youtube}" target="_blank" class="hover:text-[#f472b6] transition-colors duration-300" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z" /></svg>
                </a>
            </div>
        </div>
    `;
    contentDiv.appendChild(wrapper);
    parent.appendChild(section);
}

function renderFormacaoSection(parent) {
    const { section, contentDiv } = renderSection('formacao');
    contentDiv.classList.add('max-w-4xl', 'mx-auto');
    
    const title = createElementWithClass('h2', "text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400");
    title.textContent = "Formação Acadêmica";
    setScrollRef(title, 'left');
    contentDiv.appendChild(title);

    const timeline = createElementWithClass('div', "relative border-l-2 border-blue-400 space-y-12 pl-6");

    formacaoData.forEach(item => {
        const itemDiv = createElementWithClass('div', "relative timeline-item");
        setScrollRef(itemDiv, 'up');
        itemDiv.innerHTML = `
            <h4 class="font-semibold text-white text-lg">${item.titulo}</h4>
            <p class="text-gray-400 text-sm">${item.periodo}</p>
            <p class="mt-2 text-gray-300">${item.descricao}</p>
        `;
        timeline.appendChild(itemDiv);
    });

    const cursosDiv = createElementWithClass('div', "relative timeline-item");
    setScrollRef(cursosDiv, 'up');
    cursosDiv.innerHTML = `
        <h4 class="font-semibold text-white text-lg">Cursos Técnicos e Complementares</h4>
        <ul class="list-disc list-inside mt-4 text-gray-300 grid grid-cols-2 sm:grid-cols-3 gap-2 ml-4">
            ${cursosComplementares.map(curso => `<li class="text-sm">${curso}</li>`).join('')}
        </ul>
    `;
    timeline.appendChild(cursosDiv);

    contentDiv.appendChild(timeline);
    parent.appendChild(section);
}

function renderExperienciaSection(parent) {
    const { section, contentDiv } = renderSection('experiencia');

    const title = createElementWithClass('h2', "text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400");
    title.textContent = "Experiências Profissionais Diversas";
    setScrollRef(title, 'down');
    contentDiv.appendChild(title);

    const grid = createElementWithClass('div', "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full");
    
    experienciaData.forEach(exp => {
        const itemDiv = createElementWithClass('div', `p-8 rounded-2xl bg-white/5 border border-transparent hover:border-blue-400/50 transition-all duration-300`);
        setScrollRef(itemDiv, exp.anim);
        itemDiv.innerHTML = `
            <h3 class="text-2xl font-bold text-white mb-3 text-[#f472b6]">${exp.titulo}</h3>
            <p class="text-gray-400 mb-6 leading-relaxed">${exp.descricao}</p>
        `;
        grid.appendChild(itemDiv);
    });
    contentDiv.appendChild(grid);

    const observation = createElementWithClass('p', "text-sm italic text-gray-500 max-w-2xl text-center mt-8 mx-auto");
    observation.innerHTML = '💡 Observação: Todas essas experiências ajudaram a desenvolver organização, disciplina, comunicação, criatividade, resolução de problemas e capacidade de adaptação, competências essenciais também para Engenharia de Software.';
    setScrollRef(observation, 'up');
    contentDiv.appendChild(observation);

    parent.appendChild(section);
}

function renderHabilidadesSection(parent) {
    const { section, contentDiv } = renderSection('habilidades');

    const title = createElementWithClass('h2', "text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400");
    title.textContent = "Habilidades";
    setScrollRef(title, 'left');
    contentDiv.appendChild(title);

    const grid = createElementWithClass('div', "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto");

    habilidadesData.forEach(hab => {
        const itemDiv = createElementWithClass('div', `p-6 rounded-2xl bg-white/5 border border-transparent hover:border-blue-400/50 transition-all duration-300`);
        setScrollRef(itemDiv, hab.anim);
        itemDiv.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="text-4xl text-[#f472b6] mr-4">${hab.emoji}</div>
                <h3 class="text-xl font-semibold text-white">${hab.titulo}</h3>
            </div>
            <p class="text-gray-400 text-sm mb-4">${hab.descricao}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${hab.progresso}%;"></div>
            </div>
        `;
        grid.appendChild(itemDiv);
    });
    contentDiv.appendChild(grid);
    parent.appendChild(section);
}

function renderProjetosSection(parent) {
    const { section, contentDiv } = renderSection('projetos', 'pb-32'); // Mantendo pb-32 para o espaço final

    const title = createElementWithClass('h2', "text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400");
    title.textContent = "Projetos e Estudos Pessoais";
    setScrollRef(title, 'up');
    contentDiv.appendChild(title);

    // ALTERAÇÃO CRÍTICA: Aumentando o gap vertical entre todos os blocos de projeto
    // de 'gap-12' para 'gap-28' (o equivalente a 7rem ou 112px) para separar
    // drasticamente a última caixa de projeto da caixa de "Projetos e Vivências".
    const wrapper = createElementWithClass('div', "flex flex-col gap-28 w-full max-w-7xl mx-auto");

    projetosData.forEach(proj => {
        const itemDiv = createElementWithClass('div', `p-8 rounded-2xl bg-white/5 border border-transparent hover:border-blue-400/50 transition-all duration-300`);
        setScrollRef(itemDiv, proj.anim);
        itemDiv.innerHTML = `
            <div class="flex items-center justify-center mb-6">
                ${proj.icon}
            </div>
            <h3 class="text-2xl font-bold text-white mb-3 text-center text-[#f472b6]">${proj.titulo}</h3>
            <p class="text-gray-400 mb-6 leading-relaxed text-center">${proj.descricao}</p>
            <div class="flex flex-wrap justify-center gap-2 mb-4">
                ${proj.tags.map(tag => `<span class="bg-blue-400/30 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full">${tag}</span>`).join('')}
            </div>
        `;
        wrapper.appendChild(itemDiv);
    });

    // Vivências (Imagens)
    // REMOVENDO MARGEM SUPERIOR: A margem mt-24 anterior foi removida (linha 658)
    // porque o novo 'gap-28' no wrapper já fornece o espaçamento necessário a partir de cima.
    const vivenciasDiv = createElementWithClass('div', "p-8 rounded-2xl bg-white/5 border border-transparent hover:border-blue-400/50 transition-all duration-300");
    setScrollRef(vivenciasDiv, 'left');
    vivenciasDiv.innerHTML = `
        <h3 class="text-2xl font-bold text-white mb-6 text-center text-[#f472b6]">Projetos e Vivências</h3>
        <!-- O grid foi mantido para que as imagens fiquem maiores, mais espaçadas e centralizadas. -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            ${vivenciasImagens.map((url, index) => `
                <div class="overflow-hidden rounded-lg shadow-2xl aspect-[4/3] w-full max-w-xs sm:max-w-none">
                    <img src="${url}" alt="Imagem de Projeto ${index + 1}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onerror="this.onerror=null; this.src='https://placehold.co/300x225/4c1d95/f0f0ff?text=Vivência+${index + 1}'"
                    />
                </div>
            `).join('')}
        </div>
    `;
    wrapper.appendChild(vivenciasDiv);

    contentDiv.appendChild(wrapper);
    parent.appendChild(section);
}

function renderInteressesSection(parent) {
    const { section, contentDiv } = renderSection('interesses');

    // MANTENDO O ESPAÇAMENTO DO CARD DE INTERESSES: O wrapper aqui define a margem.
    // max-w-4xl já restringe a largura.
    const wrapper = createElementWithClass('div', "w-full rounded-3xl p-8 max-w-4xl mx-auto bg-white/5 border border-transparent hover:border-blue-400/50 transition-all duration-300");
    setScrollRef(wrapper, 'down');

    wrapper.innerHTML = `
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">Interesses e Objetivos</h2>
        <div class="text-lg text-gray-300 space-y-6">
            <p class="leading-relaxed">
                Desde pequena, sempre fui fascinada por tecnologia, jogos e criação de conteúdos, explorando formas de aprender, inovar e transformar ideias em realidade. Essa curiosidade se transformou em paixão por Engenharia de Software, onde posso unir criatividade e raciocínio lógico para desenvolver soluções que realmente façam a diferença.
            </p>
            <p class="leading-relaxed">
                Meus interesses vão além do código: adoro explorar novas linguagens, ferramentas e metodologias, sempre buscando aprimorar minhas habilidades e expandir meu conhecimento. Sou motivada por desafios que me fazem pensar fora da caixa, encontrar soluções práticas e inovadoras, e transformar problemas complexos em experiências simples e funcionais para o usuário.
            </p>
            <p class="leading-relaxed">
                Meu objetivo é crescer profissionalmente em um ambiente que valorize inovação, aprendizado contínuo e impacto positivo, contribuindo para projetos que unam tecnologia e criatividade. Quero criar soluções que não apenas resolvam problemas, mas que inspirem, conectem pessoas e transformem experiências, mostrando que a Engenharia de Software pode ser tanto uma arte quanto uma ciência.
            </p>
        </div>
    `;
    contentDiv.appendChild(wrapper);
    parent.appendChild(section);
}

function renderContatoSection(parent) {
    const { section, contentDiv } = renderSection('contato');

    const title = createElementWithClass('h2', "text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400");
    title.textContent = "Contato";
    setScrollRef(title, 'right');
    contentDiv.appendChild(title);
    
    const formContainer = createElementWithClass('div', "p-8 rounded-3xl w-full max-w-xl mx-auto bg-white/5 border border-transparent hover:border-blue-400/50 transition-all duration-300");
    setScrollRef(formContainer, 'up');

    formContainer.innerHTML = `
        <p class="text-lg mb-6 leading-relaxed">Fico à disposição para contato e novas oportunidades. Envie uma mensagem ou me chame no WhatsApp!</p>
        <form id="contact-form" class="space-y-4">
            <input type="text" placeholder="Seu Nome" class="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" placeholder="Seu E-mail" class="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea placeholder="Sua Mensagem" rows="4" class="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            <button type="submit" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-colors">Enviar Mensagem (Simulação)</button>
        </form>
        <div class="flex justify-center space-x-8 mt-6">
            <a href="${perfilData.linkedin}" target="_blank" class="text-[#f472b6] hover:text-[#f472b6]/80 transition-colors duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765 0-.975.784-1.765 1.75-1.765s1.75.79 1.75 1.765c0 .975-.784 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4.01-3.118-4.01 0v5.604h-3v-11h3v1.765c1.396-2.586 7.019-2.615 7.019 3.197v6.038z" /></svg>
            </a>
            <a href="${perfilData.github}" target="_blank" class="text-[#f472b6] hover:text-[#f472b6]/80 transition-colors duration-300" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.196-6.086 8.196-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <button id="whatsapp-btn" class="text-[#f472b6] hover:text-[#f472b6]/80 transition-colors duration-300" aria-label="WhatsApp">
                <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.0003 2C6.48031 2 2.00031 6.48 2.00031 12C2.00031 14.19 2.68031 16.21 3.82031 17.81L2.08031 22.0003L6.37031 20.2403C7.94031 21.2803 9.90031 21.9003 12.0003 21.9003C17.5203 21.9003 22.0003 17.4203 22.0003 11.9003C22.0003 6.38031 17.5203 2 12.0003 2ZM17.3803 16.3703C17.0703 16.9203 16.3003 17.0603 15.7403 16.7503C15.7403 16.7503 15.6803 16.7203 15.6503 16.7103C15.3503 16.5903 14.7303 16.2903 14.4303 16.1803C13.5603 15.8603 12.8303 15.4803 12.2303 14.8803C11.5203 14.1703 11.0503 13.3803 10.7403 12.5103C10.6303 12.2103 10.3303 11.5903 10.2103 11.2903C9.91031 10.4203 9.69031 9.87031 9.53031 9.52031C9.37031 9.17031 9.14031 8.87031 9.47031 8.54031C9.55031 8.46031 9.68031 8.35031 9.77031 8.26031C9.86031 8.17031 9.93031 8.08031 10.0203 8.00031C10.1103 7.91031 10.2803 7.85031 10.4203 7.85031C10.4703 7.85031 10.5103 7.85031 10.5603 7.85031C10.7403 7.86031 10.8703 7.87031 10.9703 7.92031C11.1303 8.01031 11.2103 8.16031 11.2903 8.32031C11.3703 8.48031 11.4103 8.64031 11.4503 8.82031C11.5003 8.98031 11.5403 9.16031 11.5403 9.34031C11.5403 9.52031 11.4903 9.69031 11.4503 9.87031C11.3903 10.0503 11.3503 10.2103 11.2703 10.3703C11.1603 10.6003 11.0103 10.8303 10.8203 11.0203C11.0603 11.2403 11.3703 11.5703 11.7503 11.9503C12.4303 12.6303 13.0603 13.2303 13.6203 13.7803C14.1603 14.3203 14.6503 14.8503 15.1103 15.3403C15.4203 15.6503 15.7103 15.9103 16.0203 16.1403C16.2703 16.3203 16.5103 16.4803 16.7103 16.5703C16.8103 16.6303 16.8903 16.6403 17.0603 16.6803C17.2403 16.7203 17.3603 16.6903 17.3803 16.3703Z" /></svg>
            </button>
        </div>
    `;

    contentDiv.appendChild(formContainer);
    parent.appendChild(section);

    // Adiciona a lógica de submit (simulação)
    formContainer.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Formulário de contato enviado (simulação).");
        const button = e.target.querySelector('button[type="submit"]');
        button.textContent = 'Mensagem Enviada!';
        button.classList.add('bg-green-600');
        button.classList.remove('bg-blue-600', 'hover:bg-blue-500');
        e.target.reset();
        setTimeout(() => {
            button.textContent = 'Enviar Mensagem (Simulação)';
            button.classList.remove('bg-green-600');
            button.classList.add('bg-blue-600', 'hover:bg-blue-500');
        }, 3000);
    });

    // Adiciona a lógica do botão WhatsApp
    formContainer.querySelector('#whatsapp-btn').addEventListener('click', () => {
        window.open(perfilData.whatsapp, '_blank');
    });
}

function renderFooter(parent) {
    const footer = createElementWithClass('footer', "text-center py-8 border-t border-blue-500/30 mt-20 relative z-10");
    footer.innerHTML = `<p class="text-gray-400 text-sm">Desenvolvido com JavaScript, Tailwind CSS e Three.js. © 2025 Letícia Mariah.</p>`;
    parent.appendChild(footer);
}

/**
 * Renderiza e adiciona o botão "Voltar ao Topo" (Back to Top).
 * @param {HTMLElement} parent
 */
function renderBackToTopButton(parent) {
    const button = createElementWithClass('button', 'fixed bottom-6 right-6 p-4 bg-[#f472b6] text-white rounded-full shadow-lg transition-opacity duration-300 z-50 opacity-0 pointer-events-none hover:bg-[#c0478a]');
    button.id = 'back-to-top-btn';
    button.setAttribute('aria-label', 'Voltar ao topo');
    button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    `;
    parent.appendChild(button);

    // Lógica para mostrar/esconder o botão
    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            button.classList.remove('opacity-0', 'pointer-events-none');
            button.classList.add('opacity-100');
        } else {
            button.classList.remove('opacity-100');
            button.classList.add('opacity-0', 'pointer-events-none');
        }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Lógica de clique para rolar para o topo
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


/**
 * Função principal de inicialização da aplicação.
 */
function initializeApp() {
    const rootContainer = document.getElementById('root');
    if (!rootContainer) {
        console.error("Elemento #root não encontrado. Certifique-se de que ele existe no HTML.");
        return;
    }
    
    // 1. Injeta os estilos customizados (Keyframes e Classes base)
    const styleTag = document.createElement('style');
    styleTag.textContent = customStyles;
    document.head.appendChild(styleTag);

    // 2. Renderiza o cabeçalho (precisa ir no BODY, fora do #root, pois é fixo)
    renderHeader(document.body);

    // 3. Renderiza o conteúdo principal dentro do #root
    // Ajustado pt-16 para pt-20 para melhor espaçamento sob o header
    const mainContent = createElementWithClass('main', 'w-full max-w-7xl mx-auto px-4 relative z-10 pt-20');
    rootContainer.appendChild(mainContent);

    renderPerfilSection(mainContent);
    renderFormacaoSection(mainContent);
    renderExperienciaSection(mainContent);
    renderHabilidadesSection(mainContent);
    renderProjetosSection(mainContent);
    renderInteressesSection(mainContent);
    renderContatoSection(mainContent);
    
    // 4. Renderiza o rodapé (no #root)
    renderFooter(rootContainer);
    
    // 5. Adiciona o botão "Voltar ao Topo"
    renderBackToTopButton(document.body);

    // 6. Inicializa o fundo 3D e as animações de scroll
    initThreeBackground();
    initScrollAnimations();
}

// Inicia a aplicação quando o DOM estiver completamente carregado.
document.addEventListener('DOMContentLoaded', initializeApp);

// Exporta (se necessário para o ambiente module) - não estritamente necessário se chamado via DOMContentLoaded
// export { initializeApp };
