var playlist = new Object({
  ['Tay-k']: 'The Race'
})
//nondestructively update obj playlist with artistName and songTitle
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},
  playlist, {'Phil Ochs': 'Here\'s to the State of Mississippi' })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist['Phil Ochs']
  return playlist
}