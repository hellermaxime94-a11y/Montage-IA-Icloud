// Short: "Pour lancer un business, tu dois investir". All times are SOURCE seconds (files/words.md).
// Style: maxime (Mon guide de montage). Full camera all along, hard cuts, 5 typographic cards (alternating dark/light),
// 5 light violet words = the card payoffs only. Captions: small Inter words, one big key word (white) per sentence.
// Beats: hook 0-3.5 tight (zoom 1.15) "ennemis" big -> carton1 INVESTIR (3.5-6.95) -> examples formation/secourisme
// -> carton2 PAYER (23.75-26.5) -> "pourquoi pas en ligne?" -> carton3 INTELLIGEMMENT (43.3-45.55) -> competences
// -> carton4 PERSONNE (58.45-61.4) -> MRR story -> carton5 COMMENTAIRE (75.75-77.9) -> sign-off.
window.SPEC = {
  title: 'Pour lancer un business, tu dois investir',
  media: {
    carton1: { src: 'assets/carton1.mp4', width: 1080 },
    carton2: { src: 'assets/carton2.mp4', width: 1080 },
    carton3: { src: 'assets/carton3.mp4', width: 1080 },
    carton4: { src: 'assets/carton4.mp4', width: 1080 },
    carton5: { src: 'assets/carton5.mp4', width: 1080 },
  },
  cam: { crop: [0, 0, 720, 1280], eyes: [349, 767] },
  cut: [[0.033, 0.373], [0.489, 0.568], [7.096, 7.213], [10.585, 10.71], [11.6, 11.904], [13.639, 13.714], [15.159, 15.263], [20.214, 20.255], [20.763, 20.797], [21.158, 21.407], [31.337, 31.806], [34.016, 34.055], [38.211, 38.258], [39.736, 39.772], [47.979, 48.35], [50.179, 50.433], [60.774, 61.047], [63.312, 63.997], [72.072, 72.416], [73.214, 73.428], [75.885, 76.015], [77.532, 77.628], [79.905, 80.35]],   // remaining pauses > 0.1 s (measured on the voice), each trimmed to <= 0.1 s

  layout: { keys: [[0, 0]] },
  // punch-in alternated on the sentence cuts (wide 1 / tight 1.1), the hook tight
  zoom: { keys: [[0, 1.15], [7.0, 1, 400], [11.4, 1.1, 400], [17.8, 1, 400], [21.0, 1.1, 400], [26.55, 1, 400],
                 [31.8, 1.1, 400], [35.6, 1, 400], [47.85, 1.1, 400], [50.3, 1, 400], [57.1, 1.1, 400],
                 [64.35, 1, 400], [67.65, 1.1, 400], [77.9, 1, 400]] },

  broll: [
    { media: 'carton1', from: 3.50, to: 6.95, zoom: 0, hard: true },
    { media: 'carton2', from: 23.75, to: 26.5, zoom: 0, hard: true },
    { media: 'carton3', from: 43.30, to: 45.55, zoom: 0, hard: true },
    { media: 'carton4', from: 58.45, to: 61.40, zoom: 0, hard: true },
    { media: 'carton5', from: 75.75, to: 77.90, zoom: 0, hard: true },
  ],

  actors: [],
  scenes: [],

  music: { mute: true },   // the creator adds a TikTok sound on the app
  sfx: { swish: 0, accents: 0, extra: [[4.40, 'pop', -4], [25.31, 'pop', -4], [43.62, 'pop', -4], [60.71, 'pop', -4], [77.05, 'pop', -4]] },

  captions: {
    replace: [],
    emph: ['ennemis', 'anormal.', 'secourisme,', 'BAFA,', 'réfléchir.', 'riche', 'accompagnement', 'MRR.', 'revenu', 'prochaine.'],
    hide: [[3.50, 6.95], [23.75, 26.5], [43.30, 45.55], [58.45, 61.40], [75.75, 77.90]],
  },
};
