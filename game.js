let Game = {
  width: 320,
  height: 480,
  scenes: null,
  timestamp: 0,
  hits: [],
  shapes: [],
  over: false,
}

let bug

let ellapsed = (min, max) => {
  const el = millis() - Game.timestamp
  return el > min && el < (max || 999999)
}

let endScene = () => {
  Game.hits = []
  Game.shapes = []
  Game.timestamp = millis()
  Game.scenes.showNextScene()
}

function preload() {

}

function setup() {
  createCanvas(Game.width, Game.height)

  Game.scenes = new SceneManager()

  Game.scenes.addScene(Title)
  Game.scenes.addScene(Home)
  Game.scenes.addScene(Text)
  Game.scenes.addScene(Twitter)

  bug = new Bug(Game.width / 2, Game.height / 2)

  Game.scenes.showScene(Title)
}

function draw() {
  background(0)
  Game.scenes.draw()

  bug.draw()
  bug.update(mouseX, mouseY)

  if (Game.over) {
    Game.shapes.forEach((s) => {
      s[0].vel.add(s[0].acc)
      s[0].pos.add(s[0].vel)
    })
  }

  Game.hits.forEach((h) => {
    if (h) Game.over = true
  })
}

function doubleClicked() {
  Game.scenes.handleEvent('doubleClicked')
  bug.reacting = true
  endScene()
}
