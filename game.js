const params = new URLSearchParams(window.location.search)

let Game = {
  width: 320,
  height: 480,
  scenes: null,
  permission: false,
  input: 'mouse',
  timestamp: 0,
  hits: [],
  shapes: [],
  bug: null,
  over: false,
  title_active: false,
  debug: params.get('debug') ? true : false
}

let img, hammer

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
  img = loadImage('./fly.png')
}

function setup() {
  if (Game.debug) {
    document.querySelector('html').classList.add('debug')
    document.body.insertAdjacentHTML('afterBegin', '<div id="debug"></div>')
    document.getElementById('debug')
  }

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

  createCanvas(Game.width, Game.height)

  Game.scenes = new SceneManager()
  Game.scenes.addScene(Intro)
  Game.scenes.addScene(Title)
  Game.scenes.addScene(Home)
  Game.scenes.addScene(Text)
  Game.scenes.addScene(Twitter)

  Game.bug = new Bug(Game.width / 2, Game.height / 2)

  hammer = new Hammer(document.body, { preventDefault: true })
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  })
  hammer.on('swipe', swiped)

  Game.scenes.showScene(Intro)
}

function draw() {
  if (!Game.permission) return

  background(0)

  if (Game.input === 'touch') {
    rX = (rotationY * 7.5) + (width / 2)
    rY = (rotationX * 15) + (height / 2)
    Game.bug.update(rX, rY)
  }

  if (Game.input === 'mouse') {
    Game.bug.update(mouseX, mouseY)
  }

  if (Game.over) {
    Game.shapes.forEach((s) => {
      s[0].vel.add(s[0].acc)
      s[0].pos.add(s[0].vel)
    })
  }

  Game.hits.forEach((h) => {
    if (h) Game.over = true
  })

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

function swiped(event) {
  if (event.direction == 2) {

  }

  if (event.direction == 4) {
    if (Game.title_active) endScene()
  }
}


//           window.addEventListener( "devicemotion", (e) => {
//             document.getElementById('out').innerHTML = e
//             console.log(e)
//           })
