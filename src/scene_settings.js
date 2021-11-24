document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('[data-sound]').classList.toggle('active', Game.sound)

  document.querySelector('[data-back]').addEventListener('click', () => {
    document.getElementById('settings').hidden = true
  })

  document.querySelector('[data-sound]').addEventListener('click', () => {
    Game.sound ? Game.song.pause() : Game.song.loop()
    Game.sound = !Game.sound
    localStorage.setItem('trapped_game_sound', Game.sound)
    document.querySelector('[data-sound]').classList.toggle('active', Game.sound)
  })

  document.querySelector('[data-intro]').addEventListener('click', () => {
    Game.skip_intro = false
    localStorage.setItem('trapped_game_intro', Game.skip_intro)
    location.reload()
  })

  document.querySelector('[data-progress]').addEventListener('click', ({target}) => {
    localStorage.removeItem('trapped_game_progress')
    target.innerText = "Progress reset!"
  })

  if (navigator.canShare) {
    document.querySelector('[data-share]').hidden = false
    document.querySelector('[data-share]').addEventListener('click', async () => {
      await navigator.share({
        title: document.querySelector('title'),
        text: document.querySelector('meta[name="description"]').content,
        url: 'https://iamdanielmarino.com'
      })
    })
  }
})
