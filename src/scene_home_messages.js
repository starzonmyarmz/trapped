class HomeMessages extends Scene{constructor(){super(),this.reset()}draw(){background(255),this.song_started||(this.startSong(home),this.song_started=!0),Game.shapes=this.shapes,Game.shapes.forEach(((t,s)=>{t.update(),t.draw(),this.transition.alpha<5&&this.createCollision(t,s)})),this.transition_out.update(),this.transition_out.draw(),this.transition.update(),this.transition.draw(),this.transition.q.length||this.song_stopped||(this.endSong(),this.song_stopped=!0),null!=this.transition.current||this.transition.q.length||(this.saveProgress("Messages"),this.endScene())}reset(){this.song_started=!1,this.song_stopped=!1,this.shapes=[];const t=(Game.width-32)/4,s=(Game.height-32)/6;for(let e=0;e<layout.length;e++)for(let a=0;a<layout[e].length;a++)for(let i=0;i<layout[e][a].length;i++)0!==layout[e][a][i]&&this.shapes.push(new Poly({x:Game.width*e+28+t*i,y:s*a+28,w:48,h:48,color:getHomeColor(layout[e][a][i])},[{delay:6e3,duration:250,props:{x:28+t*i+Game.width*(e-1)}},{delay:4e3,duration:250,props:{x:28+t*i+Game.width*(e-2)}},{delay:4e3,duration:500,props:{x:28+t*i+Game.width*e}}]));this.transition=new Poly({x:0,y:0,w:Game.width,h:Game.height,color:255},[this.startBuffer(),{delay:0,duration:2e3,props:{alpha:0}},{delay:12e3,duration:2e3,props:{alpha:255}},this.endBuffer()]),this.transition_out=new Poly({x:0,y:0,w:0,h:0,color:"#1a73e8"},[this.startBuffer(),{delay:14e3,duration:0,props:{x:172,y:252,w:48,h:48}},{delay:0,duration:250,props:{x:0,y:0,w:Game.width,h:Game.height}},this.endBuffer()])}}