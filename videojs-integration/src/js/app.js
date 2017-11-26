'use strict'

console.log('PARATII EXPERIMENTS')

const videojs = require('video.js')

//   // source: 'https://gateway.paratii.video/ipfs/QmNZS5J3LS1tMEVEP3tz3jyd2LXUEjkYJHyWSuwUvHDaRJ', // original mp4

const hlsVideojs = require('videojs-contrib-hls')
// const hlsVideojs = require('videojs-hlsjs')
// const vid = videojs('#player')
const vid = videojs('#player', {
  controls: true,
  height: 480,
  sources: [
    {
      src: 'https://gateway.paratii.video/ipfs/QmNZS5J3LS1tMEVEP3tz3jyd2LXUEjkYJHyWSuwUvHDaRJ', // original mp4
      type: 'video/mp4'
    },
    {
      src: 'https://gateway.paratii.video/ipfs/QmQvhvzMXKX71jLGjSfM9iKiWVKETXDmkPaQXhe4WrMmZ9/master.m3u8', // transcoded multi-bitrate HLS
      type: 'application/x-mpegURL',
      withCredentials: true

    }
  ]
}, () => {
  console.log('player ready')
})
