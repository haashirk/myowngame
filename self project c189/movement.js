AFRAME.registerComponent('move-play',{
    init:function(){
        this.movement()

    },
    movement:function(){
        window.addEventListener('keydown',function(e){
            var man=document.querySelector('#manRunning')
            if(e.code=='ArrowRight'){
                var xpose=0.1
                man.setAttribute('rotation',{x:0,y:90,z:0})
                man.setAttribute('position',{x:xpose,y:-0.1,z:-0.1})
                xpose+=0.05
            }
            if(e.code=='ArrowLeft'){
                man.setAttribute('rotation',{x:0,y:-90,z:0})
            }
            if(e.code=='ArrowUp'){
                man.setAttribute('rotation',{x:0,y:180,z:0})
            }
        })
    }
})