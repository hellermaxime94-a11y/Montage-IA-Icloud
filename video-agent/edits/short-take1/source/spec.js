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
    marketingDigital: { src: 'assets/images/marketing-digital.jpg', width: 1080 },
  },
  cam: { crop: [0, 0, 720, 1280], eyes: [349, 767] },

  // silence handling: nothing is cut automatically (hold the whole take), only the 8 pauses over 0.5 s
  // (measured on the audio at -40 dB) are shortened to 0.2 s, so no spoken word is ever clipped.
  hold: [[0.5, 81.2]],
  cut: [[0, 0.5], [5.112, 5.809], [17.116, 17.753], [26.057, 26.602], [42.373, 43.17], [47.944, 48.286], [56.447, 57.11], [63.409, 64.308], [79.963, 81.006]],
  speed: 1,

  layout: { keys: [[0, 0]] },
  zoom: { keys: [
    [0.0, 1.12], [1.58, 1.2, 400], [2.39, 1.08],                    // T hook: punch on "ennemis", ease out
    [6.05, 1, 400], [9.51, 1.06], [14.73, 1.14], [16.53, 1.2, 400], // W one sentence, no cut: ease in, "anormal" punch
    [17.753, 1, 400], [19.52, 1.06],                               // W (cut)
    [21.48, 1.12, 400],                                            // T
    [26.602, 1, 400], [28.67, 1.06],                               // W (cut, after card 2)
    [31.82, 1.12, 400], [35.06, 1.2, 400],                          // T "réfléchir" punch
    [35.62, 1, 400], [38.25, 1.06],                                 // W "bien évidemment"
    [43.17, 1.12, 400],                                           // T (cut), card 3
    [46.07, 1.1, 400],                                            // T ("riche" is a photo)
    [48.286, 1, 400], [49.56, 1.06],                               // W (cut)
    [50.53, 1.12, 400], [51.68, 1.2], [53.88, 1.1],                  // T "accompagnement" ease in, ease out
    [57.11, 1, 400],                                              // W (cut), card 4
    [61.15, 1.12, 400],                                            // T
    [64.308, 1, 400], [66.0, 1.06],                               // W (cut)
    [67.68, 1.12, 400], [70.81, 1.2, 400], [74.26, 1.1],            // T "revenu" punch, ease out
    [78.53, 1.12, 400], [79.39, 1.2],                              // T sign-off, ease in on "prochaine"
  ] },

  broll: [
    { media: 'carton1', from: 3.77, to: 6.05, zoom: 0, hard: true },
    { media: 'carton2', from: 23.93, to: 26.83, zoom: 0, hard: true },
    { media: 'carton3', from: 43.25, to: 46.07, zoom: 0, hard: true },
    { media: 'carton4', from: 58.41, to: 61.15, zoom: 0, hard: true },
    { media: 'carton5', from: 76.03, to: 78.49, zoom: 0, hard: true },
    // photos on the words they illustrate (captions stay on top), slow push, hard cut in and out
    { media: 'ecole', from: 10.84, to: 11.89, zoom: .06, hard: true },
    { media: 'travail', from: 11.89, to: 13.31, zoom: .06, hard: true },
    { media: 'digitalLaptop', from: 28.0, to: 29.51, zoom: .05, hard: true },
    { media: 'cartes', from: 33.09, to: 34.84, zoom: .06, hard: true },
    { media: 'ebooks', from: 41.01, to: 42.02, zoom: .05, hard: true },
    { media: 'luxe', from: 46.71, to: 47.83, zoom: .06, hard: true },
    { media: 'marketingDigital', from: 65.52, to: 66.93, zoom: .05, hard: true },
    { media: 'etudes', from: 72.32, to: 74.12, zoom: .06, hard: true },
  ],

  actors: [],
  scenes: [],

  music: { mute: true },   // the creator adds a TikTok sound on the app

  // Only the two sounds of the creator references: airy swooshes (a, b, c, short, down) on zooms, cuts, cards and photos,
  // and mouth pops (a, b, c, big) on the key words. Never the same sound twice in a row.
  sfx: {
    swish: 0, accents: 0,
    files: [
      { at: 1.58, src: 'assets/sfx/pop-big.mp3', peak: true, gain: -3 },
      { at: 2.39, src: 'assets/sfx/swoosh-down.mp3', peak: true, gain: -6 },
      { at: 3.77, src: 'assets/sfx/swoosh-a.mp3', peak: true, gain: -5 },
      { at: 4.89, src: 'assets/sfx/pop-b.mp3', peak: true, gain: -3 },
      { at: 6.05, src: 'assets/sfx/swoosh-short.mp3', peak: true, gain: -6 },
      { at: 9.51, src: 'assets/sfx/swoosh-b.mp3', peak: true, gain: -6 },
      { at: 11.89, src: 'assets/sfx/swoosh-short.mp3', peak: true, gain: -6 },
      { at: 14.73, src: 'assets/sfx/swoosh-a.mp3', peak: true, gain: -6 },
      { at: 16.53, src: 'assets/sfx/pop-c.mp3', peak: true, gain: -3 },
      { at: 19.52, src: 'assets/sfx/swoosh-b.mp3', peak: true, gain: -6 },
      { at: 19.73, src: 'assets/sfx/pop-a.mp3', peak: true, gain: -5 },
      { at: 23.93, src: 'assets/sfx/swoosh-c.mp3', peak: true, gain: -5 },
      { at: 25.83, src: 'assets/sfx/pop-big.mp3', peak: true, gain: -3 },
      { at: 26.602, src: 'assets/sfx/swoosh-short.mp3', peak: true, gain: -6 },
      { at: 33.09, src: 'assets/sfx/swoosh-b.mp3', peak: true, gain: -6 },
      { at: 35.06, src: 'assets/sfx/pop-c.mp3', peak: true, gain: -3 },
      { at: 38.25, src: 'assets/sfx/swoosh-c.mp3', peak: true, gain: -6 },
      { at: 43.25, src: 'assets/sfx/swoosh-a.mp3', peak: true, gain: -5 },
      { at: 44.11, src: 'assets/sfx/pop-b.mp3', peak: true, gain: -3 },
      { at: 46.07, src: 'assets/sfx/swoosh-short.mp3', peak: true, gain: -6 },
      { at: 47.15, src: 'assets/sfx/pop-a.mp3', peak: true, gain: -4 },
      { at: 48.286, src: 'assets/sfx/swoosh-short.mp3', peak: true, gain: -6 },
      { at: 49.56, src: 'assets/sfx/swoosh-b.mp3', peak: true, gain: -6 },
      { at: 51.81, src: 'assets/sfx/pop-c.mp3', peak: true, gain: -4 },
      { at: 53.88, src: 'assets/sfx/swoosh-down.mp3', peak: true, gain: -6 },
      { at: 58.41, src: 'assets/sfx/swoosh-c.mp3', peak: true, gain: -5 },
      { at: 60.63, src: 'assets/sfx/pop-big.mp3', peak: true, gain: -3 },
      { at: 61.15, src: 'assets/sfx/swoosh-short.mp3', peak: true, gain: -6 },
      { at: 67.03, src: 'assets/sfx/pop-a.mp3', peak: true, gain: -4 },
      { at: 70.81, src: 'assets/sfx/pop-b.mp3', peak: true, gain: -3 },
      { at: 72.32, src: 'assets/sfx/swoosh-a.mp3', peak: true, gain: -6 },
      { at: 74.26, src: 'assets/sfx/swoosh-down.mp3', peak: true, gain: -6 },
      { at: 76.03, src: 'assets/sfx/swoosh-b.mp3', peak: true, gain: -5 },
      { at: 77.97, src: 'assets/sfx/pop-big.mp3', peak: true, gain: -3 },
      { at: 78.53, src: 'assets/sfx/swoosh-short.mp3', peak: true, gain: -6 },
      { at: 79.39, src: 'assets/sfx/swoosh-c.mp3', peak: true, gain: -6 },
      { at: 79.73, src: 'assets/sfx/pop-c.mp3', peak: true, gain: -4 },
    ],
  },
  // voiceFilter: dynaudnorm lifts the words said softly ("bien évidemment") to the level of the rest
  mix: { sfx: -15, voiceFilter: 'dynaudnorm=f=200:g=11:p=0.9:m=8' },

  captions: {
    replace: [],
    emph: ['ennemis', 'anormal.', 'secourisme,', 'BAFA,', 'réfléchir.', 'riche', 'accompagnement', 'MRR.', 'revenu', 'prochaine.'],
    accent: ['ennemis', 'riche', 'revenu'],            // violet + white outline (like the creator's coloured key words)
    serif: ['réfléchir', 'accompagnement', 'prochaine'], // Instrument Serif italic with a white glow
    // caption position follows the sentence mode: up top on WIDE sentences, on the chest on TIGHT ones.
    // TikTok safe box: y 220 to 1400 (the chest line sits at 1340 + 300 px per 1x of zoom, so 1400 at zoom 1.2).
    yKeys: [[0.0, 1340], [6.05, 520], [17.753, 520], [21.48, 1340], [26.602, 520], [31.82, 1340], [35.62, 520],
            [43.17, 1340], [48.286, 520], [50.53, 1340], [57.11, 520], [61.15, 1340], [64.308, 520], [67.68, 1340], [78.53, 1340]],
    hide: [[65.52, 66.93], [3.77, 6.05], [23.93, 26.83], [43.25, 46.07], [58.41, 61.15], [76.03, 78.49]],
  },
};
