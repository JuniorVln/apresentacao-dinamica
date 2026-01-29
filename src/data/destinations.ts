export type Content = {
    name: string;
    subtitle: string;
    overview: string;
    whyVisit: string[];
    metrics: {
        label: string;
        value: string;
    }[];
};

export interface Destination {
    id: string;
    en: Content;
    pt: Content;
    coordinates: {
        lat: number;
        lng: number;
    };
    image: string;
}

export const destinations: Destination[] = [
    {
        id: "paris",
        coordinates: { lat: 48.8566, lng: 2.3522 },
        image: "https://images.unsplash.com/photo-1499856871940-0627460af528?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Paris, France",
            subtitle: "Art, cafés, fashion, and the world’s most iconic cityscape.",
            overview: "Paris is a dense “walk-and-wander” city built around museums, monuments, food culture, and postcard streets. People come for the Louvre-level cultural gravity, romantic atmosphere, and day-trip access to the wider Paris region.",
            whyVisit: [
                "Landmark culture (Eiffel Tower, Louvre, Notre-Dame area)",
                "Food + shopping (bakeries, bistros, luxury districts)",
                "Riverfront neighborhoods and day trips across the Paris region",
            ],
            metrics: [
                { label: "Type", value: "Global city" },
                { label: "Annual visitors", value: "17.4M (2024)" },
                { label: "Best months", value: "Apr–Jun, Sep–Oct" },
                { label: "UNESCO", value: "Yes" },
            ],
        },
        pt: {
            name: "Paris, França",
            subtitle: "Arte, cafés, moda e a paisagem urbana mais icônica do mundo.",
            overview: "Paris é uma cidade densa feita para “ver e andar”, construída em torno de museus, monumentos, cultura gastronômica e ruas de cartão-postal. As pessoas vêm pelo nível cultural do Louvre, atmosfera romântica e passeios de um dia pela região.",
            whyVisit: [
                "Cultura de marcos (Torre Eiffel, Louvre, área de Notre-Dame)",
                "Comida + compras (padarias, bistrôs, distritos de luxo)",
                "Bairros à beira-rio e passeios pela região de Paris",
            ],
            metrics: [
                { label: "Tipo", value: "Cidade global" },
                { label: "Visitantes anuais", value: "17.4M (2024)" },
                { label: "Melhores meses", value: "Abr–Jun, Set–Out" },
                { label: "UNESCO", value: "Sim" },
            ],
        },
    },
    {
        id: "london",
        coordinates: { lat: 51.5074, lng: -0.1278 },
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "London, UK",
            subtitle: "Royal history + modern energy in one of the world’s best museum-and-theatre cities.",
            overview: "London is a “stacked” destination: royal and imperial history, free major museums, world-class theatre, and neighborhoods that feel like separate towns. People visit for culture density and easy transit-based exploration.",
            whyVisit: [
                "Museums, theatre (West End), and historic landmarks",
                "Neighborhood variety (markets, pubs, parks)",
                "Day trips by train (Oxford, Bath, coastal towns)",
            ],
            metrics: [
                { label: "Type", value: "Global city" },
                { label: "Annual visitors", value: "21.7M (2024)" },
                { label: "Best months", value: "May–Sep" },
                { label: "UNESCO", value: "Yes (Tower of London)" },
            ],
        },
        pt: {
            name: "Londres, Reino Unido",
            subtitle: "História real + energia moderna em uma das melhores cidades de museus e teatro do mundo.",
            overview: "Londres é um destino “empilhado”: história real e imperial, grandes museus gratuitos, teatro de classe mundial e bairros que parecem cidades separadas. As pessoas visitam pela densidade cultural e fácil exploração via transporte público.",
            whyVisit: [
                "Museus, teatro (West End) e marcos históricos",
                "Variedade de bairros (mercados, pubs, parques)",
                "Viagens de trem (Oxford, Bath, cidades costeiras)",
            ],
            metrics: [
                { label: "Tipo", value: "Cidade global" },
                { label: "Visitantes anuais", value: "21.7M (2024)" },
                { label: "Melhores meses", value: "Mai–Set" },
                { label: "UNESCO", value: "Sim (Torre de Londres)" },
            ],
        },
    },
    {
        id: "bangkok",
        coordinates: { lat: 13.7563, lng: 100.5018 },
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Bangkok, Thailand",
            subtitle: "Temples, street food, nightlife, and unmatched travel value.",
            overview: "Bangkok is a high-intensity city: ornate temples next to markets, skytrain lines into mega-malls, and some of the most famous street food on Earth. People come for value, flavor, and as a launchpad to beaches and islands.",
            whyVisit: [
                "Food culture (markets, street stalls, modern Thai dining)",
                "Temples + river life (Grand Palace area, Chao Phraya)",
                "Shopping and nightlife across multiple districts",
            ],
            metrics: [
                { label: "Type", value: "Global city" },
                { label: "Annual visitors", value: "32.4M (2024)" },
                { label: "Best months", value: "Nov–Feb" },
                { label: "UNESCO", value: "No (city core)" },
            ],
        },
        pt: {
            name: "Bangkok, Tailândia",
            subtitle: "Templos, comida de rua, vida noturna e custo-benefício inigualável.",
            overview: "Bangkok é uma cidade de alta intensidade: templos ornamentados ao lado de mercados, linhas de metrô conectadas a mega-shoppings e algumas das comidas de rua mais famosas do planeta. As pessoas vêm pelo valor, sabor e como ponto de partida para praias e ilhas.",
            whyVisit: [
                "Cultura gastronômica (mercados, barracas de rua, jantar moderno)",
                "Templos + vida no rio (área do Grande Palácio, Chao Phraya)",
                "Compras e vida noturna em vários distritos",
            ],
            metrics: [
                { label: "Tipo", value: "Cidade global" },
                { label: "Visitantes anuais", value: "32.4M (2024)" },
                { label: "Melhores meses", value: "Nov–Fev" },
                { label: "UNESCO", value: "Não (núcleo da cidade)" },
            ],
        }
    },
    {
        id: "dubai",
        coordinates: { lat: 25.2048, lng: 55.2708 },
        image: "https://images.unsplash.com/photo-1512453979798-5ea936a7d40b?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Dubai, UAE",
            subtitle: "Future-city architecture, desert experiences, and luxury hospitality at scale.",
            overview: "Dubai is engineered for visitors: iconic skyscrapers, world-class hotels, shopping, and curated experiences from desert safaris to beach clubs. People visit for “biggest and newest” attractions and warm-weather escapes.",
            whyVisit: [
                "Modern landmarks (Burj Khalifa, skyline viewpoints)",
                "Shopping + dining (global brands and high-end restaurants)",
                "Desert + coast contrast (safaris, beaches, waterparks)",
            ],
            metrics: [
                { label: "Type", value: "Global city" },
                { label: "Annual visitors", value: "18.2M (2024)" },
                { label: "Best months", value: "Nov–Mar" },
                { label: "UNESCO", value: "No (city core)" },
            ],
        },
        pt: {
            name: "Dubai, EAU",
            subtitle: "Arquitetura futurista, experiências no deserto e hospitalidade de luxo em escala.",
            overview: "Dubai é projetada para visitantes: arranha-céus icônicos, hotéis de classe mundial, compras e experiências selecionadas, de safáris no deserto a clubes de praia. As pessoas visitam peas atrações “maiores e mais novas” e escapadas para o clima quente.",
            whyVisit: [
                "Marcos modernos (Burj Khalifa, mirantes no horizonte)",
                "Compras + gastronomia (marcas globais e restaurantes sofisticados)",
                "Contraste deserto + costa (safáris, praias, parques aquáticos)",
            ],
            metrics: [
                { label: "Tipo", value: "Cidade global" },
                { label: "Visitantes anuais", value: "18.2M (2024)" },
                { label: "Melhores meses", value: "Nov–Mar" },
                { label: "UNESCO", value: "Não (núcleo da cidade)" },
            ],
        }
    },
    {
        id: "istanbul",
        coordinates: { lat: 41.0082, lng: 28.9784 },
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Istanbul, Türkiye",
            subtitle: "The crossroads city—empires, bazaars, and skyline mosques.",
            overview: "Istanbul is built on layers of history where Europe and Asia meet. People visit for Byzantine/Ottoman architecture, markets, food, and the feeling of a living historic capital rather than a “museum city.”",
            whyVisit: [
                "Historic monuments (mosques, cisterns, palaces)",
                "Bazaars + street life (shopping culture and crafts)",
                "Bosporus views and ferry-hopping neighborhoods",
            ],
            metrics: [
                { label: "Type", value: "Global city (transcontinental)" },
                { label: "Annual visitors", value: "23.0M (2024)" },
                { label: "Best months", value: "Apr–Jun, Sep–Oct" },
                { label: "UNESCO", value: "Yes" },
            ],
        },
        pt: {
            name: "Istambul, Turquia",
            subtitle: "A cidade da encruzilhada — impérios, bazares e mesquitas no horizonte.",
            overview: "Istambul é construída sobre camadas de história onde a Europa e a Ásia se encontram. As pessoas visitam pela arquitetura bizantina/otomana, mercados, comida e a sensação de uma capital histórica viva, em vez de uma “cidade museu”.",
            whyVisit: [
                "Monumentos históricos (mesquitas, cisternas, palácios)",
                "Bazares + vida nas ruas (cultura de compras e artesanato)",
                "Vistas do Bósforo e bairros acessíveis por balsa",
            ],
            metrics: [
                { label: "Tipo", value: "Cidade global (transcontinental)" },
                { label: "Visitantes anuais", value: "23.0M (2024)" },
                { label: "Melhores meses", value: "Abr–Jun, Set–Out" },
                { label: "UNESCO", value: "Sim" },
            ],
        }
    },
    {
        id: "nyc",
        coordinates: { lat: 40.7128, lng: -74.006 },
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "New York City, USA",
            subtitle: "The “everything city”: skyline, shows, food, and nonstop neighborhoods.",
            overview: "NYC is a culture engine—Broadway, museums, sports, food from everywhere, and neighborhoods with their own identities. People visit for iconic sights plus the sheer volume of things to do any day of the year.",
            whyVisit: [
                "Iconic attractions (Broadway, museums, skyline viewpoints)",
                "Neighborhood exploration (food + culture by block)",
                "Events and seasonal moments (holidays, summer in parks)",
            ],
            metrics: [
                { label: "Type", value: "Global city" },
                { label: "Annual visitors", value: "62.2M (2023)" },
                { label: "Best months", value: "Apr–Jun, Sep–Nov" },
                { label: "UNESCO", value: "No (citywide)" },
            ],
        },
        pt: {
            name: "Nova Iorque, EUA",
            subtitle: "A cidade “de tudo”: horizonte, shows, comida e bairros inesgotáveis.",
            overview: "Nova Iorque é um motor cultural — Broadway, museus, esportes, comida de todos os lugares e bairros com identidades próprias. As pessoas visitam pelos pontos turísticos icônicos, além da enorme quantidade de coisas para fazer em qualquer dia do ano.",
            whyVisit: [
                "Atrações icônicas (Broadway, museus, mirantes)",
                "Exploração de bairros (comida + cultura por quarteirão)",
                "Eventos e momentos sazonais (feriados, verão nos parques)",
            ],
            metrics: [
                { label: "Tipo", value: "Cidade global" },
                { label: "Visitantes anuais", value: "62.2M (2023)" },
                { label: "Melhores meses", value: "Abr–Jun, Set–Nov" },
                { label: "UNESCO", value: "Não (toda a cidade)" },
            ],
        }
    },
    {
        id: "tokyo",
        coordinates: { lat: 35.6762, lng: 139.6503 },
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Tokyo, Japan",
            subtitle: "Hyper-modern meets centuries-old—food, design, and seasonal beauty.",
            overview: "Tokyo is precision and sensory overload in the best way: world-leading transit, obsessive food culture, and distinct districts. People visit for the mix of tradition (temples, gardens) and future-city energy.",
            whyVisit: [
                "Food capital vibes (from ramen counters to tasting menus)",
                "Design + pop culture (shopping districts, tech, anime/games)",
                "Seasonal travel (cherry blossoms, autumn colors)",
            ],
            metrics: [
                { label: "Type", value: "Global city" },
                { label: "Annual visitors", value: "~25M (2024)" },
                { label: "Best months", value: "Mar–Apr, Oct–Nov" },
                { label: "UNESCO", value: "No (citywide)" },
            ],
        },
        pt: {
            name: "Tóquio, Japão",
            subtitle: "O hipermoderno encontra o secular — comida, design e beleza sazonal.",
            overview: "Tóquio é precisão e sobrecarga sensorial da melhor maneira: transporte líder mundial, cultura gastronômica obsessiva e distritos distintos. As pessoas visitam pela mistura de tradição (templos, jardins) e energia de cidade do futuro.",
            whyVisit: [
                "Vibes de capital gastronômica (de balcões de lámen a menus degustação)",
                "Design + cultura pop (distritos de compras, tecnologia, anime/jogos)",
                "Viagens sazonais (flores de cerejeira, cores de outono)",
            ],
            metrics: [
                { label: "Tipo", value: "Cidade global" },
                { label: "Visitantes anuais", value: "~25M (2024)" },
                { label: "Melhores meses", value: "Mar–Abr, Out–Nov" },
                { label: "UNESCO", value: "Não (toda a cidade)" },
            ],
        }
    },
    {
        id: "machu-picchu",
        coordinates: { lat: -13.1631, lng: -72.545 },
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Machu Picchu, Peru",
            subtitle: "High-Andes wonder: Inca engineering in cloud-forest drama.",
            overview: "Machu Picchu is a bucket-list archaeological site perched above the Urubamba Valley. People visit for the scale, setting, and the sense of discovery—plus the journey (trains or multi-day treks).",
            whyVisit: [
                "One of the world’s most iconic ancient sites",
                "Trekking + scenery (Inca Trail routes and viewpoints)",
                "Cultural connection to Inca history and Andean landscapes",
            ],
            metrics: [
                { label: "Type", value: "Archaeological site" },
                { label: "Annual visitors", value: "~1.5M" },
                { label: "Elevation", value: "2,430 m" },
                { label: "UNESCO", value: "Yes" },
            ],
        },
        pt: {
            name: "Machu Picchu, Peru",
            subtitle: "Maravilha dos Andes: engenharia inca no drama da floresta nublada.",
            overview: "Machu Picchu é um sítio arqueológico imperdível empoleirado acima do Vale do Urubamba. As pessoas visitam pela escala, cenário e a sensação de descoberta — além da jornada (trens ou trilhas de vários dias).",
            whyVisit: [
                "Um dos sítios antigos mais icônicos do mundo",
                "Trekking + paisagem (rotas da Trilha Inca e mirantes)",
                "Conexão cultural com a história inca e paisagens andinas",
            ],
            metrics: [
                { label: "Tipo", value: "Sítio arqueológico" },
                { label: "Visitantes anuais", value: "~1.5M" },
                { label: "Altitude", value: "2.430 m" },
                { label: "UNESCO", value: "Sim" },
            ],
        }
    },
    {
        id: "gbr",
        coordinates: { lat: -18.2871, lng: 147.6992 },
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Great Barrier Reef, Australia",
            subtitle: "The planet’s most famous reef system—snorkel, dive, and island-hop.",
            overview: "The Great Barrier Reef is the world’s largest coral reef system, famous for biodiversity and clear-water experiences. People visit for snorkeling/diving, island stays, and wildlife encounters (when conditions cooperate).",
            whyVisit: [
                "Snorkeling/diving on a globally unique reef",
                "Marine wildlife (fish, turtles, rays; seasonal visibility)",
                "Tropical islands + coastal gateways",
            ],
            metrics: [
                { label: "Type", value: "Natural wonder" },
                { label: "Annual visitors", value: "~2.13M days" },
                { label: "Best months", value: "Jun–Oct" },
                { label: "UNESCO", value: "Yes" },
            ],
        },
        pt: {
            name: "Grande Barreira de Corais, Austrália",
            subtitle: "O sistema de recifes mais famoso do planeta — snorkel, mergulho e ilhas.",
            overview: "A Grande Barreira de Corais é o maior sistema de recifes de coral do mundo, famoso pela biodiversidade e experiências em águas cristalinas. As pessoas visitam para fazer snorkel/mergulho, estadias em ilhas e encontros com a vida selvagem.",
            whyVisit: [
                "Snorkel/mergulho em um recife globalmente único",
                "Vida marinha (peixes, tartarugas, raias; visibilidade sazonal)",
                "Ilhas tropicais + portais costeiros",
            ],
            metrics: [
                { label: "Tipo", value: "Maravilha natural" },
                { label: "Visitantes anuais", value: "~2.13M dias" },
                { label: "Melhores meses", value: "Jun–Out" },
                { label: "UNESCO", value: "Sim" },
            ],
        }
    },
    {
        id: "grand-canyon",
        coordinates: { lat: 36.0544, lng: -112.1401 },
        image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
        en: {
            name: "Grand Canyon, USA",
            subtitle: "A geology masterpiece: depth, light, and scale you can’t “photo.”",
            overview: "The Grand Canyon is a sheer-scale landscape experience—rim viewpoints, hikes, and river corridors that make Earth’s history visible. People visit for views, trails, rafting, and sunrise/sunset light.",
            whyVisit: [
                "Rim vistas + sunrise/sunset viewpoints",
                "Hiking (from easy rim walks to serious descents)",
                "Colorado River experiences and ranger programming",
            ],
            metrics: [
                { label: "Type", value: "National park" },
                { label: "Annual visitors", value: "4.9M (2024)" },
                { label: "Elevation", value: "South Rim ~2,100 m" },
                { label: "UNESCO", value: "Yes" },
            ],
        },
        pt: {
            name: "Grand Canyon, EUA",
            subtitle: "Uma obra-prima da geologia: profundidade, luz e escala que não cabem na foto.",
            overview: "O Grand Canyon é uma experiência de paisagem de escala absoluta — mirantes na borda, caminhadas e corredores fluviais que tornam a história da Terra visível. As pessoas visitam pelas vistas, trilhas, rafting e luz do nascer/pôr do sol.",
            whyVisit: [
                "Vistas da borda + mirantes de nascer/pôr do sol",
                "Caminhadas (de passeios fáceis a descidas sérias)",
                "Experiências no Rio Colorado e programação com guardas florestais",
            ],
            metrics: [
                { label: "Tipo", value: "Parque nacional" },
                { label: "Visitantes anuais", value: "4.9M (2024)" },
                { label: "Altitude", value: "Borda Sul ~2.100 m" },
                { label: "UNESCO", value: "Sim" },
            ],
        }
    },
];
