// Banco de dados centralizado com as informações das páginas
const dadosPaginas = {
    acidificacao: {
        titulo: "Acidificação dos Oceanos",
        imagem: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
        texto: "A queima massiva de combustíveis fósseis libera bilhões de toneladas de CO₂. Cerca de 30% desse gás é absorvido diretamente pelos oceanos. Isso causa uma reação química que diminui o pH da água, tornando-a ácida. O maior impacto visual e biológico ocorre em animais com conchas e esqueletos de calcário (como corais, caranguejos e plânctons), que começam a sofrer processos de corrosão e enfraquecimento de suas estruturas físicas.",
        solucao: "Redução drástica do uso de carvão e petróleo, combinada com a criação de santuários marinhos protegidos contra a pesca comercial pesada para aumentar a resiliência biológica."
    },
    permafrost: {
        titulo: "Derretimento do Permafrost",
        imagem: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80",
        texto: "O permafrost é uma camada de solo congelado que cobre grande parte das regiões polares e guarda bilhões de toneladas de matéria orgânica antiga. Com o aumento rápido da temperatura global, esse solo está derretendo pela primeira vez em milhares de anos. Quando ele derrete, micróbios começam a decompor essa matéria orgânica, liberando quantidades colossais de metano e dióxido de carbono diretamente na atmosfera, gerando um efeito estufa em cadeia impossível de parar manualmente.",
        solucao: "Reflorestamento de áreas subárticas com vegetações nativas de grande porte para criar sombras protetoras no solo e reduzir o ritmo do aquecimento subterrâneo."
    },
    migracao: {
        titulo: "Quebra de Sincronia Migratória",
        imagem: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
        texto: "Há milhares de anos, as aves iniciam suas jornadas migratórias guiadas perfeitamente pela temperatura e estações. No entanto, o aquecimento global desregulou a engrenagem da natureza. Árvores estão dando folhas e insetos estão eclodindo semanas antes do normal devido a invernos mais curtos. Quando os pássaros chegam aos seus destinos históricos de reprodução, a comida principal já acabou, gerando desnutrição generalizada nos filhotes.",
        solucao: "Monitoramento por inteligência artificial dos novos padrões de voo e proteção rígida das áreas de descanso remanescentes usadas pelas espécies migratórias."
    },
    corredores: {
        titulo: "Corredores Ecológicos",
        imagem: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
        texto: "A expansão das cidades e das grandes lavouras isolou as florestas em pequenos pedaços fragmentados. Com o aquecimento global, áreas de planície ficam quentes demais para muitos mamíferos e anfíbios. Os Corredores Ecológicos são faixas planejadas de reflorestamento contínuo que reconectam essas ilhas de mata verde isoladas, servindo como rotas seguras para os animais migrarem em direção a altitudes elevadas ou climas mais amenos.",
        solucao: "Leis governamentais de zoneamento rural que obriguem proprietários de terras a manter matas ciliares conectadas entre si."
    }
};

// Função para exibir os detalhes do problema clicado
function verDetalhes(idProblema) {
    const informacao = dadosPaginas[idProblema];

    if (informacao) {
        document.getElementById('detalheTitulo').innerText = informacao.titulo;
        document.getElementById('detalheImagem').src = informacao.imagem;
        document.getElementById('detalheTexto').innerText = informacao.texto;
        document.getElementById('detalheSolucaoTxt').innerText = informacao.solucao;

        document.getElementById('telaHome').classList.remove('ativa');
        document.getElementById('telaDetalhes').classList.add('ativa');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para voltar à tela principal
function irParaHome() {
    document.getElementById('telaDetalhes').classList.remove('ativa');
    document.getElementById('telaHome').classList.add('ativa');
}

// Alternador de tema Claro / Escuro
function alternarModo() {
    const raiz = document.documentElement;
    if (raiz.getAttribute('data-theme') === 'dark') {
        raiz.removeAttribute('data-theme');
    } else {
        raiz.setAttribute('data-theme', 'dark');
    }
}