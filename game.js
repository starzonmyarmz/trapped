const params = new URLSearchParams(window.location.search)

let Game = {
  width: 320,
  height: 480,
  scenes: null,
  permission: false,
  input: params.get('input') === 'mouse' ? 'mouse' : 'touch',
  timestamp: 0,
  hits: [],
  shapes: [],
  bug: null,
  over: false,
  sound: false,
  title_active: false,
  debug: params.get('debug') ? true : false
}

let hammer, sound, r_black, r_regular

let ellapsed = (min, max) => {
  const el = millis() - Game.timestamp
  return el > min && el < (max || 999999)
}

let endScene = () => {
  Game.hits = []
  Game.shapes = []
  Game.title_active = false
  Game.timestamp = millis()
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
  soundFormats('mp3', 'ogg');

  r_black = loadFont('./assets/Roboto-Black.ttf')
  r_regular = loadFont('./assets/Roboto-Regular.ttf')
  sound = loadSound('./assets/theme')
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
      .catch(() => {
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

  // Add scenes to p5.scenemanager
  Game.scenes = new SceneManager()
  Game.scenes.addScene(Intro)
  Game.scenes.addScene(Title)
  Game.scenes.addScene(Home)
  Game.scenes.addScene(Text)
  Game.scenes.addScene(Twitter)

  // Set up touch events with hammer.js
  hammer = new Hammer(document.body, { preventDefault: true })
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  })
  hammer.on('swipe', swiped)

  // Start this party
  createCanvas(Game.width, Game.height)
  Game.bug = new Bug(Game.width / 2, Game.height / 2)
  Game.scenes.showScene(Intro)
}

function draw() {
  if (!Game.permission) return

  if (!Game.sound) {
    sound.setVolume(0)
  } else {
    sound.setVolume(0.77)
  }

  // Handle Device rotation inputs
  if (Game.input === 'touch') {
    rX = (rotationY * 7.5) + (width / 2)
    rY = (rotationX * 15) + (height / 2)
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
  Game.hits.forEach((h) => {
    if (h) Game.over = true
  })

  // …then the game is over
  if (Game.over) {
    Game.shapes.forEach((shape) => {
      shape.velocity += shape.acceleration
      shape.x += shape.velocity
      shape.y += shape.velocity
    })
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

function touchStarted() {
  Game.scenes.handleEvent("touchStarted")
}

function touchMoved() {
  Game.scenes.handleEvent("touchMoved")
}

function touchEnded() {
  Game.scenes.handleEvent("touchEnded")
}

function swiped(event) {
  if (event.direction == 2) {

  }

  if (event.direction == 4) {
    if (Game.title_active) endScene()
  }
}

function doubleClicked() {
  if (Game.input === 'mouse') endScene()
}
