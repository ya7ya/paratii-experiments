'use strict'

console.log('PARATII EXPERIMENTS')

const Clappr = require('clappr')

const vid = new Clappr.Player({
  // source: 'https://gateway.paratii.video/ipfs/QmNZS5J3LS1tMEVEP3tz3jyd2LXUEjkYJHyWSuwUvHDaRJ', // original mp4
  source: 'https://gateway.paratii.video/ipfs/QmQvhvzMXKX71jLGjSfM9iKiWVKETXDmkPaQXhe4WrMmZ9/master.m3u8', // transcoded multi-bitrate HLS
  parentId: '#player',
  mimeType: 'video/mp4',
  watermark: 'http://paratii.video/imagens/cropped-logo_colorido_horizontal.png',
  watermarkLink: 'http://paratii.video/'
})

function runExperiment (name, cb) {
  let metrics = {
    starttime: Date.now(),
    finishtime: 0,
    name: name
  }
}
