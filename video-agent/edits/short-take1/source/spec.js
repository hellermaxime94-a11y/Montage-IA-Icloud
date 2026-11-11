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
    // public-domain photos (Openverse, CC0 / PDM), cropped to 9:16: see assets/images/CREDITS.json
    ecole: { src: 'assets/images/ecole.jpg', width: 1080 }, travail: { src: 'assets/images/travail.jpg', width: 1080 },
    cartes: { src: 'assets/images/cartes.jpg', width: 1080 }, luxe: { src: 'assets/images/luxe.jpg', width: 1080 },
    etudes: { src: 'assets/images/etudes.jpg', width: 1080 },
    // the creator's own images (rounded card on a blurred background, or full frame on black)
    digitalLaptop: { src: 'assets/images/digital-laptop.jpg', width: 1080 }, ebooks: { src: 'assets/images/ebooks.jpg', width: 1080 },
    vizion: { src: 'assets/images/vizion.jpg', width: 1080 }, marketingDigital: { src: 'assets/images/marketing-digital.jpg', width: 1080 },
    guide: { src: 'assets/images/guide.jpg', width: 1080 },
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
    [6.05, 1, 400], [9.0, 1.06], [14.2, 1.14], [16.1, 1.2, 400], // W one sentence, no cut: ease in, "anormal" punch
    [17.753, 1, 400], [19.2, 1.06],                               // W (cut)
    [21.0, 1.12, 400],                                            // T
    [26.602, 1, 400], [28.6, 1.06],                               // W (cut, after card 2)
    [31.8, 1.12, 400], [34.7, 1.2, 400],                          // T "réfléchir" punch
    [35.6, 1, 400], [38.0, 1.06],                                 // W "bien évidemment"
    [43.17, 1.12, 400],                                           // T (cut), card 3
    [45.55, 1.1, 400],                                            // T ("riche" is a photo)
    [48.286, 1, 400], [49.3, 1.06],                               // W (cut)
    [50.3, 1.12, 400], [51.3, 1.2], [53.9, 1.1],                  // T "accompagnement" ease in, ease out
    [57.11, 1, 400],                                              // W (cut), card 4
    [61.4, 1.12, 400],                                            // T
    [64.308, 1, 400], [66.0, 1.06],                               // W (cut)
    [67.65, 1.12, 400], [71.6, 1.2, 400], [74.1, 1.1],            // T "revenu" punch, ease out
    [77.95, 1.12, 400], [78.9, 1.2],                              // T sign-off, ease in on "prochaine"
  ] },

  broll: [
    { media: 'carton1', from: 3.50, to: 6.05, zoom: 0, hard: true },
    { media: 'carton2', from: 23.75, to: 26.5, zoom: 0, hard: true },
    { media: 'carton3', from: 43.30, to: 45.55, zoom: 0, hard: true },
    { media: 'carton4', from: 58.45, to: 61.40, zoom: 0, hard: true },
    { media: 'carton5', from: 75.75, to: 77.90, zoom: 0, hard: true },
    // photos on the words they illustrate (captions stay on top), slow push, hard cut in and out
    { media: 'ecole', from: 10.35, to: 11.40, zoom: .06, hard: true },
    { media: 'travail', from: 11.40, to: 12.75, zoom: .06, hard: true },
    { media: 'digitalLaptop', from: 28.00, to: 29.50, zoom: .05, hard: true },
    { media: 'cartes', from: 33.30, to: 34.50, zoom: .06, hard: true },
    { media: 'ebooks', from: 39.90, to: 41.60, zoom: .05, hard: true },
    { media: 'luxe', from: 46.00, to: 47.30, zoom: .06, hard: true },
    { media: 'vizion', from: 50.50, to: 52.40, zoom: .04, hard: true },
    { media: 'marketingDigital', from: 65.70, to: 66.90, zoom: .05, hard: true },
    { media: 'guide', from: 68.31, to: 69.95, zoom: .04, hard: true },
    { media: 'etudes', from: 72.90, to: 74.00, zoom: .06, hard: true },
  ],

  actors: [],
  scenes: [],

  music: { mute: true },   // the creator adds a TikTok sound on the app

  // engine sounds: [t, name, LINEAR gain] (not dB). Files: gain in dB under the voice. Sounds rotate so no two moves
  // in a row sound the same; assets/sfx/ holds a small pack synthesized for this style (whooshes, swipe, riser,
  // shutter, soft boom, bubble).
  sfx: {
    swish: 0, accents: 0,
    extra: [
      [17.753, 'tom', 0.78], [64.308, 'tom', 0.78], [43.17, 'tom', 0.78],              // cuts (with the files below)
      [19.2, 'swish', 0.29],                                                      // smooth zoom
      [16.1, 'thud', 0.65], [71.6, 'thud', 0.65],                                    // punches
      [16.17, 'pop', 0.23], [51.37, 'pop', 0.23], [71.70, 'pop', 0.23],             // big caption words
      [4.40, 'thud', 0.65], [4.40, 'pop', 0.23], [25.31, 'thud', 0.65], [25.31, 'pop', 0.23],   // violet words
      [43.71, 'thud', 0.65], [43.71, 'pop', 0.23], [60.71, 'thud', 0.65], [60.71, 'pop', 0.23],
    ],
    files: [
      // hook + last card
      { at: 1.25, src: 'assets/sfx/impact-boom.mp3', peak: true, gain: -2 },
      { at: 77.17, src: 'assets/sfx/impact-boom.mp3', peak: true, gain: -2 },
      // cards in
      { at: 3.50, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -3 }, { at: 23.75, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -4 },
      { at: 43.30, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -4 }, { at: 58.45, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -4 },
      { at: 75.75, src: 'assets/sfx/zhhh.mp3', peak: true, gain: -3 },
      // cuts
      { at: 26.602, src: 'assets/sfx/boom-soft.mp3', peak: true, gain: -1 }, { at: 48.286, src: 'assets/sfx/boom-soft.mp3', peak: true, gain: -1 },
      { at: 57.11, src: 'assets/sfx/swipe.mp3', peak: true, gain: -2 },
      // smooth zooms in / out
      { at: 2.2, src: 'assets/sfx/whoosh-out.mp3', peak: true, gain: -2 },
      { at: 9.0, src: 'assets/sfx/whoosh-air.mp3', peak: true, gain: -3 },
      { endAt: 16.1, src: 'assets/sfx/riser-short.mp3', gain: -5 },
      { at: 38.0, src: 'assets/sfx/whoosh-low.mp3', peak: true, gain: -1 },
      { at: 49.3, src: 'assets/sfx/whoosh-air.mp3', peak: true, gain: -3 },
      { at: 53.9, src: 'assets/sfx/whoosh-out.mp3', peak: true, gain: -2 },
      { at: 74.1, src: 'assets/sfx/whoosh-out.mp3', peak: true, gain: -2 },
      { endAt: 79.0, src: 'assets/sfx/riser-short.mp3', gain: -4 },
      // punch on "réfléchir"
      { at: 34.7, src: 'assets/sfx/boom-soft.mp3', peak: true, gain: -0 },
      // photos in: rotate shutter / swipe / whoosh
      { at: 10.35, src: 'assets/sfx/shutter.mp3', peak: true, gain: -1 }, { at: 11.40, src: 'assets/sfx/swipe.mp3', peak: true, gain: -2 },
      { at: 28.00, src: 'assets/sfx/whoosh-air.mp3', peak: true, gain: -3 },
      { at: 33.30, src: 'assets/sfx/swipe.mp3', peak: true, gain: -2 }, { at: 39.90, src: 'assets/sfx/shutter.mp3', peak: true, gain: -1 },
      { at: 46.00, src: 'assets/sfx/whoosh-low.mp3', peak: true, gain: -1 }, { at: 50.50, src: 'assets/sfx/swipe.mp3', peak: true, gain: -2 },
      { at: 65.70, src: 'assets/sfx/shutter.mp3', peak: true, gain: -1 }, { at: 72.90, src: 'assets/sfx/whoosh-air.mp3', peak: true, gain: -3 },
      { at: 68.31, src: 'assets/sfx/whoosh-low.mp3', peak: true, gain: -1 },
      // big caption words, second voice
      { at: 19.27, src: 'assets/sfx/bubble.mp3', peak: true, gain: -3 }, { at: 46.49, src: 'assets/sfx/bubble.mp3', peak: true, gain: -3 },
      { at: 66.93, src: 'assets/sfx/bubble.mp3', peak: true, gain: -3 }, { at: 79.00, src: 'assets/sfx/bubble.mp3', peak: true, gain: -3 },
    ],
  },
  // voiceFilter: dynaudnorm lifts the words said softly ("bien évidemment") to the level of the rest
  mix: { sfx: -15, voiceFilter: 'dynaudnorm=f=200:g=11:p=0.9:m=8' },

  captions: {
    replace: [],
    emph: ['ennemis', 'anormal.', 'secourisme,', 'BAFA,', 'réfléchir.', 'riche', 'accompagnement', 'MRR.', 'revenu', 'prochaine.'],
    // caption position follows the sentence mode: up top on WIDE sentences, on the chest on TIGHT ones.
    // TikTok safe box: y 220 to 1400 (the chest line sits at 1340 + 300 px per 1x of zoom, so 1400 at zoom 1.2).
    yKeys: [[0, 1340], [6.05, 520], [17.753, 520], [21.0, 1340], [26.602, 520], [31.8, 1340], [35.6, 520],
            [43.17, 1340], [48.286, 520], [50.3, 1340], [57.11, 520], [61.4, 1340], [64.308, 520], [67.65, 1340], [77.95, 1340]],
    hide: [[65.70, 66.90], [3.50, 6.05], [23.75, 26.5], [43.30, 45.55], [58.45, 61.40], [75.75, 77.90]],
  },
};
