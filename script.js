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
let artistaRevelado = false;       // Se o artista foi revelado (novo)
let modoJogo = 'aleatorio';        // Modo do jogo: 'aleatorio', 'desafio' ou 'verso'

// Texto de verso para o modo verso; pode ser preenchido depois por cada música
const versoPadrao = 'Verso não cadastrado ainda. Aguarde as atualizações.';

// ============================================
// FUNÇÃO: Iniciar modo aleatório
// ============================================
function iniciarModoAleatorio() {
    modoJogo = 'aleatorio';
    console.log('Modo Aleatório selecionado');
    document.getElementById('modeSelectionModal').classList.add('hidden');
    inicializarJogo();
}

// ============================================
// FUNÇÃO: Abrir seletor de músicas para desafio
// ============================================
function abrirSeletorMusicas() {
    console.log('Modo Desafio selecionado');
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
// FUNÇÃO: Iniciar modo verso (adivinhar pelo verso)
// ============================================
function iniciarModoVerso() {
    modoJogo = 'verso';
    musicaDoDia = obterMusicaAleatoria();
    document.getElementById('modeSelectionModal').classList.add('hidden');

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
    document.getElementById('giveUpBtn').classList.add('hidden');

    atualizarTabelaTentativas();
    atualizarExibicaoMusica();
    console.log('🎤 Modo Verso iniciado! Música:', musicaDoDia.nome);
}

function normalizarVerso(verso) {
    if (!verso || typeof verso !== 'string') return '';
    let texto = verso.trim();
    if (texto === '') return '';
    if (!/[\.\!\?]$/.test(texto)) {
        texto += '.';
    }
    return texto;
}

function obterVersoDaMusica(musica) {
    if (!musica) return versoPadrao;

    let versos = [];
    if (Array.isArray(musica.versos) && musica.versos.length > 0) {
        versos = musica.versos;
    } else if (typeof musica.verso === 'string' && musica.verso.trim() !== '') {
        versos = [musica.verso];
    }

    if (versos.length === 0) return versoPadrao;

    const escolhido = versos[Math.floor(Math.random() * versos.length)];
    const normalizado = normalizarVerso(escolhido);
    return normalizado || versoPadrao;
}

function definirVersos(musicaId, versosArray) {
    const musica = musicasDisponiveis.find(m => m.id === musicaId);
    if (musica && Array.isArray(versosArray) && versosArray.length > 0) {
        musica.versos = versosArray.map(normalizarVerso).filter(v => v !== '');
        if (modoJogo === 'verso' && musicaDoDia?.id === musicaId) {
            atualizarExibicaoMusica();
        }
    }
}

function adicionarVerso(musicaId, versoTexto) {
    const musica = musicasDisponiveis.find(m => m.id === musicaId);
    if (!musica) return;

    const versoNormalizado = normalizarVerso(versoTexto);
    if (!versoNormalizado) return;

    if (!Array.isArray(musica.versos)) {
        musica.versos = [];
    }

    if (!musica.versos.includes(versoNormalizado)) {
        musica.versos.push(versoNormalizado);
    }

    if (modoJogo === 'verso' && musicaDoDia?.id === musicaId) {
        atualizarExibicaoMusica();
    }
}

function carregarVersosIniciais() {
    const versosPorNome = {
        'Santuário Malevolente': [
            'Por que incomoda tanto sendo só um passatempo...?',
            'Sua existência é blasfêmia pra mim.',
            'Vai ter fogo na sua frente.'
        ],
        'Coração Sujo': [
            'Quem anda decompondo essa cidade...?',
            'Guerra, fome e miséria irão acabar.',
            'Uma lenda viva...'
        ],
        'Caminho da Espada': [
            'Por que ela não sai da minha cabeça?','Lutar com duas é diferente','Me mate, seu maldito monge'
        ],
        '9.9.9': [
            'Tentar me vencer, esse vai ser seu maior erro.',
            'Destrua a ____ _______... e cante a canção...',
            '...os poupou? Pois bem, mas não deveria.'
        ],
        'Murciélago': [
            'Mas me diga, esse foi todo seu poder...?','Como se fosse um oceano te esmagando...','Um coração? Ter um é seu defeito!'
        ],
        'Za Warudo': [
            'Vamos lutar, vai dar mais um passo?',
            'Uma luta decidida em segundos.',
            'O mundo não é seu, o mundo é meu.'
        ],
        'Morte e Redenção': [
            'E foi nesse céu vermelho...','Não sei se tenho tempo pra mais...','Nessa terra aqui não tem leis.'
        ],
        'Selvagem': [
            'Cês não entenderam? Essa é minha sina.','Palco da luta: cidade da justiça.','Veja minha transformação.'
        ],
        'V': [
            'Bota a Glock na minha mão e o tempo para.',
            'Isso é um assalto!','Já resolvo isso, espere um momento.'
        ],
        'Redenção': [
            'Mas no fundo eu sempre soube que meu fim não seria como todos sempre desejam...','Recepção americana é com balas, balas e mais balas...','Não se contrata um santo pra pegar o pecador, por isso demônios existem.'
        ],
        'InfinitØ': [
            'Tá desacordado, acordou desesperado.','Conhecendo isso tudo em só um segundo...','Antes de te matar, eu vou te ensinar isso...'
        ],
        'Demônio Controle': [
            'O sangue que escorre não é meu.','Cuidado onde pisa, pode ser armadilha pra acabar no fundo do poço.','Não é como se merecesse tanto viver.'
        ],
        'Impronunciável': [
            'Vamos lutar a sério? Aguentam até o sol nascer?','Só que quando o sol raiou, o meu corpo ardeu em chamas.','Perguntam por onde ele se esconde...'
        ],
        'Lado Negro': [
            'Deixe fluir seu ódio...','Mas pra mim não passa de uma aberração.','A galáxia toda escuta o suspirar...'
        ],
        'Doce Visão Do Futuro': [
            'Previsão em segundos...','Já chegou tua hora, que comece a batalha.','Mas eu já despertei, o ambiente dominei...'
        ],
        'Puro Amor': [
            'A cada toque, um lamento...','Em minha mão seu corpo, e agora tá morto...','Pois a ordem é dada: não se mova.'
        ],
        'Mundo De Ooo': [
            'Hora de aventura...','Proteger com coração valente.','Crescer, como a árvore de forte raiz deve ser...'
        ],
        'Humanidade': [
            'Qual que é minha arma?','Esse deus tá no meio.','Até onde a dança vai?'
        ],
        'Desejos Insanos': [
            'Desmembrem seu corpo, ela merecia mais!','Qualquer coisa pela mulher que amo...','Ela sempre volta!'
        ],
        'Braço Direito': [
            'Não vivo somente pelo meu sonho.','Você se tornará o rei e o mundo queimará.','Que tentem quebrar minha alma, minha ambição me manterá vivo.'
        ],
        'Corpo Morto': [
            'O que fará a essa altura? Se tá selado...','Essa batalha vai ser um saco, porque eu vou ter que pensar.','E eu o farei respirar de novo...'
        ],
        'Sol': [
            'Não era nada, subi na marra.','Subestimando o meu oponente, não, deixando as condições iguais.','É brilho demais para você?'
        ],
        'Deus da Destruição': [
            'Então dance até a morte!','Deixe o fogo te queimar, faremos um incêndio!','Contrariando tudo que existia...'
        ],
        'Deus': [
            'Aquele que virou um deus...','Infectando sua rede, não é hora de morfar!','Se todos me veneram, eu venci...'
        ],
        'Omnitrix': [
            'Por que se assustou? Viu um fantasma?','É pra isso que agora eu escolho...','E tem alguém que quer muito esse poder'
        ],
        'Espiral': [
            'Mas terei outro meio...','____ cumpriu seu dever. Salvou animal!','Você tá atrasado...'
        ],
        'Motor': [
            'Olhe nos meus olhos!','Rastro de fogo do pneu, que vai te mandar pro inferno...','Tá na hora de purificar uma alma!'
        ],
        'Por Um Fio': [
            'Haha, chegou um forte!','Demônio que nasceu no céu é demônio celestial.','Deleite hoje no inferno, com essa bala na cara!'
        ],
        'Lua Superior Quatro': [
            'Não gosta do que tô fazendo?','Pra que tanta gritaria?','Pra começar as percussões...'
        ],
        'Cirurgião da Morte': [
            'Desafiou... vai afundar.','Se ele vencer, vou ver com meus olhos.','Agora vivo, eu tenho uma determinação...'
        ],
        'Castelo Infinito': [
            'Então fique quieto, vou te observar, em um mundo todo transparente.','Boa mentalidade, não esperava menos de um descendente meu.','Respira e concentra... A lua brilha mais.'
        ],
        'Ambição': [
            'Se liga, esse é o jeito certo agora.','Nunca viu Deus na sua frente?','Você me decepciona, esperava mais de você!'
        ],
        'Deus da Extravagância': [
            'Eu fui escolhido? Não brinca comigo.','Aumenta o som.','Se forma a orquestra perfeita dando fim à sua vida.'
        ],
        'Maravilha de U': [
            'Prepara, vai começar uma história de terror.','Maravilhas acontecem aonde eu vou.','Não é o meu fim, pois não tem fim... uma história de terror.'
        ],
        'Lua Superior Dois': [
            'Você é encantadora...','E não adianta correr, pois não vou deixar pra depois.','E é sob o brilho da lua, que aparece uma criatura...'
        ],
        'Do Meu Jeito': [
            'Se não se comportar direito, no inferno vai passear.','Nós somos tão perfeitos juntos...','Vai ter dentinho quebrado, vampiro empalo na estaca.'
        ],
        'China': [
            'Opa, com licença, acho que ouvi me chamar...','Mas quando abro fica claro o tamanho da sua dor.','Me perdoar, isso possível é? Mas entendi que posso viver do jeito que eu quiser.'
        ],
        'Máscara': [
            'Quem é esse homem, tão lindo e bonitão?','Primeiramente, não tente entender alguma coisa.','Vamos voltar para o estágio normal, a partir de agora serei um honrado guerreiro.'
        ],
        'Iluminação': [
            'É zero papo, zero tudo, cê tá falando demais.','Aprende a se amar.','Convenhamos que, porr@, esse mundo é todo meu.'
        ],
        'Energia': [
            'É um metal bem legal, combina perfeitamente a mim.','Deve ser por causa desse meu mantra...','Adorem à ele, pois garanto que você não vai querer enfrentar...'
        ],
        'Poder': [
            'Devorando Saiyajin, eu tô jogando Pac Man.','Imagina se um deus fosse lutar.','Subjugar criaturas em busca de mais o que?'
        ],
        'Abutre': [
            'Por isso que eu mantenho os olhos sempre abertos.','Ritual de ódio, eu cansei de ser fraco.','Essa criatura eu nunca tinha visto! Então me expliquem, deem seu jeito!'
        ],
        'Olhos Azuis': [
            'O poder ainda flui... Eu invoco o...', 'Efeitos que afetam monstros? Mas não o meu! Não é um monstro, ele é um deus!','Te ensinarei o passo pra vingar o seu avô; primeiro, deixe de ser um perdedor.'
        ],
        'Moscas': [
            'Do canto mais escuro do inferno...','Então já pode avisar que eu saí dos meus aposentos','Mas como eu previ, cê não consegue.'
        ],
        'Faminto': [
            'O que eu sou?','Enojado com o sabor que comi por toda minha vida','Por favor, me mate logo, é isso, eu desisto!'
        ],
        'Portões da Babilônia': [
            'O arqueiro ataca onde dói.','Seria uma derrota se eu te levasse a sério','...cachorro descontrolado. Somente por olhar pra mim, agora será eliminado.'
        ],
        'Quarteto Monstro': [
            'Filho de quem?','Eu vou te salvar, mesmo sendo proibido.','Pelo seu bando vão além...'
        ],
        'Fim da Humanidade': [
            'Trouxe a guerra pra sua casa.','Piso na sua casa, olha só como dói','Preciso avançar mais!'
        ],
        'Seus Dados': [
            'Mais suerte da próxima vez!','Não tô sozinho, então mantenha longe','Eu conto contigo pra ganhar esse jogo.'
        ],
        'Deus da Espada': [
            'Nunca desistiu dessa arte, então por quê eu vou desistir?','Isso foi meio imprudente, não?','Ops, ele é rápido de verdade!'
        ],
        'SEGA 6.6.6': [
            'Olha mais perto da tela.','E agora, não dá pra voltar.','Ele não para de rir de ti...'
        ],
        'Pecado do Orgulho': [
            'Pra alguém tá no topo, tem que ter poder.','Tão cruel é o sol desse orgulhoso.','Peça perdão só por nascer no mesmo mundo que o meu.'
        ],
        'Ruína dos Deuses': [
            'Carrego em minha pele, as suas cinzas...','Pela minha vingança vivo!','Sangue se espalha na terra.'
        ],
        'Amaldiçoados': [
            'Dividi por zero e pus à minha volta.','Na sala branca, pétalas tão rubras...','Você não disse que eu não iria dar trabalho?'
        ],
        'Infinito': [
            'Eu quero ver cê me tocar.','Eu pego tudo o que eu fiz e te boto pra viajar.','Tem algo muito errado com esse cara...'
        ],
        'Punk Gibson!': [
            'A culpa não é minha se tu chama a atenção toda.','Eu sou feito de ferro, porr@.','Da pior geração, eu sou o pior!'
        ],
        'Egoísta': [
            'Deixa comigo que eu vou decidir esse resultado.','Um impulso me chama e sozinho meu corpo se move.','Mas a sorte me deixou no pior momento possível.'
        ],
        'Ju$tiça': [
            'Quero em dólares.','Maldade ou justiça.','Deixe isso comigo, cortesia da casa!'
        ],
        '100 Feras': [
            'Que barulho é esse? Um tambor por todo o país...','Quando o dragão respirar, as calamidades todas vão chegar.','Mas não chegava nem perto de quem eu já enfrentaria...'
        ],
        'Vilão do Cenário': [
            'Hoje vai ter muito sangue','Prefiro morrer com honra','Devoro os otários'
        ],
        'Bastard Munchen': [
            'Hoje eu faço magia do zero absoluto','Fracos não tolero, esse é meu critério','Serei a terra e você o sol'
        ],
        'Ciência!!': [
            'Admito, você é bom. Mas e se eu te confundir na velocidade do som?','Nesse lugar, o deus sou eu','Se difere do que eu esperava, mas será um objeto de estudo meu'
        ],
        'Terror em Londres': [
            'Foram personalizadas à personalidade','Deus, você perdeu seu braço','Me permita o deleite de apreciar seu terror'
        ],
        'Mágico Assassino': [
            'A destruição e o caos sempre flertou comigo','Te poupei pelo talento, mas pra evolução tá lento, chegou sua hora de morrer','Pra eu estar de volta, só existe uma razão'
        ],
        'Ódio': [
            'O que vai fazer se a lua no céu você for encontrar?','Você nunca mandaria em mim, mulher','Caçador, você é tão fraco, que chega a ser deprimente'
        ],
        'Arte': [
            'Tamanha concentração nunca pude alcançar','O gosto que vem da plebe não é bom, não','Sangue, medo, destruição, isso tudo faz parte'
        ],
        '7 Cores de Morte': [
            'Vai respirar?','Besta, é tão louco seu jeito de ser','Um arco-íris ao norte'
        ],
        'Rei dos Piratas': [
            'Se isso for por um amigo, eu faço do mundo meu inimigo','Eu não preciso entender os seus motivos','Eu não ligo se você acha que é um monstro'
        ],
        'Alma': [
            'Numa sala de cinema, veja o que encontraram','Perfeição, domino','Humano... feiticeiro, qual é sua razão?'
        ],
        'Alma Vazia': [
            'Talvez eu de fato, seja um verdadeiro monstro','Invencível não é só uma palavra.','Não importa o que eu tenho a perder, se eu te matar'
        ],
        'Why so Serious': [
            'É só olhar pra carta!','Vamo lá, cês não querem se matar se me matar','Ponha um sorriso na cara'
        ],
        'Sua Agonia': [
            'Pra pedir qualquer ajuda, agora é muito tarde','Que sentimento misto','A roupa me prendeu, mas a morte o mal libertou'
        ],
        'Face do Desespero': [
            'O vazio em meu peito, como o mundo que eu vivi','Por que pelas suas mortes lamenta? O destino deles não tem diferença','Se eu rasgar seu peito, eu verei?'
        ],
        'BERSERK': [
            'Se não quer viver, se mata','Não deixe eu me cegar','Mais sangue! Mais sangue!'
        ],
        'Hipnose Perfeita': [
            'Se minha alma deseja, então que assim seja','Saiba que vocês eu nunca enganei','Pra alguém que é imortal, o que são 20 mil anos?'
        ],
        'Feridas e Sangue': [
            'Sigo adiante','Não existe uma saída, eu já estou marcado','Vocês, inúteis, só vão me atrasar'
        ],
        'Saúdem o Rei': [
            'Primeira vez que senti dor, primeira vez que senti fome','E hoje eu ouço o povo gritar...','É natural eu enfrentar os inimigos de Deus'
        ],
        'Sacrifício': [
            'Eu luto por sonhar','Por minha ambição, eu me sacrifico','Se você tocar em mim, eu nunca vou te perdoar!'
        ],
        'Corpo Perfeito': [
            'Você deu tudo de si, e no final foi ridículo','Eu sou o príncipe','Achava que um contra-ataque desses seria incrível?'
        ],
        'Berserk': [
            'Seguirei sozinho','Não aguenta nem um soco? Que pena','Que cena horrível, isso é demais até pra mim!'
        ],
        'Pétalas de Sakura': [
            'Eu não sabia o que fazer','Família acima de tudo','A lei acima de tudo'
        ],
        'Ergam-se': [
            'Se essa é minha chance, eu vou','Precisa de um ____ forte? Não, eu serei invencível','Então vamos brincar, formiga'
        ],
        'Monarca das Sombras': [
            'Bom, agora só faltam quatro','Pergunta direto para ele no inferno, que tal?','No final, nós vimos quem que era o fraco'
        ],
        'Sol e Lua': [
            'Primeira que ouvi sua voz, mas ela me irrita','Por toda eternidade o oposto de você','Por que raios eu nasci? Me diga!'
        ],
        'Deus da Lua': [
            'Sua existência não tem lógica, por que veio a nascer?','Eternamente, o oposto','O caminho que trilhei não importa'
        ],
        'Águas Passadas': [
            'Se resmungar fosse o bastante, sua família estaria a salvo','Não pela minha vida, por nós vou lutar','Não zombe da minha amiga'
        ],
        'Intocável': [
            'Não vai mexer nem um músculo','Esse cara é muito estranho','Você é fraco, desculpa dizer'
        ],
        'Sol Da Noite': [
            'Nem sempre pude ver a luz do sol daqui','Mas naquele dia demorei demais...','Que triste, irmão, sua vida'
        ],
        'Luar de Sangue': [
            'Saiba, nós não somos iguais','Sinto tanto medo às vezes','E isso me enoja!'
        ],
        'A Nova Era': [
            'É muita pompa e muita bala pra quem me enfrentar no lance','Você é a única pessoa que eu nunca chamarei de filho','Mas eu me enganei, você é só um garoto'
        ],
        'DISStaque': [
            'Você se acha melhor do que eu?','Deixa que eu te explico o problema','Tudo bem, eu entendi, no final tudo faz sentido'
        ],
        'Gear 5': [
            'Olha o que você fez','Eu jurei que não vou mais fugir','Dor aqui não terá mais'
        ],
        'Boo!': [
            'Me matar? Sou imortal!','Espero que não se arrependam, porque agora vai começar o caos','Para de gritar pra eu parar'
        ],
        'Akaza VS. Tanjiro e Tomioka': [
            'Que desperdício de poder','Você é bem forte, wow, cara!','O seu jeito de pensar, moleque, é imperdoável!'
        ],
        '2 Mundos': [
            'Nem um, nem outro','Nem me reconheço','Que cara engraçada essa que tá fazendo'
        ],
        'Zangetsu': [
            'Você que a devia ter salvo!','Tem alguém em meu lugar','Queria ser Deus? Mas que patético esse Deus'
        ],
        'Perdi Tudo': [
            'Salvos? Eu acho que não!','Eu sei por que eu caminho','O garoto nasceu da morte, e dela consegue fugir'
        ],
        'Rei das Maldições': [
            'Você é forte, legal, mas ainda tô sem poder','Contemple a minha expansão, fatiar tudo que existir','Parece que o controle agora tá comigo'
        ],
        'Raios e Trovões': [
            'Eu treinei até quase cair, de forma intensa e brutal','Eu sempre fui bem melhor que você','Ah não, você queria que eu sentisse culpa?'
        ],
        'Katen Kyokotsu': [
            'Tudo isso ao mesmo tempo, e tudo muito mal contado','Surtada, sádica, e malvada, ela é complicada','Bem triste, pois só um de nós irá sair com vida'
        ],
        'Incrível': [
            'Irmão, cê não me reconhece?','Não estou mais sozinho? Isso me deixa enjoado...','Acho que achei um brinquedo novo.'
        ],
        'Impecável': [
            'Se entrou no intervalo, tô me retirando...','Pra jogar com macaco asiático que não tem um terço do meu talento','No Real, tiene una alteza...'
        ],
        'METAVISÃO': [
            'Isso tudo é uma guerra pelo trono.','Não olha, não pensa, a bola só me passa.','Sua novela refaço, não gostei muito dela.'
        ],
        'Mira do Caçador': [
            'Não posso respirar, como irei lutar?','Cuidado com a noite, ela traz criaturas.','O que vão contemplar agora pode ser algo novo.'
        ],
        'Deslize da Serpente': [
            'Seu pulmão explodirá se cê se mover mais um pouco',
            'Então deslizo como uma cobra deslizaria...',
            'Sua doença é ser tão fraco'
        ],
        'A Rota do Imperador': [
            'Parece que tudo tá perdido... E desde quando isso importa?',
            'Quem eu sou, você não sabe, é?',
            'Nunca existiu um trono, trono é onde eu quero me sentar'
        ],
        'Potencial Infinito': [
            'De repente o clima ficou tenso, é que a rainha apareceu',
            '1 chance em 239, mas eu sou sortudo demais',
            'Expansões de domínio, ao mesmo tempo tem 3'
        ],
        'Impronunciável': [
            'Enquanto um estiver vivo, o outro, sobreviver não é capaz',
            'Quem que das trevas é o lorde?',
            '...é um nome dado por um trouxa, eu preciso de algo que remeta à morte'
        ],
        'Rokushiki': [
            'Meros piratas que pensam estar acima da lei',
            'Perde a linha, porque missão dada, é missão cumprida',
            'Eu devo ser mais forte, mais forte que a justiça'
        ],
        'O Lado Negro da Força': [
            'Sigo o caminho que sua mente limitada não pode',
            'Eu escureci',
            'Sua falta de fé é perturbadora'
        ],
        'Avanço': [
            'Avance mais',
            'Um ataque devastador, e uma defesa impenetrável',
            'Eu imploro que me mate de uma forma devastadora, isso claro caso por um milagre você não morra'
        ],
        'Bater de Palmas': [
            'Com personalidade forte, entendo... Péssima resposta!',
            'Até lutando você é muito chato',
            'Farei uma pergunta, e dependendo da resposta, posso te matar'
        ],
        'Corte': [
            'Mas que talento, tão insano!',
            'No final só vai se tocar que ele não passa de um palhaço',
            'Minha fórmula pra vencer!'
        ],
        'Maldição do Amor': [
            'Seu corpo esmagado, bem na minha frente',
            'Por que é tão forte? Porque isso é amor',
            'Feche os olhos, garotinha, vai ser violento demais'
        ],
        'Meu Ego': [
            'Me movendo tão lentamente, desse jeito, como eu vou alcançar?',
            'Ainda quero mais!',
            'Lembra, perder é morrer, se morrer já era'
        ],
        'Egoísta': [
            'Isso não vai servir de nada, se nada no fim eu mudar',
            'Um gênio desperta, a derrota tá perto',
            'Fomos humilhados demais, pude ver minha derrota'
        ],
        'Eu Sempre Volto': [
            'Essa face, reconhece?',
            'Começou as piores noites da sua vida',
            'Droga, é a maldita vontade de matar!'
        ],
        'Estranhagedon': [
            'Um mundo tão plano, com mentes planas e sonhos planos',
            'Por se entediar com tudo aquilo que estava ao seu redor, resolveu libertar sua dimensão, transformando ela em pó',
            'E tem olhos, em todo lugar. A te seguir, observar.'
        ],
        'Lâmina da Escuridão': [
            'O equilibrio é a maestria dos tolos',
            'A morte cê nem vê, só me verá sumir',
            'Não negue à mim!'
        ],
        'Mundo Transparente': [
            'Saiba, humanos não são páreos pra demônios',
            'Façam com que minha morte tenha significado',
            'Beber do seu sangue, não sofrer nunca mais...'
        ],
        'Perfeição|Kaito': [
            'Vejo o seu medo...',
            'Largue essa ideia idiota!',
            'Tentem não me atrapalhar demais'
        ],
        'Destruição': [
            'Entende como isso é lindo?',
            'Eu posso até morrer aqui, mas não me importo nem um pouco!',
            'Lembro que sempre admirei a forma em que um vilão...'
        ],
        'Escuridão': [
            'É que seu herói abraçou a escuridão',
            'Se eu desistir, quem vai me salvar?',
            'Ainda me ponho em seu lugar, quero mudar você, mas você não quer mudar...'
        ],
        'Circo': [
            'Seu merda, vai morrer, ninguém zoa o meu nariz',
            'Então fica ligado, o mar não é lugar pra palhaçada',
            'Olha só, repara, meu corpo separa'
        ],
        'Arco-Íris': [
            'Vamos parar também, que draminha mais exagerado',
            'Acho que cê tem razão, porque eu simplesmente não ligo',
            'Eu queria brincar com vocês, mas eu não tô com tempo'
        ],
        'Calmaria': [
            'Pra que eu sobreviva, quantos mais terão que morrer?',
            'Nesse grande mar perdido, em devaneios...',
            'Eu irei partir a escuridão'
        ],
        'Gênio': [
            'Quer se vingar? Tenta mais um pouco',
            'Queria consolação? Ah, não',
            'De mano pra mano, num mano a mano'
        ],
        'Aranha': [
            'Um grande achado em meio a pilhas...',
            'O sol e a lua se encontraram, acho que cê não vai gostar...',
            'Sangue se paga com mais sangue'
        ],
        'Pancadão': [
            'Note que o tempo parou enquanto eu quebro sua cara',
            'Depois dessa surra, vai ter que mudar de rosto',
            'É JoJo que fala?'
        ],
        'Novo Herói': [
            'Mas no que o que eu conquistei me ajuda?',
            'Olha só o que deu em mim...',
            'Eu abdiquei de todo meu ego aguardando esse momento'
        ],
        'Assassino sem Rosto': [
            'Confesso que senti uma leve culpinha',
            'Apenas faço o que todos querem fazer',
            'Até tentei evitar, mas agora vou ter que sujar minhas mãos'
        ],
        'New Gen': [
            'Fica louco pra mim, dá seu ego pra mim',
            'Como prever algo que é tão estranho?',
            'Se eu me senti melhor? Sim, muito melhor'
        ],
        'Imperador': [
            'Seu macaco de merda, só me passa a bola',
            'Juro, eu achei esse roteiro péssimo',
            'Tô curioso, me mostre todo seu ego'
        ],
        'Plano Perfeito': [
            'Você já disse a verdade alguma vez na sua vida?','Eu sou melhor que você, gênio insignificante','Vai, tenta me achar, mas não me encontra'
        ],
        'AMOR': [
            'Se eu falo, cê trava','Isso faz parte','Quem foi que falou?'
        ],
        'Eletricidade': [
            'Cês tão na minha mão','Somente ele vai testemunhar esse poder','Eu já conheci o amor'
        ],
        'O Mais Forte': [
            'Eu tô com pressa, tá de brincadeira?','Eu tenho certeza, eu vou vencer','Isso só pode ser brincadeira!'
        ],
        'OVER-DOSE': [
            'Tá lento demais','Não faça isso em casa','Odeio usar essa merda'
        ],
        'Parceria Formada': [
            'É um cara de poucas palavras','Eu sei disso, seu esquisito!','Esse AniRap não erra uma!'
        ],
        'Tribunal': [
            'Acabaram os argumentos','Técnica confiscada','Não vou dar outra chance de novo'
        ],
        'Rei absoluto': [
            'A resposta é porque...','Meu orgulho não deixa','Sai da minha frente, cê não se tocou?'
        ],
        'Inveja': [
            'Uma sensação nova em mim se desperta','O que que você tem de mais?','Tal como o mais belo anjo que cai'
        ],
        'Ego morto': [
            'Perder é uma merda','Mas é tão morno','Mal cheguei, mas sinceramente, eu queria ir embora'
        ],
        'ABSOLUTA DESTRUIÇÃO': [
            'Se vai agilizar o meu tempo...','Esse cara ficou maluco!','Ele não quer sair da minha mente'
        ],
        'Morto-Rico': [
            'Disse o pobre','Toda vez que cê sorri me irrita','Se pá valeu 100 milhões'
        ],
        'Lixo': [
            'Se eu cair, cês vão cair também','Mas escutem bem','São todos iguais, lá em cima e aqui embaixo'
        ],
        'O Melhor': [
            'Então tecnicamente, cês são animais de circo','Juro, até me arrepiei','Cê tá tentando ser eu?'
        ],
        'Olhos vendados': [
            'Me chamam de debochado','Otário, sentenciei','Tic, tac, boom!'
        ],
        'Dançarino': [
            'E ainda dizem que o ___ é melhor que eu...','Ah, irmão, pra quê que tu foi se meter','Deveria, mas não vou ensinar ninguém a jogar'
        ]
    };

    // Atribui versos às músicas com chave artista específica (nome|artista),
    // com fallback para nome puro se não encontrar um match de artista.
    musicasDisponiveis.forEach(musica => {
        const nomeKey = musica.nome.toLowerCase();
        const artistaKey = musica.artista.toLowerCase();
        const keyFull = `${nomeKey}|${artistaKey}`;

        let versos = versosPorNome[keyFull] || versosPorNome[nomeKey];

        if (!versos && Array.isArray(versosPorNome[musica.nome])) {
            // Suporte a chave texual literal com case mix
            versos = versosPorNome[musica.nome];
        }

        if (!versos && versosPorNome[musica.nome.toLocaleLowerCase()]) {
            versos = versosPorNome[musica.nome.toLocaleLowerCase()];
        }

        if (Array.isArray(versos) && versos.length > 0) {
            musica.versos = versos.map(normalizarVerso).filter(v => v !== '');
        }
    });
}

function atualizarExibicaoMusica() {
    const info = document.getElementById('musicInfoText');
    const verse = document.getElementById('verseClue');

    if (modoJogo === 'verso') {
        info.textContent = 'Adivinhe a música pelo verso abaixo';
        verse.textContent = obterVersoDaMusica(musicaDoDia);
        verse.classList.remove('hidden');
    } else {
        info.textContent = 'Adivinhe a música pelos seus chutes!';
        verse.classList.add('hidden');
    }
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
    artistaRevelado = false;
    
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
    document.getElementById('artistaRevealed').classList.add('hidden');
    document.getElementById('unlockObraBtn').classList.add('hidden');
    document.getElementById('unlockPersonagemBtn').classList.add('hidden');
    document.getElementById('unlockArtistaBtn').classList.add('hidden');
    document.getElementById('giveUpBtn').classList.add('hidden');
    
    atualizarTabelaTentativas();
    atualizarExibicaoMusica();
    
    console.log('🎯 Modo Desafio iniciado! Música:', musicaDoDia.nome);
}

// ============================================
// FUNÇÃO: Abrir modal de seleção ao carregar
// ============================================
function mostrarModalSelecao() {
    document.getElementById('modeSelectionModal').classList.remove('hidden');
    document.getElementById('musicSelectorModal').classList.add('hidden');
    document.getElementById('suggestionsList').classList.add('hidden');
    document.getElementById('feedback').className = 'feedback hidden';
    document.getElementById('verseClue').classList.add('hidden');
}

function abrirSeletorDeModo() {
    console.log('Abrindo seletor de modo');
    mostrarModalSelecao();
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
    artistaRevelado = false;
    
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
    document.getElementById('artistaRevealed').classList.add('hidden');
    document.getElementById('unlockObraBtn').classList.add('hidden');
    document.getElementById('unlockPersonagemBtn').classList.add('hidden');
    document.getElementById('unlockArtistaBtn').classList.add('hidden');
    document.getElementById('giveUpBtn').classList.add('hidden');
    
    atualizarTabelaTentativas();
    atualizarExibicaoMusica();
    
    console.log('🎮 Jogo iniciado! Música:', musicaDoDia.nome);
}

// ============================================
// FUNÇÃO: Atualizar botões de dicas desbloqueáveis
// ============================================
function atualizarBotoesDesbloqueio() {
    const errosTotais = tentativas.filter(t => t.musicaId !== musicaDoDia?.id).length; // Contabiliza apenas erros
    const temErros = errosTotais > 0;

    if (!temErros) {
        return;
    }

    document.getElementById('hintsUnlock').classList.remove('hidden');

    if (errosTotais >= 3) {
        document.getElementById('unlockArtistaBtn').classList.remove('hidden');
    }

    if (errosTotais >= 5) {
        document.getElementById('unlockObraBtn').classList.remove('hidden');
    }

    if (errosTotais >= 10) {
        document.getElementById('unlockPersonagemBtn').classList.remove('hidden');
    }

    if (errosTotais >= 12) {
        document.getElementById('giveUpBtn').classList.remove('hidden');
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
function revelarArtista() {
    if (artistaRevelado) return;
    
    artistaRevelado = true;
    document.getElementById('artistaText').textContent = musicaDoDia.artista;
    document.getElementById('artistaRevealed').classList.remove('hidden');
    document.getElementById('revealedHints').classList.remove('hidden');
}

function revelarPersonagem() {
    if (personagemRevelado) return;
    
    personagemRevelado = true;
    document.getElementById('personagemText').textContent = musicaDoDia.personagem;
    document.getElementById('personagemRevealed').classList.remove('hidden');
    document.getElementById('revealedHints').classList.remove('hidden');
}

function revelarMusica() {
    if (!musicaDoDia || jogoGanho) return;

    jogoGanho = true;
    document.getElementById('guessInput').disabled = true;
    document.getElementById('guessBtn').disabled = true;
    document.getElementById('newGameBtn').classList.remove('hidden');

    mostrarFeedback(`⛔ Desistiu! A música é "${musicaDoDia.nome}" - ${musicaDoDia.artista}.`, 'info');
    document.getElementById('giveUpBtn').classList.add('hidden');
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
            // Se a música do dia tem esse nome, aceita o nome simples
            if (musicaDoDia && musicaDoDia.nome.toLowerCase() === palpite) {
                musicaChutada = musicaDoDia;
            } else {
                // Se há múltiplas músicas com o mesmo nome, mostra erro pedindo que especifique o artista
                mostrarFeedback('❌ Existem várias músicas com esse nome. Use o formato "Nome - Artista"!', 'error');
                return;
            }
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

    if (modoJogo === 'verso') {
        // Modo verso: mostra apenas lista de chutes sem dicas detalhadas
        table.innerHTML = tentativas.slice().reverse().map((tentativa, index) => {
            const acertou = tentativa.musicaId === musicaDoDia.id;
            const numeroChute = tentativas.length - index;
            return `
                <div class="attempt-row ${acertou ? 'correct' : 'incorrect'}">
                    <div class="attempt-row-title">Chute ${numeroChute}: ${tentativa.nome} - ${tentativa.artista} ${acertou ? '✅' : '❌'}</div>
                </div>
            `;
        }).join('');
        return;
    }

    // Modo aleatório/desafio tradicional: mostra comparações detalhadas
    table.innerHTML = tentativas.slice().reverse().map((tentativa, index) => {
        const todosCorretos = Object.values(tentativa.comparacoes).every(c => c.correto);
        const numeroChute = tentativas.length - index;
        
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
    if (modoJogo === 'aleatorio' || modoJogo === 'verso') {
        if (modoJogo === 'aleatorio') {
            musicaDoDia = obterMusicaAleatoria();
        } else if (modoJogo === 'verso') {
            musicaDoDia = obterMusicaAleatoria();
        }

        tentativas = [];
        jogoGanho = false;
        obraRevelada = false;
        personagemRevelado = false;
        artistaRevelado = false;
        
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
        document.getElementById('artistaRevealed').classList.add('hidden');
        document.getElementById('unlockObraBtn').classList.add('hidden');
        document.getElementById('unlockPersonagemBtn').classList.add('hidden');
        document.getElementById('unlockArtistaBtn').classList.add('hidden');
        
        atualizarTabelaTentativas();
        atualizarExibicaoMusica();
    } else {
        // No modo desafio, volta ao seletor
        mostrarModalSelecao();
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Configura versos iniciais (modo verso)
    carregarVersosIniciais();

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

