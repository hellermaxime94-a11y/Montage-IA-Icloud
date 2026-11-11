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
  // silence handling: nothing is cut automatically (hold the whole take), only the 8 pauses over 0.5 s
  // (measured on the audio at -40 dB) are shortened to 0.3 s, so no spoken word is ever clipped.
  hold: [[0, 81.2]],
  cut: [[5.162, 5.759], [17.166, 17.703], [26.107, 26.552], [42.423, 43.12], [47.994, 48.236], [56.497, 57.06], [63.459, 64.258], [80.013, 80.956]],
  speed: 1,

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
  // sound: one boom on the hook verdict and on the last card, a swoosh on each card entry, a thud + pop on each
  // violet word, a pop on each big white caption word. Louder than before (mix.sfx -19 LUFS, was -29.5).
  sfx: {
    swish: 0, accents: 0,
    extra: [
      [4.40, 'thud', 0], [4.40, 'pop', 0], [25.31, 'thud', 0], [25.31, 'pop', 0], [43.70, 'thud', 0], [43.70, 'pop', 0],
      [60.71, 'thud', 0], [60.71, 'pop', 0],
      [16.17, 'pop', -2], [19.27, 'pop', -2], [23.93, 'pop', -2], [34.79, 'pop', -2], [46.49, 'pop', -2],
      [51.37, 'pop', -2], [66.93, 'pop', -2], [71.70, 'pop', -2], [79.00, 'pop', -2],
    ],
    files: [
      { at: 1.29, src: 'assets/sfx/impact-boom.mp3', peak: true, gain: -9 },
      { at: 3.50, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -8 },
      { at: 23.75, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -10 },
      { at: 43.30, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -10 },
      { at: 58.45, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -10 },
      { at: 75.75, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -8 },
      { at: 77.05, src: 'assets/sfx/impact-boom.mp3', peak: true, gain: -8 },
    ],
  },
  mix: { sfx: -19 },

  captions: {
    replace: [],
    emph: ['ennemis', 'anormal.', 'secourisme,', 'BAFA,', 'réfléchir.', 'riche', 'accompagnement', 'MRR.', 'revenu', 'prochaine.'],
    // position alternates on the sentence cuts: up top (above the head) on the wide shots, on the chest on the tight ones.
    // TikTok safe box: y 220 to 1400, nothing under the right-hand buttons.
    yKeys: [[0, 1390], [7.0, 520], [11.4, 1390], [17.8, 520], [21.0, 1360], [26.55, 520], [31.8, 1390], [35.6, 520],
            [45.55, 1370], [50.3, 520], [57.1, 1390], [64.35, 520], [67.65, 1380], [77.9, 520]],
    hide: [[3.50, 6.95], [23.75, 26.5], [43.30, 45.55], [58.45, 61.40], [75.75, 77.90]],
  },
};
