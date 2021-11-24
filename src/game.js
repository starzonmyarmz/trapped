const params = new URLSearchParams(window.location.search)

if (localStorage.getItem('trapped_game_intro') == null) {
  localStorage.setItem('trapped_game_intro', false)
}

if (localStorage.getItem('trapped_game_sound') == null) {
  localStorage.setItem('trapped_game_sound', true)
}

let Game = {
  width: 320,
  height: 480,
  scenes: null,
  permission: false,
  timestamp: 0,
  hits: [],
  shapes: [],
  skip_intro: localStorage.getItem('trapped_game_intro') === 'true' ? true : false,
  sound: localStorage.getItem('trapped_game_sound') === 'true' ? true : false,
  song: null,
  bug: null,
  over: false,
  godmode: params.get('godmode') ? true : false,
}

// Levels classes
const levels = {
  Intro, Title,
  HomeMessages, Messages,
  HomeTwitter, Twitter, HomeMusic, Music,
  HomeMaps, Maps, HomeSnap, Snap,
  Outro
}

// Globals
let text_bold, text_regular, dummy, intro, theme, dead, home, messages, twitter, music, maps, snap, finale, outro

const requestAccess = () => {
  DeviceMotionEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        Game.permission = true
        document.getElementById('permission').hidden = Game.permission
      } else {
        Game.permission = false
      }
    })
    .catch(console.error)
}

function preload() {
  angleMode(DEGREES)
  soundFormats('mp3')

  // Load fonts
  text_bold = loadFont('./assets/Outfit-ExtraBold.ttf')
  text_regular = loadFont('./assets/Outfit-Light.ttf')

  // Load music
  dummy = loadSound('./assets/dummy')
  theme = loadSound('./assets/theme')
  dead = loadSound('./assets/dead')
  home_twitter = loadSound('./assets/home_twitter')
  home_messages = loadSound('./assets/home_messages')
  home_music = loadSound('./assets/home_music')
  home_maps = loadSound('./assets/home_maps')
  home_snap = loadSound('./assets/home_maps')
  messages = loadSound('./assets/messages')
  twitter = loadSound('./assets/twitter')
  music = loadSound('./assets/music')
  maps = loadSound('./assets/maps')
  snap = loadSound('./assets/snap')
  finale = loadSound('./assets/finale')

  // Load video
  if (!Game.skip_intro) {
    intro = createVideo('./assets/intro.mov')
    intro.elt.setAttribute('playsinline', true)
    intro.elt.hidden = true
  }

  outro = createVideo('./assets/outro.mov')
  outro.elt.setAttribute('playsinline', true)
  outro.elt.hidden = true
}

function setup() {
  // Check for DeviceMotionEvent and Permissions
  if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function' ) {
    DeviceMotionEvent.requestPermission()
      .catch((error) => {
        document.getElementById('permission').hidden = false
        let button = document.getElementById('request')
        button.addEventListener('click', requestAccess)
        throw error
      })
      .then(() => {
        Game.permission = true
        document.getElementById('permission').hidden = Game.permission
      })
  } else {
    Game.permission = true
  }

  // Add scenes to p5.sceneManager
  Game.scenes = new SceneManager()
  for (level in levels) {
    Game.scenes.addScene(levels[level])
  }

  // Start this party
  createCanvas(Game.width, Game.height)
  Game.bug = new Bug(Game.width / 2, Game.height / 2)
  Game.scenes.showScene(Intro)
}

function draw() {
  if (!Game.permission) return

  // Handle Device rotation inputs
  vX = constrain(rotationY, -60, 60)
  vY = constrain(rotationX, -60, 60)
  vX = constrain(abs(vX) - 2, 0, 60) * (vX < 0 ? -1 : 1)
  vY = constrain(abs(vY) - 2, 0, 60) * (vY < 0 ? -1 : 1)
  Game.bug.update(vX / 3, vY / 3)

  // If there's collision…
  if (!Game.godmode) {
    Game.hits.forEach((hit) => {
      if (Game.over) return

      if (hit) {
        Game.timestamp = millis()
        Game.over = true

        if (Game.sound) {
          Game.song.stop()
          Game.song = dead
          Game.song.setVolume(1)
          Game.song.play()
        }
      }
    })
  }

  // …then the game is over
  if (Game.over) {
    Game.shapes.forEach((shape) => {
      shape.q = []
      shape.velocity_x += shape.acceleration_x
      shape.velocity_y += shape.acceleration_y
      shape.x += shape.velocity_x
      shape.y += shape.velocity_y
    })

    // Back to home screen after a short delay
    if (millis() - Game.timestamp > 2500) {
      Game.hits = []
      Game.shapes = []
      Game.over = false
      Game.timestamp = millis()
      Game.scenes.scene.oScene.reset()
      Game.scenes.showScene(Title)
    }
  }

  // Draw all the things
  Game.scenes.draw()
  Game.bug.draw()
}

function touchStarted() {
  Game.scenes.handleEvent('touchStarted')
}

function touchMoved() {
  Game.scenes.handleEvent('touchMoved')
}

function touchEnded() {
  Game.scenes.handleEvent('touchEnded')
}
