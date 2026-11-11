// Short: "Pour lancer un business, tu dois investir". All times are SOURCE seconds (files/words.md).
// Style: maxime (Mon guide de montage). Full camera, speed 1x, hard cuts, 5 typographic cards (alternating dark/light),
// 5 light-violet words = the card payoffs only. Each card shows every word spoken while it is on screen.
//
// Rhythm: each sentence is either WIDE (zoom ~1, captions up top above the head) or TIGHT (zoom 1.12+, captions on the
// chest). Every cut lands on an instant zoom change (the jump cut becomes a punch) with a low tom; inside a sentence,
// smooth zoom-ins / zoom-outs carry a swish, key words get an instant punch to 1.2 with a thud.
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
  // (measured on the audio at -40 dB) are shortened to 0.2 s, so no spoken word is ever clipped.
  hold: [[0, 81.2]],
  cut: [[5.112, 5.809], [17.116, 17.753], [26.057, 26.602], [42.373, 43.17], [47.944, 48.286], [56.447, 57.11], [63.409, 64.308], [79.963, 81.006]],
  speed: 1,

  layout: { keys: [[0, 0]] },
  zoom: { keys: [
    [0, 1.12], [1.25, 1.2, 400], [2.2, 1.08],                    // T hook: punch on "ennemis", ease out
    [6.05, 1, 400], [9.0, 1.06],                                  // W
    [11.4, 1.12, 400], [14.2, 1.18], [16.1, 1.2, 400],            // T "formation" ease in, "anormal" punch
    [17.753, 1, 400], [19.2, 1.06],                               // W (cut)
    [21.0, 1.12, 400],                                            // T
    [26.602, 1, 400], [28.6, 1.06],                               // W (cut, after card 2)
    [31.8, 1.12, 400], [34.7, 1.2, 400],                          // T "réfléchir" punch
    [35.6, 1, 400], [38.0, 1.06],                                 // W "bien évidemment"
    [43.17, 1.12, 400],                                           // T (cut), card 3
    [45.55, 1.1, 400], [46.4, 1.2, 400],                          // T "riche" punch
    [48.286, 1, 400], [49.3, 1.06],                               // W (cut)
    [50.3, 1.12, 400], [51.3, 1.2], [53.9, 1.1],                  // T "accompagnement" ease in, ease out
    [57.11, 1, 400],                                              // W (cut), card 4
    [61.4, 1.12, 400],                                            // T
    [64.308, 1, 400], [66.0, 1.06],                               // W (cut)
    [67.65, 1.12, 400], [71.6, 1.2, 400], [73.2, 1.1],            // T "revenu" punch, ease out
    [77.95, 1.12, 400], [78.9, 1.2],                              // T sign-off, ease in on "prochaine"
  ] },

  broll: [
    { media: 'carton1', from: 3.50, to: 6.05, zoom: 0, hard: true },
    { media: 'carton2', from: 23.75, to: 26.5, zoom: 0, hard: true },
    { media: 'carton3', from: 43.30, to: 45.55, zoom: 0, hard: true },
    { media: 'carton4', from: 58.45, to: 61.40, zoom: 0, hard: true },
    { media: 'carton5', from: 75.75, to: 77.90, zoom: 0, hard: true },
  ],

  actors: [],
  scenes: [],

  music: { mute: true },   // the creator adds a TikTok sound on the app

  // engine sounds: [t, name, LINEAR gain] (not dB)
  sfx: {
    swish: 0, accents: 0,
    extra: [
      // cuts: low tom on the zoom change
      [17.753, 'tom', .5], [26.602, 'tom', .5], [43.17, 'tom', .5], [48.286, 'tom', .5], [57.11, 'tom', .5], [64.308, 'tom', .5],
      // smooth zoom-ins / zoom-outs: swish
      [2.2, 'swish', .16], [9.0, 'swish', .16], [14.2, 'swish', .16], [19.2, 'swish', .16], [28.6, 'swish', .16], [38.0, 'swish', .16],
      [49.3, 'swish', .16], [51.3, 'swish', .16], [53.9, 'swish', .16], [66.0, 'swish', .16], [73.2, 'swish', .16], [78.9, 'swish', .16],
      // punch-ins on key words: thud
      [16.1, 'thud', .4], [34.7, 'thud', .4], [46.4, 'thud', .4], [71.6, 'thud', .4],
      // big white caption words: pop
      [16.17, 'pop', .14], [19.27, 'pop', .14], [23.93, 'pop', .14], [46.49, 'pop', .14], [51.37, 'pop', .14],
      [66.93, 'pop', .14], [71.70, 'pop', .14], [79.00, 'pop', .14],
      // violet words on the cards: thud + pop
      [4.40, 'thud', .45], [4.40, 'pop', .16], [25.31, 'thud', .45], [25.31, 'pop', .16], [43.71, 'thud', .45], [43.71, 'pop', .16],
      [60.71, 'thud', .45], [60.71, 'pop', .16],
    ],
    files: [
      { at: 1.25, src: 'assets/sfx/impact-boom.mp3', peak: true, gain: -9 },
      { at: 3.50, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -8 },
      { at: 23.75, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -10 },
      { at: 43.30, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -10 },
      { at: 58.45, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -10 },
      { at: 75.75, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -8 },
      { at: 77.17, src: 'assets/sfx/impact-boom.mp3', peak: true, gain: -8 },
    ],
  },
  // voiceFilter: dynaudnorm lifts the words said softly ("bien évidemment") to the level of the rest
  mix: { sfx: -19, voiceFilter: 'dynaudnorm=f=200:g=11:p=0.9:m=8' },

  captions: {
    replace: [],
    emph: ['ennemis', 'anormal.', 'secourisme,', 'BAFA,', 'réfléchir.', 'riche', 'accompagnement', 'MRR.', 'revenu', 'prochaine.'],
    // caption position follows the sentence mode: up top on WIDE sentences, on the chest on TIGHT ones.
    // TikTok safe box: y 220 to 1400 (the chest line sits at 1340 + 300 px per 1x of zoom, so 1400 at zoom 1.2).
    yKeys: [[0, 1340], [6.05, 520], [11.4, 1340], [17.753, 520], [21.0, 1340], [26.602, 520], [31.8, 1340], [35.6, 520],
            [43.17, 1340], [48.286, 520], [50.3, 1340], [57.11, 520], [61.4, 1340], [64.308, 520], [67.65, 1340], [77.95, 1340]],
    hide: [[3.50, 6.05], [23.75, 26.5], [43.30, 45.55], [58.45, 61.40], [75.75, 77.90]],
  },
};
