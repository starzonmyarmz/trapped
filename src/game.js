const params=new URLSearchParams(window.location.search);null==localStorage.getItem("trapped_game_intro")&&localStorage.setItem("trapped_game_intro",!1),null==localStorage.getItem("trapped_game_sound")&&localStorage.setItem("trapped_game_sound",!0);let roboto_black,roboto_regular,intro,theme,dead,home,messages,latin,Game={width:320,height:480,scenes:null,permission:!1,input:"mouse"===params.get("input")?"mouse":"touch",timestamp:0,hits:[],shapes:[],skip_intro:"true"===localStorage.getItem("trapped_game_intro"),sound:"true"===localStorage.getItem("trapped_game_sound"),song:null,bug:null,over:!1,godmode:!!params.get("godmode"),debug:!!params.get("debug")};const requestAccess=()=>{DeviceMotionEvent.requestPermission().then((e=>{"granted"==e?(Game.permission=!0,document.getElementById("permission").hidden=Game.permission):Game.permission=!1})).catch(console.error)};function preload(){angleMode(DEGREES),soundFormats("mp3"),roboto_black=loadFont("./assets/Roboto-Black.ttf"),roboto_regular=loadFont("./assets/Roboto-Regular.ttf"),intro=loadSound("./assets/intro"),theme=loadSound("./assets/theme"),dead=loadSound("./assets/dead"),home=loadSound("./assets/home"),messages=loadSound("./assets/messages"),latin=loadSound("./assets/latin"),fly=loadImage("./assets/fly.gif")}function setup(){Game.debug&&(document.querySelector("html").classList.add("debug"),document.body.insertAdjacentHTML("afterBegin",'<div id="debug"></div>'),document.getElementById("debug")),"undefined"!=typeof DeviceMotionEvent&&"function"==typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().catch((e=>{throw document.getElementById("permission").hidden=!1,document.getElementById("request").addEventListener("click",requestAccess),e})).then((()=>{Game.permission=!0,document.getElementById("permission").hidden=Game.permission})):Game.permission=!0,Game.scenes=new SceneManager,Game.scenes.addScene(Intro),Game.scenes.addScene(Title),Game.scenes.addScene(HomeMessages),Game.scenes.addScene(Messages),Game.scenes.addScene(HomeTwitter),Game.scenes.addScene(Twitter),Game.scenes.addScene(HomeMusic),Game.scenes.addScene(Music),Game.scenes.addScene(HomeMaps),Game.scenes.addScene(Maps),Game.scenes.addScene(HomeSnap),Game.scenes.addScene(Snap),createCanvas(Game.width,Game.height),Game.bug=new Bug(Game.width/2,Game.height/2),Game.scenes.showScene(Intro)}function draw(){Game.permission&&("touch"===Game.input&&(rX=7.5*rotationY*-1+width/2,rY=15*rotationX*-1+height/2,Game.bug.update(constrain(rX,0,Game.width),constrain(rY,0,Game.height))),"mouse"===Game.input&&Game.bug.update(constrain(mouseX,0,Game.width),constrain(mouseY,0,Game.height)),Game.godmode||Game.hits.forEach((e=>{Game.over||e&&(Game.timestamp=millis(),Game.over=!0,Game.sound&&(Game.song.stop(),Game.song=dead,Game.song.setVolume(1),Game.song.play()))})),Game.over&&(Game.shapes.forEach((e=>{e.q=[],e.velocity_x+=e.acceleration_x,e.velocity_y+=e.acceleration_y,e.x+=e.velocity_x,e.y+=e.velocity_y})),millis()-Game.timestamp>2e3&&(Game.hits=[],Game.shapes=[],Game.over=!1,Game.timestamp=millis(),Game.scenes.scene.oScene.reset(),Game.scenes.showScene(Title))),Game.scenes.draw(),Game.bug.draw(),Game.debug&&(document.getElementById("debug").innerHTML=`\n      Frames: ${int(frameRate())} <br>\n      ${"touch"===Game.input?"Rotation: "+int(rX)+", "+int(rY):""}\n      ${"mouse"===Game.input?"Mouse: "+int(mouseX)+", "+int(mouseY):""} <br>\n      Shapes: ${Game.shapes.length}\n    `))}function touchStarted(){Game.scenes.handleEvent("touchStarted")}function touchMoved(){Game.scenes.handleEvent("touchMoved")}function touchEnded(){Game.scenes.handleEvent("touchEnded")}
