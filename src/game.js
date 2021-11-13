const params = new URLSearchParams(window.location.search)

if (localStorage.getItem('trapped_game_sound') == null) {
  localStorage.setItem('trapped_game_sound', true)
}

let Game = {
  width: 320,
  height: 480,
  scenes: null,
  permission: false,
  input: params.get('input') === 'mouse' ? 'mouse' : 'touch',
  timestamp: 0,
  hits: [],
  shapes: [],
  skip_intro: localStorage.getItem('trapped_game_intro') === 'true' ? true : false,
  sound: localStorage.getItem('trapped_game_sound') === 'true' ? true : false,
  song: null,
  bug: null,
  over: false,
  godmode: params.get('godmode') ? true : false,
  debug: params.get('debug') ? true : false
}

let intro_vid, sound, r_black, r_regular

let endScene = () => {
  Game.hits = []
  Game.shapes = []
  Game.timestamp = millis()
  Game.scenes.scene.oScene.reset()
  Game.scenes.showNextScene()
}

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
  soundFormats('ogg', 'mp3')

  r_black = loadFont('./assets/Roboto-Black.ttf')
  r_regular = loadFont('./assets/Roboto-Regular.ttf')

  theme = loadSound('./assets/theme')
  dead = loadSound('./assets/dead')
  home = loadSound('./assets/home')
  messages = loadSound('./assets/messages')

  if (!Game.skip_intro) {
    intro_vid = loadImage('assets/fly.gif')
  }
}

function setup() {
  if (Game.debug) {
    document.querySelector('html').classList.add('debug')
    document.body.insertAdjacentHTML('afterBegin', '<div id="debug"></div>')
    document.getElementById('debug')
  }

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
  Game.scenes.addScene(Intro)
  Game.scenes.addScene(Title)
  Game.scenes.addScene(Home)
  Game.scenes.addScene(Text)

  // Start this party
  createCanvas(Game.width, Game.height)
  Game.bug = new Bug(Game.width / 2, Game.height / 2 + 32)
  Game.song.playMode('restart')
  Game.scenes.showScene(Intro)
}

function draw() {
  if (!Game.permission) return

  // Handle Device rotation inputs
  if (Game.input === 'touch') {
    rX = (rotationY * 7.5 * -1) + (width / 2)
    rY = (rotationX * 15 * -1) + (height / 2)
    Game.bug.update(
      constrain(rX, 0, Game.width),
      constrain(rY, 0, Game.height)
    )
  }

  // Handle mouse inputs
  if (Game.input === 'mouse') {
    Game.bug.update(
      constrain(mouseX, 0, Game.width),
      constrain(mouseY, 0, Game.height)
    )
  }

  // If there's collision…
  if (!Game.godmode) {
    Game.hits.forEach((hit) => {
      if (Game.over) return

      if (hit) {
        Game.timestamp = millis()
        Game.over = true
        Game.song.stop()
        Game.song = dead
        Game.song.setVolume(1)
        Game.song.play()
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

    if (millis() - Game.timestamp > 2000) {
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

  if (Game.debug) {
    document.getElementById('debug').innerHTML = `
      Frames: ${int(frameRate())} <br>
      ${Game.input === 'touch' ? 'Rotation: ' + int(rX) + ', ' + int(rY) : ''}
      ${Game.input === 'mouse' ? 'Mouse: ' + int(mouseX) + ', ' + int(mouseY) : ''} <br>
      Shapes: ${Game.shapes.length}
    `
  }
}

function mouseClicked() {
  Game.scenes.handleEvent('mouseClicked')
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

function doubleClicked() {
  if (Game.input === 'mouse') endScene()
}
