class HomeMusic extends Scene{constructor(){super(),this.reset()}draw(){background(255),this.song_started||(this.startSong(home),this.song_started=!0),Game.shapes=this.shapes,Game.shapes.forEach(((t,e)=>{t.update(),t.draw(),this.transition.alpha<5&&this.createCollision(t,e)})),this.transition_out.update(),this.transition_out.draw(),this.transition.update(),this.transition.draw(),this.transition.q.length||this.song_stopped||(this.endSong(),this.song_stopped=!0),null!=this.transition.current||this.transition.q.length||this.endScene()}reset(){this.song_started=!1,this.song_stopped=!1,this.shapes=[];const t=(Game.width-32)/4,e=(Game.height-32)/6;for(let s=0;s<layout.length;s++)for(let a=0;a<layout[s].length;a++)for(let i=0;i<layout[s][a].length;i++)0!==layout[s][a][i]&&this.shapes.push(new Poly({x:Game.width*s+28+t*i,y:e*a+28,w:48,h:48,color:getHomeColor(layout[s][a][i])},[{delay:4e3,duration:500,props:{x:28+t*i+Game.width*(s-2)}},{delay:2e3,duration:500,props:{x:28+t*i+Game.width*(s-0)}},{delay:4e3,duration:500,props:{x:28+t*i+Game.width*(s-2)}},{delay:4e3,duration:250,props:{x:28+t*i+Game.width*(s-1)}}]));this.transition=new Poly({x:0,y:0,w:Game.width,h:Game.height,color:255},[this.startBuffer(),{delay:0,duration:2e3,props:{alpha:0}},{delay:14e3,duration:2e3,props:{alpha:255}},this.endBuffer()]),this.transition_out=new Poly({x:0,y:0,w:0,h:0,color:"#ff0000"},[this.startBuffer(),{delay:16e3,duration:0,props:{x:100,y:326,w:48,h:48}},{delay:0,duration:250,props:{x:0,y:0,w:Game.width,h:Game.height}},this.endBuffer()])}}
