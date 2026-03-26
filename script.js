/* ============================================
   MUSICDLE - Lógica do Jogo em JavaScript
   ============================================ */

// ============================================
// BASE DE DADOS DE MÚSICAS (ESTRUTURA EXPANDIDA)
// ============================================
const musicasDisponiveis = [
    { id: 1, nome: "Santuário Malevolente", artista: "M4rkim", ano: 2024, personagem: "Sukuna", obra: "Jujutsu Kaisen", duracao: 5.37 },
    { id: 2, nome: "Coração Sujo", artista: "M4rkim", ano: 2024, personagem: "Vários", obra: "Especial", duracao: 7.70 },
    { id: 3, nome: "Caminho da Espada", artista: "M4rkim", ano: 2022, personagem: "Musashi Miyamoto", obra: "Vagabond", duracao: 5.05 },
    { id: 4, nome: "9.9.9", artista: "M4rkim", ano: 2024, personagem: "Yhwach", obra: "Bleach", duracao: 4.58 },
    { id: 5, nome: "Murciélago", artista: "M4rkim", ano: 2024, personagem: "Ulquiorra", obra: "Bleach", duracao: 5.18 },
    { id: 6, nome: "Za Warudo", artista: "M4rkim", ano: 2024, personagem: "Dio Brando", obra: "JoJo", duracao: 4.27 },
    { id: 7, nome: "Morte e Redenção", artista: "M4rkim", ano: 2024, personagem: "Arthur Morgan", obra: "Red Dead Redemption 2", duracao: 7.53 },
    { id: 8, nome: "Selvagem", artista: "M4rkim", ano: 2024, personagem: "Rob Lucci", obra: "One Piece", duracao: 4.37 },
    { id: 9, nome: "V", artista: "M4rkim", ano: 2024, personagem: "Vários", obra: "GTA", duracao: 4.98 },
    { id: 10, nome: "Redenção", artista: "Henrique Mendonça", ano: 2023, personagem: "Arthur Morgan", obra: "Red Dead Redemption 2", duracao: 7.60 },
    { id: 11, nome: "InfinitØ", artista: "M4rkim", ano: 2023, personagem: "Satoru Gojo", obra: "Jujutsu Kaisen", duracao: 4.23 },
    { id: 12, nome: "Demônio Controle", artista: "M4rkim", ano: 2024, personagem: "Makima", obra: "Chainsaw Man", duracao: 3.47 },
    { id: 13, nome: "Impronunciável", artista: "M4rkim", ano: 2022, personagem: "Muzan", obra: "Kimetsu no Yaiba", duracao: 4.97 },
    { id: 14, nome: "Lado Negro", artista: "M4rkim", ano: 2022, personagem: "Darth Vader", obra: "Star Wars", duracao: 5.88 },
    { id: 15, nome: "Doce Visão Do Futuro", artista: "M4rkim", ano: 2023, personagem: "Katakuri", obra: "One Piece", duracao: 4.27 },
    { id: 16, nome: "Puro Amor", artista: "M4rkim", ano: 2024, personagem: "Yuta Okkotsu", obra: "Jujutsu Kaisen", duracao: 5.30 },
    { id: 17, nome: "Mundo De Ooo", artista: "M4rkim", ano: 2024, personagem: "Finn", obra: "Hora de Aventura", duracao: 4.63 },
    { id: 18, nome: "Humanidade", artista: "M4rkim", ano: 2024, personagem: "Vários", obra: "Shuumatsu no Valkyrie", duracao: 9.15 },
    { id: 19, nome: "Desejos Insanos", artista: "M4rkim", ano: 2023, personagem: "Tomie", obra: "Junji Ito", duracao: 3.37 },
    { id: 20, nome: "Braço Direito", artista: "M4rkim", ano: 2023, personagem: "Vários", obra: "One Piece", duracao: 8.78 },
    { id: 21, nome: "Corpo Morto", artista: "M4rkim", ano: 2023, personagem: "Kenjaku", obra: "Jujutsu Kaisen", duracao: 4.82 },
    { id: 22, nome: "Sol", artista: "M4rkim", ano: 2023, personagem: "Apolo", obra: "Shuumatsu no Valkyrie", duracao: 4.98 },
    { id: 23, nome: "Deus da Destruição", artista: "M4rkim", ano: 2022, personagem: "Shiva", obra: "Shuumatsu no Valkyrie", duracao: 4.17 },
    { id: 24, nome: "Deus", artista: "M4rkim", ano: 2023, personagem: "Lord Drakkon", obra: "Power Rangers", duracao: 5.87 },
    { id: 25, nome: "Omnitrix", artista: "M4rkim", ano: 2023, personagem: "Ben 10", obra: "Ben 10", duracao: 6.02 },
    { id: 26, nome: "Espiral", artista: "M4rkim", ano: 2023, personagem: "Suguru Geto", obra: "Jujutsu Kaisen", duracao: 4.93 },
    { id: 27, nome: "Motor", artista: "M4rkim", ano: 2022, personagem: "Motoqueiro Fantasma", obra: "Marvel Comics", duracao: 4.03 },
    { id: 28, nome: "Por Um Fio", artista: "M4rkim", ano: 2023, personagem: "Doflamingo", obra: "One Piece", duracao: 5.10 },
    { id: 29, nome: "Lua Superior Quatro", artista: "M4rkim", ano: 2023, personagem: "Hantengu", obra: "Kimetsu no Yaiba", duracao: 4.62 },
    { id: 30, nome: "Cirurgião da Morte", artista: "M4rkim", ano: 2023, personagem: "Law", obra: "One Piece", duracao: 5.45 },
    { id: 31, nome: "Castelo Infinito", artista: "M4rkim", ano: 2022, personagem: "Vários", obra: "Kimetsu no Yaiba", duracao: 6.77 },
    { id: 32, nome: "Ambição", artista: "M4rkim", ano: 2023, personagem: "Vários", obra: "One Piece", duracao: 10.93 },
    { id: 33, nome: "Deus da Extravagância", artista: "M4rkim", ano: 2022, personagem: "Uzui", obra: "Kimetsu no Yaiba", duracao: 3.67 },
    { id: 34, nome: "Maravilha de U", artista: "M4rkim", ano: 2021, personagem: "Tooru", obra: "JoJo", duracao: 3.77 },
    { id: 35, nome: "Lua Superior Dois", artista: "M4rkim", ano: 2022, personagem: "Douma", obra: "Kimetsu no Yaiba", duracao: 4.87 },
    { id: 36, nome: "Do Meu Jeito", artista: "M4rkim", ano: 2022, personagem: "Vários", obra: "Marvel Comics", duracao: 7.17 },
    { id: 37, nome: "China", artista: "M4rkim", ano: 2022, personagem: "Qin Shi Huang", obra: "Shuumatsu no Valkyrie", duracao: 4.67 },
    { id: 38, nome: "Máscara", artista: "M4rkim", ano: 2022, personagem: "Máskara", obra: "The Mask", duracao: 4.88 },
    { id: 39, nome: "Iluminação", artista: "M4rkim", ano: 2022, personagem: "Buda", obra: "Shuumatsu no Valkyrie", duracao: 4.77 },
    { id: 40, nome: "Energia", artista: "M4rkim", ano: 2022, personagem: "Enel", obra: "One Piece", duracao: 4.30 },
    { id: 41, nome: "Poder", artista: "M4rkim", ano: 2022, personagem: "Vários", obra: "Dragon Ball Z", duracao: 6.95 },
    { id: 42, nome: "Abutre", artista: "M4rkim", ano: 2022, personagem: "Arthur Cervero", obra: "Ordem Paranormal", duracao: 5.47 },
    { id: 43, nome: "Olhos Azuis", artista: "M4rkim", ano: 2022, personagem: "Seto Kaiba", obra: "Yu-Gi-Oh!", duracao: 4.12 },
    { id: 44, nome: "Moscas", artista: "M4rkim", ano: 2023, personagem: "Beelzebub", obra: "Shuumatsu no Valkyrie", duracao: 4.62 },
    { id: 45, nome: "Faminto", artista: "M4rkim", ano: 2023, personagem: "Kaneki", obra: "Tokyo Ghoul", duracao: 5.40 },
    { id: 46, nome: "Portões da Babilônia", artista: "M4rkim", ano: 2023, personagem: "Gilgamesh", obra: "Fate", duracao: 4.93 },
    { id: 47, nome: "Quarteto Monstro", artista: "M4rkim", ano: 2024, personagem: "Vários", obra: "One Piece", duracao: 6.55 },
    { id: 48, nome: "Fim da Humanidade", artista: "M4rkim", ano: 2024, personagem: "Eren", obra: "Shingeki no Kyojin", duracao: 5.62 },
    { id: 49, nome: "Seus Dados", artista: "M4rkim", ano: 2024, personagem: "Vários", obra: "Cuphead", duracao: 4.13 },
    { id: 50, nome: "Deus Da Espada", artista: "M4rkim", ano: 2024, personagem: "Susano'o", obra: "Shuumatsu no Valkyrie", duracao: 5.52 },
    { id: 51, nome: "SEGA 6.6.6", artista: "M4rkim", ano: 2024, personagem: "Sonic.exe", obra: "Creepypasta", duracao: 4.40 },
    { id: 52, nome: "Pecado do Orgulho", artista: "M4rkim", ano: 2024, personagem: "Escanor", obra: "Nanatsu no Taizai", duracao: 5.22 },
    { id: 53, nome: "Ruína dos Deuses", artista: "M4rkim", ano: 2024, personagem: "Kratos", obra: "God of War", duracao: 5.92 },
    { id: 54, nome: "Amaldiçoados", artista: "M4rkim", ano: 2024, personagem: "Vários", obra: "Jujutsu Kaisen", duracao: 10.20 },
    { id: 55, nome: "Infinito", artista: "M4rkim", ano: 2022, personagem: "Satoru Gojo", obra: "Jujutsu Kaisen", duracao: 4.58 },
    { id: 56, nome: "Punk Gibson!", artista: "M4rkim", ano: 2024, personagem: "Eustass Kid", obra: "One Piece", duracao: 4.78 },
    { id: 57, nome: "Egoísta", artista: "M4rkim", ano: 2024, personagem: "Isagi Yoichi", obra: "Blue Lock", duracao: 5.48 },
    { id: 58, nome: "Ju$tiça", artista: "M4rkim", ano: 2024, personagem: "Minoru Tanaka", obra: "Death Note", duracao: 4.32 },
    { id: 59, nome: "100 Feras", artista: "M4rkim", ano: 2022, personagem: "Kaidou", obra: "One Piece", duracao: 4.95 },
    { id: 60, nome: "Incrível", artista: "M4rkim", ano: 2025, personagem: "Itoshi Rin", obra: "Blue Lock", duracao: 5.95 },
    { id: 61, nome: "Impecável", artista: "M4rkim", ano: 2025, personagem: "Itoshi Sae", obra: "Blue Lock", duracao: 5.08 },
    { id: 62, nome: "METAVISÃO", artista: "M4rkim", ano: 2025, personagem: "Isagi Yoichi", obra: "Blue Lock", duracao: 6.35 },
    { id: 63, nome: "Mira do Caçador", artista: "M4rkim", ano: 2023, personagem: "Genya Shinazugawa", obra: "Kimetsu no Yaiba", duracao: 4.95 },
    { id: 64, nome: "Deslize da Serpente", artista: "Kaito", ano: 2022, personagem: "Obanai", obra: "Kimetsu no Yaiba", duracao: 4.10 },
    { id: 65, nome: "A Rota do Imperador", artista: "Kaito", ano: 2022, personagem: "Qin Shi Huang", obra: "Shuumatsu no Valkyrie", duracao: 4.00 },
    { id: 66, nome: "Potencial Infinito", artista: "Kaito", ano: 2023, personagem: "Vários", obra: "Jujutsu Kaisen", duracao: 5.13 },
    { id: 67, nome: "Impronunciável", artista: "Kaito", ano: 2022, personagem: "Voldemort", obra: "Harry Potter", duracao: 4.35 },
    { id: 68, nome: "Rokushiki", artista: "Kaito", ano: 2023, personagem: "Rob Lucci", obra: "One Piece", duracao: 4.38 },
    { id: 69, nome: "O Lado Negro da Força", artista: "Kaito", ano: 2022, personagem: "Darth Vader", obra: "Star Wars", duracao: 5.47 },
    { id: 70, nome: "Avanço", artista: "Kaito", ano: 2023, personagem: "Vários", obra: "Shuumatsu no Valkyrie", duracao: 5.92 },
    { id: 71, nome: "Bater de Palmas", artista: "Kaito", ano: 2022, personagem: "Aoi Todo", obra: "Jujutsu Kaisen", duracao: 4.85 },
    { id: 72, nome: "Corte", artista: "Kaito", ano: 2024, personagem: "Vários", obra: "Blue Lock", duracao: 4.72 },
    { id: 73, nome: "Maldição do Amor", artista: "Kaito", ano: 2023, personagem: "Yuta Okkotsu", obra: "Jujutsu Kaisen", duracao: 4.50 },
    { id: 74, nome: "Meu Ego", artista: "Kaito", ano: 2023, personagem: "Isagi Yoichi", obra: "Blue Lock", duracao: 4.95 },
    { id: 75, nome: "Egoísta", artista: "Kaito", ano: 2023, personagem: "Isagi Yoichi", obra: "Blue Lock", duracao: 5.08 },
    { id: 76, nome: "Eu Sempre Volto", artista: "Kaito", ano: 2023, personagem: "Springtrap", obra: "FNAF", duracao: 4.90 },
    { id: 77, nome: "Estranhagedon", artista: "Kaito", ano: 2023, personagem: "Bill Cipher", obra: "Gravity Falls", duracao: 4.80 },
    { id: 78, nome: "Lâmina da Escuridão", artista: "Kaito", ano: 2022, personagem: "Zed", obra: "League of Legends", duracao: 4.48 },
    { id: 79, nome: "Mundo Transparente", artista: "Kaito", ano: 2022, personagem: "Vários", obra: "Kimetsu no Yaiba", duracao: 5.37 },
    { id: 80, nome: "Perfeição", artista: "Kaito", ano: 2023, personagem: "Itoshi Rin", obra: "Blue Lock", duracao: 4.48 },
    { id: 81, nome: "Destruição", artista: "Kaito", ano: 2025, personagem: "Itoshi Rin", obra: "Blue Lock", duracao: 3.75 },
    { id: 82, nome: "Escuridão", artista: "Kaito", ano: 2023, personagem: "Deku Dark", obra: "Boku no Hero", duracao: 4.00 },
    { id: 83, nome: "Circo", artista: "Kaito", ano: 2022, personagem: "Buggy", obra: "One Piece", duracao: 3.90 },
    { id: 84, nome: "Arco-Íris", artista: "Kaito", ano: 2023, personagem: "Douma", obra: "Kimetsu no Yaiba", duracao: 4.72 },
    { id: 85, nome: "Calmaria", artista: "Kaito", ano: 2022, personagem: "Tomioka", obra: "Kimetsu no Yaiba", duracao: 3.38 },
    { id: 86, nome: "Gênio", artista: "Kaito", ano: 2023, personagem: "Itoshi Sae", obra: "Blue Lock", duracao: 4.42 },
    { id: 87, nome: "Aranha", artista: "Kaito", ano: 2024, personagem: "Chrollo", obra: "Hunter x Hunter", duracao: 5.80 },
    { id: 88, nome: "Pancadão", artista: "Kaito", ano: 2024, personagem: "Jotaro", obra: "JoJo", duracao: 4.03 },
    { id: 89, nome: "Novo Herói", artista: "Kaito", ano: 2025, personagem: "Vários", obra: "Blue Lock", duracao: 9.18 },
    { id: 90, nome: "Assassino sem Rosto", artista: "Kaito", ano: 2025, personagem: "Loki", obra: "Shuumatsu no Valkyrie", duracao: 5.20 },
    { id: 91, nome: "New Gen", artista: "Kaito", ano: 2025, personagem: "Vários", obra: "Blue Lock", duracao: 4.68 },
    { id: 92, nome: "Imperador", artista: "Kaito", ano: 2023, personagem: "Kaiser", obra: "Blue Lock", duracao: 4.00 },
    { id: 93, nome: "Dançarino", artista: "Kaito", ano: 2025, personagem: "Lavinho", obra: "Blue Lock", duracao: 3.30 },
    { id: 94, nome: "Vilão do Cenário", artista: "M4rkim", ano: 2025, personagem: "Barou", obra: "Blue Lock", duracao: 4.60 },
    { id: 95, nome: "Bastard Munchen", artista: "M4rkim", ano: 2025, personagem: "Vários", obra: "Blue Lock", duracao: 7.77 },
    { id: 96, nome: "Ciência!!", artista: "Enygma", ano: 2023, personagem: "Nikola Tesla", obra: "Shuumatsu no Valkyrie", duracao: 5.45 },
    { id: 97, nome: "Terror em Londres", artista: "Enygma", ano: 2022, personagem: "Jack, o Estripador", obra: "Shuumatsu no Valkyrie", duracao: 4.98 },
    { id: 98, nome: "Mágico Assassino", artista: "Enygma", ano: 2022, personagem: "Hisoka", obra: "Hunter x Hunter", duracao: 4.70 },
    { id: 99, nome: "Ódio", artista: "Enygma", ano: 2023, personagem: "Hantengu", obra: "Kimetsu no Yaiba", duracao: 4.90 },
    { id: 100, nome: "Arte", artista: "Enygma", ano: 2023, personagem: "Gyokko", obra: "Kimetsu no Yaiba", duracao: 4.73 },
    { id: 101, nome: "7 Cores de Morte", artista: "Enygma", ano: 2024, personagem: "Douma", obra: "Kimetsu no Yaiba", duracao: 6.05 },
    { id: 102, nome: "Rei dos Piratas", artista: "Enygma", ano: 2021, personagem: "Luffy", obra: "One Piece", duracao: 7.23 },
    { id: 103, nome: "Alma", artista: "Enygma", ano: 2023, personagem: "Mahito", obra: "Jujutsu Kaisen", duracao: 5.83 },
    { id: 104, nome: "Why so Serious", artista: "Enygma", ano: 2023, personagem: "Coringa", obra: "Batman: O Cavaleiro das Trevas", duracao: 5.40 },
    { id: 105, nome: "Sua Agonia", artista: "Enygma", ano: 2025, personagem: "Springtrap", obra: "FNAF", duracao: 6.00 },
    { id: 106, nome: "Face do Desespero", artista: "Enygma", ano: 2025, personagem: "Ulquiorra", obra: "Bleach", duracao: 5.90 },
    { id: 107, nome: "BERSERK", artista: "Enygma", ano: 2025, personagem: "Guts", obra: "Berserk", duracao: 8.78 },
    { id: 108, nome: "Hipnose Perfeita", artista: "Enygma", ano: 2024, personagem: "Aizen", obra: "Bleach", duracao: 6.23 },
    { id: 109, nome: "Feridas e Sangue", artista: "Enygma", ano: 2024, personagem: "Deku Dark", obra: "Boku no Hero", duracao: 4.68 },
    { id: 110, nome: "Saúdem o Rei", artista: "Enygma", ano: 2024, personagem: "Doflamingo", obra: "One Piece", duracao: 5.70 },
    { id: 111, nome: "Sacrifício", artista: "Enygma", ano: 2023, personagem: "Griffith", obra: "Berserk", duracao: 5.62 },
    { id: 112, nome: "Corpo Perfeito", artista: "M4rkim", ano: 2025, personagem: "Chris Prince", obra: "Blue Lock", duracao: 4.62 },
    { id: 113, nome: "Berserk", artista: "M4rkim", ano: 2023, personagem: "Guts", obra: "Berserk", duracao: 4.23 },
    { id: 114, nome: "Perdi Tudo", artista: "M4rkim", ano: 2023, personagem: "Guts", obra: "Berserk", duracao: 5.60 },
    { id: 115, nome: "Rei das Maldições", artista: "M4rkim", ano: 2023, personagem: "Sukuna", obra: "Jujutsu Kaisen", duracao: 5.83 },
    { id: 116, nome: "Raios e Trovões", artista: "Kaito", ano: 2025, personagem: "Vários", obra: "Kimetsu no Yaiba", duracao: 4.48 },
    { id: 117, nome: "Katen Kyokotsu", artista: "Kaito", ano: 2025, personagem: "Shunsui", obra: "Bleach", duracao: 4.53 },
    { id: 118, nome: "Alma Vazia", artista: "Basara", ano: 2024, personagem: "Vários", obra: "Vários", duracao: 4.72 },
    { id: 119, nome: "Pétalas de Sakura", artista: "Basara", ano: 2023, personagem: "Byakuya", obra: "Bleach", duracao: 5.43 },
    { id: 120, nome: "Berserk", artista: "Basara", ano: 2023, personagem: "Guts", obra: "Berserk", duracao: 5.02 },
    { id: 121, nome: "Ergam-se", artista: "Basara", ano: 2022, personagem: "Sung Jin Woo", obra: "Solo Leveling", duracao: 4.78 },
    { id: 122, nome: "Monarca das Sombras", artista: "Basara", ano: 2024, personagem: "Sung Jin Woo", obra: "Solo Leveling", duracao: 5.17 },
    { id: 123, nome: "Sol e Lua", artista: "Basara", ano: 2023, personagem: "Vários", obra: "Kimetsu no Yaiba", duracao: 4.90 },
    { id: 124, nome: "Deus da Lua", artista: "Basara", ano: 2022, personagem: "Kokushibo", obra: "Kimetsu no Yaiba", duracao: 4.25 },
    { id: 125, nome: "Águas Passadas", artista: "Basara", ano: 2022, personagem: "Tomioka", obra: "Kimetsu no Yaiba", duracao: 4.92 },
    { id: 126, nome: "Intocável", artista: "Basara", ano: 2023, personagem: "Satoru Gojo", obra: "Jujutsu Kaisen", duracao: 5.03 },
    { id: 127, nome: "Sol Da Noite", artista: "M4rkim", ano: 2023, personagem: "Yoriichi", obra: "Kimetsu no Yaiba", duracao: 4.97 },
    { id: 128, nome: "Luar de Sangue", artista: "Basara", ano: 2022, personagem: "Vários", obra: "Kimetsu no Yaiba", duracao: 7.60 },
    { id: 129, nome: "A Nova Era", artista: "Basara", ano: 2022, personagem: "Vários", obra: "One Piece", duracao: 6.58 },
    { id: 130, nome: "DISStaque", artista: "Basara", ano: 2025, personagem: "Vários", obra: "Vários", duracao: 3.68 },
    { id: 131, nome: "Gear 5", artista: "Basara", ano: 2022, personagem: "Luffy", obra: "One Piece", duracao: 5.75 },
    { id: 132, nome: "Boo!", artista: "Basara", ano: 2025, personagem: "Majin Boo", obra: "Dragon Ball Z", duracao: 3.95 },
    { id: 133, nome: "Akaza VS. Tanjiro e Tomioka", artista: "Basara", ano: 2025, personagem: "Vários", obra: "Kimetsu no Yaiba", duracao: 5.50 },
    { id: 134, nome: "2 Mundos", artista: "Basara", ano: 2024, personagem: "Ichigo", obra: "Bleach", duracao: 5.17 },
    { id: 135, nome: "Zangetsu", artista: "M4rkim", ano: 2024, personagem: "Ichigo", obra: "Bleach", duracao: 4.65 },
    { id: 136, nome: "Plano Perfeito", artista: "Anirap", ano: 2024, personagem: "Vários", obra: "Death Note", duracao: 5.72 },
    { id: 137, nome: "AMOR", artista: "Anirap", ano: 2024, personagem: "Yuta Okkotsu", obra: "Jujutsu Kaisen", duracao: 3.65 },
    { id: 138, nome: "Eletricidade", artista: "Anirap", ano: 2023, personagem: "Hajime Kashimo", obra: "Jujutsu Kaisen", duracao: 4.32 },
    { id: 139, nome: "O Mais Forte", artista: "Anirap", ano: 2023, personagem: "Satoru Gojo", obra: "Jujutsu Kaisen", duracao: 4.27 },
    { id: 140, nome: "OVER-DOSE", artista: "Anirap", ano: 2023, personagem: "Kaleb", obra: "Sense Life", duracao: 3.85 },
    { id: 141, nome: "Parceria Formada", artista: "Anirap", ano: 2024, personagem: "Vários", obra: "Sense Life", duracao: 3.70 },
    { id: 142, nome: "Tribunal", artista: "Anirap", ano: 2024, personagem: "Higuruma", obra: "Jujutsu Kaisen", duracao: 3.62 },
    { id: 143, nome: "Rei Absoluto", artista: "Anirap", ano: 2023, personagem: "Barou", obra: "Blue Lock", duracao: 4.15 },
    { id: 144, nome: "Inveja", artista: "Anirap", ano: 2025, personagem: "Kokushibo", obra: "Kimetsu no Yaiba", duracao: 5.23 },
    { id: 145, nome: "Ego Morto", artista: "Anirap", ano: 2025, personagem: "Nagi Seishiro", obra: "Blue Lock", duracao: 5.57 },
    { id: 146, nome: "ABSOLUTA DESTRUIÇÃO", artista: "Anirap", ano: 2025, personagem: "Itoshi Rin", obra: "Blue Lock", duracao: 5.55 },
    { id: 147, nome: "Morto-Rico", artista: "Anirap", ano: 2025, personagem: "Don Lorenzo", obra: "Blue Lock", duracao: 4.93 },
    { id: 148, nome: "Lixo", artista: "Anirap", ano: 2024, personagem: "Rudo Surebrec", obra: "Gachiakuta", duracao: 4.32 },
    { id: 149, nome: "O Melhor", artista: "Anirap", ano: 2024, personagem: "Kaiser", obra: "Blue Lock", duracao: 4.42 },
    { id: 150, nome: "Olhos Vendados", artista: "Anirap", ano: 2022, personagem: "Vários", obra: "Vários", duracao: 4.05 },
    { id: 151, nome: "Coral da Agonia", artista: "Blxck", ano: 2025, personagem: "Springtrap", obra: "FNAF", duracao: 5.72 },
    { id: 152, nome: "Agente do Caos", artista: "Blxck", ano: 2025, personagem: "Shadow", obra: "Sonic", duracao: 4.80 },
    { id: 153, nome: "Inferno de Gelo", artista: "Blxck", ano: 2025, personagem: "Douma", obra: "Kimetsu no Yaiba", duracao: 5.98 },
    { id: 154, nome: "Perfeição", artista: "Blxck", ano: 2025, personagem: "Itoshi Sae", obra: "Blue Lock", duracao: 5.12 },
    { id: 155, nome: "Maldição", artista: "Blxck", ano: 2025, personagem: "Beelzebub", obra: "Shuumatsu no Valkyrie", duracao: 4.85 },
    { id: 156, nome: "Frio", artista: "Blxck", ano: 2025, personagem: "Simo Hayha", obra: "Shuumatsu no Valkyrie", duracao: 4.77 },
    { id: 157, nome: "Canônico", artista: "Blxck", ano: 2025, personagem: "Miguel O'Hara", obra: "Homem Aranha: Através do Aranhaverso", duracao: 4.72 },
    { id: 158, nome: "Anoitecer Cruel", artista: "Blxck", ano: 2025, personagem: "Kokushibo", obra: "Kimetsu no Yaiba", duracao: 5.12 },
    { id: 159, nome: "A Criança Demônio", artista: "Blxck", ano: 2025, personagem: "Okita Souji", obra: "Shuumatsu no Valkyrie", duracao: 5.05 },
    { id: 160, nome: "O Rei Voltou", artista: "Blxck", ano: 2025, personagem: "Yhwach", obra: "Bleach", duracao: 5.08 },
    { id: 161, nome: "Invisível", artista: "Blxck", ano: 2024, personagem: "Fushiguro Toji", obra: "Jujutsu Kaisen", duracao: 4.75 },
    { id: 162, nome: "Mr. 0", artista: "Blxck", ano: 2024, personagem: "Crocodile", obra: "One Piece", duracao: 5.77 },
    { id: 163, nome: "Pressão", artista: "Blxck", ano: 2024, personagem: "Zaraki Kenpachi", obra: "Bleach", duracao: 4.22 },
    { id: 164, nome: "Solidão", artista: "Blxck", ano: 2024, personagem: "Vários", obra: "Jujutsu Kaisen", duracao: 4.87 },
    { id: 165, nome: "Vilão", artista: "Blxck", ano: 2024, personagem: "Barou", obra: "Blue Lock", duracao: 5.28 },
    { id: 166, nome: "Casca Vazia", artista: "Blxck", ano: 2024, personagem: "Knight", obra: "Hollow Knight", duracao: 4.05 },
    { id: 167, nome: "Rei dos Reis", artista: "Blxck", ano: 2024, personagem: "Qin Shi Huang", obra: "Shuumatsu no Valkyrie", duracao: 4.52 },
    { id: 168, nome: "O Escolhido", artista: "Blxck", ano: 2024, personagem: "Kaiser", obra: "Blue Lock", duracao: 4.85 },
    { id: 169, nome: "Deus", artista: "Daarui", ano: 2025, personagem: "Enel", obra: "One Piece", duracao: 4.45 },
    { id: 170, nome: "Como Um Trovão", artista: "Daarui", ano: 2025, personagem: "Zenitsu", obra: "Kimetsu no Yaiba", duracao: 4.15 },
    { id: 171, nome: "La Pantera", artista: "Daarui", ano: 2025, personagem: "Grimmjow", obra: "Bleach", duracao: 4.72 },
    { id: 172, nome: "Monarca Das Sombras", artista: "Daarui", ano: 2025, personagem: "Sung Jin Woo", obra: "Solo Leveling", duracao: 5.47 },
    { id: 173, nome: "Luar Superior", artista: "Daarui", ano: 2025, personagem: "Vários", obra: "Kimetsu no Yaiba", duracao: 5.78 },
    { id: 174, nome: "East Blue", artista: "Daarui", ano: 2024, personagem: "Vários", obra: "One Piece", duracao: 10.95 },
    { id: 175, nome: "O Rei", artista: "Daarui", ano: 2023, personagem: "Sukuna", obra: "Jujutsu Kaisen", duracao: 5.00 },
    { id: 176, nome: "O Infinito", artista: "Daarui", ano: 2023, personagem: "Satoru Gojo", obra: "Jujutsu Kaisen", duracao: 4.53 },
    { id: 177, nome: "Terceiro Lua", artista: "Daarui", ano: 2023, personagem: "Akaza", obra: "Kimetsu no Yaiba", duracao: 5.07 },
    { id: 178, nome: "O Homem Que Vale 1 Bilhão", artista: "Daarui", ano: 2023, personagem: "Katakuri", obra: "One Piece", duracao: 4.12 },
    { id: 179, nome: "Lua Superior Três", artista: "M4rkim", ano: 2025, personagem: "Akaza", obra: "Kimetsu no Yaiba", duracao: 4.88 },
    { id: 180, nome: "Mochi Mochi", artista: "Enygma", ano: 2023, personagem: "Katakuri", obra: "One Piece", duracao: 3.97 },
    { id: 181, nome: "All Blue", artista: "Enygma", ano: 2023, personagem: "Sanji", obra: "One Piece", duracao: 7.05 },
    { id: 182, nome: "O PODER DA MINHA IRA 2", artista: "7 Minutoz", ano: 2021, personagem: "Vários", obra: "Vários", duracao: 2.92 },
    { id: 183, nome: "UMA BIJUU SEM CAUDA", artista: "7 Minutoz", ano: 2020, personagem: "Kisame", obra: "Naruto", duracao: 4.03 },
    { id: 184, nome: "MAIS NINGUÉM VAI SOFRER O QUE EU SOFRI", artista: "7 Minutoz", ano: 2019, personagem: "Obito", obra: "Naruto", duracao: 4.03 },
    { id: 185, nome: "ME TORNEI UM DEUS", artista: "7 Minutoz", ano: 2019, personagem: "Madara", obra: "Naruto", duracao: 5.52 },
    { id: 186, nome: "VAI COMEÇAR O RITUAL", artista: "7 Minutoz", ano: 2020, personagem: "Hidan", obra: "Naruto", duracao: 4.55 },
    { id: 187, nome: "ACHOU QUE EU TINHA MORRIDO", artista: "7 Minutoz", ano: 2020, personagem: "Kakuzu", obra: "Naruto", duracao: 3.18 },
    { id: 188, nome: "O DEMÔNIO DA NÉVOA OCULTA", artista: "7 Minutoz", ano: 2021, personagem: "Zabuza", obra: "Naruto", duracao: 3.52 },
    { id: 189, nome: "O SUCESSOR DO L", artista: "7 Minutoz", ano: 2020, personagem: "Vários", obra: "Death Note", duracao: 3.65 },
    { id: 190, nome: "O MAIOR DETETIVE", artista: "7 Minutoz", ano: 2020, personagem: "L", obra: "Death Note", duracao: 5.17 },
    { id: 191, nome: "O DEUS DO NOVO MUNDO", artista: "7 Minutoz", ano: 2020, personagem: "Kira", obra: "Death Note", duracao: 3.53 },
    { id: 192, nome: "CAIXÃO DE AREIA", artista: "7 Minutoz", ano: 2019, personagem: "Gaara", obra: "Naruto", duracao: 4.95 },
    { id: 193, nome: "ITADORI", artista: "7 Minutoz", ano: 2025, personagem: "Itadori", obra: "Jujutsu Kaisen", duracao: 3.88 },
    { id: 194, nome: "SUKUNA", artista: "7 Minutoz", ano: 2025, personagem: "Sukuna", obra: "Jujutsu Kaisen", duracao: 3.87 },
    { id: 195, nome: "SATORU GOJO", artista: "7 Minutoz", ano: 2025, personagem: "Satoru Gojo", obra: "Jujutsu Kaisen", duracao: 4.40 },
    { id: 196, nome: "SUGURU GETO", artista: "7 Minutoz", ano: 2025, personagem: "Suguru Geto", obra: "Jujutsu Kaisen", duracao: 3.95 },
    { id: 197, nome: "MAHITO", artista: "7 Minutoz", ano: 2025, personagem: "Mahito", obra: "Jujutsu Kaisen", duracao: 3.77 },
    { id: 198, nome: "CIRURGIÃO DA MORTE", artista: "7 Minutoz", ano: 2023, personagem: "Law", obra: "One Piece", duracao: 5.38 },
    { id: 199, nome: "O DESERTO SERÁ SEU CEMITÉRIO", artista: "7 Minutoz", ano: 2023, personagem: "Crocodile", obra: "One Piece", duracao: 5.17 },
    { id: 200, nome: "CHAPÉU DE PALHA", artista: "7 Minutoz", ano: 2023, personagem: "Luffy", obra: "One Piece", duracao: 6.18 }
];

// ============================================
// VARIÁVEIS GLOBAIS DO JOGO
// ============================================
let musicaDoDia = null;           // Música que o usuário precisa adivinhar
let tentativas = [];               // Histórico de tentativas do usuário
let jogoGanho = false;             // Status do jogo
let obraRevelada = false;          // Se a obra foi revelada
let personagemRevelado = false;    // Se o personagem foi revelado
let modoJogo = 'aleatorio';        // Modo do jogo: 'aleatorio' ou 'desafio'

// ============================================
// FUNÇÃO: Iniciar modo aleatório
// ============================================
function iniciarModoAleatorio() {
    modoJogo = 'aleatorio';
    document.getElementById('modeSelectionModal').classList.add('hidden');
    inicializarJogo();
}

// ============================================
// FUNÇÃO: Abrir seletor de músicas para desafio
// ============================================
function abrirSeletorMusicas() {
    const modal = document.getElementById('musicSelectorModal');
    const listContainer = document.getElementById('musicSelectorList');
    
    // Preenche a lista com todas as músicas
    listContainer.innerHTML = musicasDisponiveis.map(musica => `
        <div class="music-selector-item" onclick="selecionarMusicaDesafio(${musica.id})">
            <div class="music-selector-item-title">${musica.nome}</div>
            <div class="music-selector-item-artist">${musica.artista} • ${musica.obra}</div>
        </div>
    `).join('');
    
    document.getElementById('modeSelectionModal').classList.add('hidden');
    modal.classList.remove('hidden');
}

// ============================================
// FUNÇÃO: Filtrar músicas no seletor
// ============================================
function filtrarMusicasParaDesafio(texto) {
    const listContainer = document.getElementById('musicSelectorList');
    const textoLower = texto.toLowerCase();
    
    if (texto.trim() === '') {
        // Mostra todas se vazio
        listContainer.innerHTML = musicasDisponiveis.map(musica => `
            <div class="music-selector-item" onclick="selecionarMusicaDesafio(${musica.id})">
                <div class="music-selector-item-title">${musica.nome}</div>
                <div class="music-selector-item-artist">${musica.artista} • ${musica.obra}</div>
            </div>
        `).join('');
    } else {
        // Filtra por nome, artista ou obra
        const filtradas = musicasDisponiveis.filter(musica =>
            musica.nome.toLowerCase().includes(textoLower) ||
            musica.artista.toLowerCase().includes(textoLower) ||
            musica.obra.toLowerCase().includes(textoLower)
        );
        
        if (filtradas.length === 0) {
            listContainer.innerHTML = '<p style="color: var(--text-secondary); padding: 20px; text-align: center;">Nenhuma música encontrada</p>';
        } else {
            listContainer.innerHTML = filtradas.map(musica => `
                <div class="music-selector-item" onclick="selecionarMusicaDesafio(${musica.id})">
                    <div class="music-selector-item-title">${musica.nome}</div>
                    <div class="music-selector-item-artist">${musica.artista} • ${musica.obra}</div>
                </div>
            `).join('');
        }
    }
}

// ============================================
// FUNÇÃO: Selecionar música para desafio
// ============================================
function selecionarMusicaDesafio(musicaId) {
    musicaDoDia = musicasDisponiveis.find(m => m.id === musicaId);
    modoJogo = 'desafio';
    
    document.getElementById('musicSelectorModal').classList.add('hidden');
    document.getElementById('modeSelectionModal').classList.add('hidden');
    
    // Inicia o jogo com a música selecionada
    tentativas = [];
    jogoGanho = false;
    obraRevelada = false;
    personagemRevelado = false;
    
    // Prepara a interface
    document.getElementById('feedback').className = 'feedback hidden';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessBtn').disabled = false;
    document.getElementById('guessBtn').textContent = 'Chutar';
    document.getElementById('newGameBtn').classList.add('hidden');
    document.getElementById('suggestionsList').classList.add('hidden');
    document.getElementById('hintsUnlock').classList.add('hidden');
    document.getElementById('revealedHints').classList.add('hidden');
    document.getElementById('obraRevealed').classList.add('hidden');
    document.getElementById('personagemRevealed').classList.add('hidden');
    document.getElementById('unlockObraBtn').classList.add('hidden');
    document.getElementById('unlockPersonagemBtn').classList.add('hidden');
    
    atualizarTabelaTentativas();
    
    console.log('🎯 Modo Desafio iniciado! Música:', musicaDoDia.nome);
}

// ============================================
// FUNÇÃO: Abrir modal de seleção ao carregar
// ============================================
function mostrarModalSelecao() {
    document.getElementById('modeSelectionModal').classList.remove('hidden');
}


function obterMusicaAleatoria() {
    // Seleciona uma música aleatória que seja diferente da anterior
    let novaMusica;
    do {
        const indiceAleatorio = Math.floor(Math.random() * musicasDisponiveis.length);
        novaMusica = musicasDisponiveis[indiceAleatorio];
    } while (novaMusica.id === musicaDoDia?.id); // Garante que não repete a anterior
    
    return novaMusica;
}

// ============================================
// FUNÇÃO: Inicializar o jogo
// ============================================
function inicializarJogo() {
    // Se não há música selecionada (modo aleatório), pega uma aleatória
    if (!musicaDoDia) {
        musicaDoDia = obterMusicaAleatoria();
    }
    
    tentativas = [];
    jogoGanho = false;
    obraRevelada = false;
    personagemRevelado = false;
    
    // Limpa a interface
    document.getElementById('feedback').className = 'feedback hidden';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessBtn').disabled = false;
    document.getElementById('guessBtn').textContent = 'Chutar';
    document.getElementById('newGameBtn').classList.add('hidden');
    document.getElementById('suggestionsList').classList.add('hidden');
    document.getElementById('hintsUnlock').classList.add('hidden');
    document.getElementById('revealedHints').classList.add('hidden');
    document.getElementById('obraRevealed').classList.add('hidden');
    document.getElementById('personagemRevealed').classList.add('hidden');
    document.getElementById('unlockObraBtn').classList.add('hidden');
    document.getElementById('unlockPersonagemBtn').classList.add('hidden');
    
    atualizarTabelaTentativas();
    
    console.log('🎮 Jogo iniciado! Música:', musicaDoDia.nome);
}

// ============================================
// FUNÇÃO: Atualizar botões de dicas desbloqueáveis
// ============================================
function atualizarBotoesDesbloqueio() {
    const errosTotais = tentativas.length; // Contabiliza tentativas (não apenas erros)
    const temErros = errosTotais > 0;
    
    if (temErros && errosTotais >= 5) {
        document.getElementById('hintsUnlock').classList.remove('hidden');
        document.getElementById('unlockObraBtn').classList.remove('hidden');
    }
    
    if (temErros && errosTotais >= 10) {
        document.getElementById('unlockPersonagemBtn').classList.remove('hidden');
    }
}

// ============================================
// FUNÇÃO: Revelar Obra
// ============================================
function revelarObra() {
    if (obraRevelada) return;
    
    obraRevelada = true;
    document.getElementById('obraText').textContent = musicaDoDia.obra;
    document.getElementById('obraRevealed').classList.remove('hidden');
    document.getElementById('revealedHints').classList.remove('hidden');
}

// ============================================
// FUNÇÃO: Revelar Personagem
// ============================================
function revelarPersonagem() {
    if (personagemRevelado) return;
    
    personagemRevelado = true;
    document.getElementById('personagemText').textContent = musicaDoDia.personagem;
    document.getElementById('personagemRevealed').classList.remove('hidden');
    document.getElementById('revealedHints').classList.remove('hidden');
}
function compararAtributo(nome, valor, valorcorreto) {
    valor = String(valor).toLowerCase().trim();
    valorcorreto = String(valorcorreto).toLowerCase().trim();
    
    // Comparação exata
    if (valor === valorcorreto) {
        return { correto: true, feedback: '', tipo: 'correct' };
    }
    
    // Para números, mostrar maior/menor (feedback invertido - mostra o que PRECISA ser)
    if (nome === 'ano' || nome === 'duracao') {
        const valorNum = parseFloat(valor);
        const valorCorretoNum = parseFloat(valorcorreto);
        
        if (!isNaN(valorNum) && !isNaN(valorCorretoNum)) {
            if (valorNum < valorCorretoNum) {
                return { correto: false, feedback: '(maior)', tipo: 'incorrect' };
            } else if (valorNum > valorCorretoNum) {
                return { correto: false, feedback: '(menor)', tipo: 'incorrect' };
            }
        }
    }
    
    return { correto: false, feedback: '(errado)', tipo: 'incorrect' };
}

// ============================================
// FUNÇÃO: Encontrar música por nome e artista
// ============================================
function encontrarMusica(nome, artista) {
    const nomeLower = String(nome).toLowerCase().trim();
    const artistaLower = String(artista).toLowerCase().trim();
    
    return musicasDisponiveis.find(m => 
        m.nome.toLowerCase() === nomeLower && m.artista.toLowerCase() === artistaLower
    );
}

// ============================================
// FUNÇÃO: Processar palpite do usuário
// ============================================
function processarPalpite() {
    const input = document.getElementById('guessInput');
    const palpiteOriginal = input.value.trim();
    const palpite = palpiteOriginal.toLowerCase();
    
    if (palpite === '') {
        mostrarFeedback('Por favor, digite um nome de música!', 'error');
        return;
    }
    
    // Tenta interpretar o formato "Nome - Artista"
    let musicaChutada = null;
    let nomeDigitado = palpiteOriginal;
    let artistaDigitado = '';
    
    if (palpite.includes(' - ')) {
        const partes = palpiteOriginal.split(' - ');
        nomeDigitado = partes[0].trim();
        artistaDigitado = partes[1].trim();
        musicaChutada = encontrarMusica(nomeDigitado, artistaDigitado);
    }
    
    // Se não encontrou no formato "Nome - Artista", tenta apenas pelo nome
    if (!musicaChutada) {
        // Se existe alguém digitando só o nome, procura por um match
        const musicasComNome = musicasDisponiveis.filter(m => 
            m.nome.toLowerCase() === palpite
        );
        
        if (musicasComNome.length === 1) {
            musicaChutada = musicasComNome[0];
        } else if (musicasComNome.length > 1) {
            // Se há múltiplas músicas com o mesmo nome, mostra erro pedindo que especifique o artista
            mostrarFeedback('❌ Existem várias músicas com esse nome. Use o formato "Nome - Artista"!', 'error');
            return;
        } else {
            mostrarFeedback('❌ Essa música não existe na lista!', 'error');
            return;
        }
    }
    
    // Verifica se já foi tentado essa música específica (por ID)
    if (tentativas.some(t => t.musicaId === musicaChutada.id)) {
        mostrarFeedback('Você já tentou essa música!', 'error');
        return;
    }
    
    // Verifica se acertou
    const acertou = musicaChutada.id === musicaDoDia.id;
    
    if (acertou) {
        jogoGanho = true;
        mostrarFeedback(`✅ Correto! Era "${musicaDoDia.nome}" - ${musicaDoDia.artista}!`, 'success');
        
        input.disabled = true;
        document.getElementById('guessBtn').disabled = true;
        document.getElementById('newGameBtn').classList.remove('hidden');
    } else {
        mostrarFeedback(`❌ Não é essa... Tente novamente!`, 'error');
    }
    
    // Adiciona a tentativa com todas as comparações
    tentativas.push({
        musicaId: musicaChutada.id,
        palpite: palpiteOriginal,
        nome: musicaChutada.nome,
        artista: musicaChutada.artista,
        comparacoes: {
            nome: { correto: musicaChutada.nome === musicaDoDia.nome, feedback: '', tipo: musicaChutada.nome === musicaDoDia.nome ? 'correct' : 'incorrect' },
            artista: compararAtributo('artista', musicaChutada.artista, musicaDoDia.artista),
            ano: compararAtributo('ano', musicaChutada.ano, musicaDoDia.ano),
            personagem: compararAtributo('personagem', musicaChutada.personagem, musicaDoDia.personagem),
            obra: compararAtributo('obra', musicaChutada.obra, musicaDoDia.obra),
            duracao: compararAtributo('duracao', musicaChutada.duracao, musicaDoDia.duracao)
        }
    });
    
    input.value = '';
    input.focus();
    
    atualizarTabelaTentativas();
    atualizarBotoesDesbloqueio();
    document.getElementById('suggestionsList').classList.add('hidden');
}

// ============================================
// FUNÇÃO: Atualizar tabela de tentativas
// ============================================
function atualizarTabelaTentativas() {
    const table = document.getElementById('attemptsTable');
    
    if (tentativas.length === 0) {
        table.innerHTML = '<p class="empty-state">Nenhum chute ainda</p>';
        return;
    }
    
    // Inverte a ordem para mostrar os mais recentes no topo
    table.innerHTML = tentativas.slice().reverse().map((tentativa, index) => {
        const todosCorretos = Object.values(tentativa.comparacoes).every(c => c.correto);
        // Usa o índice reverso para mostrar o número correto
        const numeroChute = tentativas.length - index;
        
        // Encontra a música chutada pelo ID para pegar todos os dados
        const musicaChutada = musicasDisponiveis.find(m => m.id === tentativa.musicaId);
        
        return `
            <div class="attempt-row ${todosCorretos ? 'correct' : 'incorrect'}">
                <div class="attempt-row-title">Chute ${numeroChute}: ${tentativa.nome} - ${tentativa.artista}</div>
                <div class="attempt-hints">
                    ${Object.entries({
                        'Nome': 'nome',
                        'Artista': 'artista',
                        'Ano': 'ano',
                        'Personagem': 'personagem',
                        'Obra': 'obra',
                        'Duração': 'duracao'
                    }).map(([label, chave]) => {
                        const comp = tentativa.comparacoes[chave];
                        const valor = chave === 'duracao' 
                            ? `${Math.floor(musicaChutada?.duracao || 0)}:${String(Math.round(((musicaChutada?.duracao || 0) % 1) * 60)).padStart(2, '0')}`
                            : (musicaChutada?.[chave] || tentativa.palpite);
                        
                        return `
                            <div class="attempt-hint ${comp.tipo}">
                                <span class="attempt-hint-label">${label}</span>
                                <span class="attempt-hint-value">${valor} ${comp.feedback}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// FUNÇÃO: Mostrar feedback ao usuário
// ============================================
function mostrarFeedback(mensagem, tipo) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.textContent = mensagem;
    feedbackDiv.className = `feedback ${tipo}`;
    
    if (tipo === 'error') {
        setTimeout(() => {
            if (!jogoGanho) {
                feedbackDiv.classList.add('hidden');
            }
        }, 4000);
    }
}

// ============================================
// FUNÇÃO: Atualizar lista de sugestões
// ============================================
function atualizarSugestoes(texto) {
    const suggestionsList = document.getElementById('suggestionsList');
    
    if (texto.trim() === '') {
        suggestionsList.classList.add('hidden');
        return;
    }
    
    // Obtém IDs das músicas já tentadas
    const musicasJaTentadas = tentativas.map(t => t.musicaId);
    
    const textoLower = texto.toLowerCase();
    
    // Filtra músicas que correspondem ao texto E que ainda não foram tentadas
    const filtradas = musicasDisponiveis.filter(musica =>
        (musica.nome.toLowerCase().includes(textoLower) ||
         musica.artista.toLowerCase().includes(textoLower)) &&
        !musicasJaTentadas.includes(musica.id)
    );
    
    // Ordena as sugestões: primeiro as que começam com o texto, depois as que contêm
    const sugestoesOrdenadas = filtradas.sort((a, b) => {
        const aComecaCom = a.nome.toLowerCase().startsWith(textoLower);
        const bComecaCom = b.nome.toLowerCase().startsWith(textoLower);
        
        // Se um começa e o outro não, o que começa fica primeiro
        if (aComecaCom !== bComecaCom) {
            return aComecaCom ? -1 : 1;
        }
        
        // Se ambos começam ou ambos não começam, ordena por proximidade da posição
        const aIndex = a.nome.toLowerCase().indexOf(textoLower);
        const bIndex = b.nome.toLowerCase().indexOf(textoLower);
        
        return aIndex - bIndex;
    });
    
    if (sugestoesOrdenadas.length === 0) {
        suggestionsList.classList.add('hidden');
        return;
    }
    
    suggestionsList.innerHTML = sugestoesOrdenadas.slice(0, 8).map(musica => `
        <div class="suggestion-item" onclick="selecionarSugestao('${musica.nome.replace(/'/g, "\\'")} - ${musica.artista.replace(/'/g, "\\'")}')">
            <div class="suggestion-title">${musica.nome}</div>
            <div class="suggestion-artist">${musica.artista}</div>
        </div>
    `).join('');
    
    suggestionsList.classList.remove('hidden');
}

// ============================================
// FUNÇÃO: Selecionar sugestão
// ============================================
function selecionarSugestao(nome) {
    document.getElementById('guessInput').value = nome;
    document.getElementById('suggestionsList').classList.add('hidden');
    processarPalpite();
}

// ============================================
// FUNÇÃO: Nova rodada
// ============================================
function novaRodada() {
    // No modo aleatório, pega uma nova música
    if (modoJogo === 'aleatorio') {
        musicaDoDia = obterMusicaAleatoria();
        tentativas = [];
        jogoGanho = false;
        obraRevelada = false;
        personagemRevelado = false;
        
        document.getElementById('feedback').className = 'feedback hidden';
        document.getElementById('guessInput').value = '';
        document.getElementById('guessInput').disabled = false;
        document.getElementById('guessBtn').disabled = false;
        document.getElementById('guessBtn').textContent = 'Chutar';
        document.getElementById('newGameBtn').classList.add('hidden');
        document.getElementById('suggestionsList').classList.add('hidden');
        document.getElementById('hintsUnlock').classList.add('hidden');
        document.getElementById('revealedHints').classList.add('hidden');
        document.getElementById('obraRevealed').classList.add('hidden');
        document.getElementById('personagemRevealed').classList.add('hidden');
        document.getElementById('unlockObraBtn').classList.add('hidden');
        document.getElementById('unlockPersonagemBtn').classList.add('hidden');
        
        atualizarTabelaTentativas();
    } else {
        // No modo desafio, volta ao seletor
        mostrarModalSelecao();
        mostrarModalSelecao = function() {
            document.getElementById('modeSelectionModal').classList.remove('hidden');
            document.getElementById('musicSelectorModal').classList.add('hidden');
        };
        mostrarModalSelecao();
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Mostra o modal de seleção de modo no início
    mostrarModalSelecao();
    
    const input = document.getElementById('guessInput');
    
    // Input com autocomplete
    input.addEventListener('input', (e) => {
        atualizarSugestoes(e.target.value);
    });
    
    // Fechar sugestões ao clicar fora
    document.addEventListener('click', (e) => {
        if (e.target !== input && !e.target.closest('.suggestion-item')) {
            document.getElementById('suggestionsList').classList.add('hidden');
        }
    });
    
    // Botão Chutar
    document.getElementById('guessBtn').addEventListener('click', () => {
        processarPalpite();
    });
    
    // Enter no input
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !document.getElementById('guessBtn').disabled) {
            processarPalpite();
        }
    });
    
    // Botão Nova Rodada
    document.getElementById('newGameBtn').addEventListener('click', () => {
        novaRodada();
    });
});

console.log('🎵 Musicdle carregado com sucesso!');
console.log('Dica: Use F12 para ver a música do dia no console');

