AFRAME.registerComponent("obsticals",{
    init : function(){
        
        for (var i = 0; i < 10; i++){
            var obstical1 = document.createElement("a-entity");
            var obstical2 = document.createElement("a-entity");
            var coin = document.createElement("a-entity");

            posX = [-10,-5,0,5,10,15,20,-15,-20,30]
            posY = 2.5;
            posZ = [-10,-5,-25,-5,-18,-15,-20,-35,-28,-10]

            obstical1.setAttribute("id","obstical1"+i);
            obstical2.setAttribute("id","obstical2"+i);
            coin.setAttribute("id","coin"+i);

            obstical1.setAttribute("postion",{x:posX[i],y:2.5,z:posZ[i]});
            //obstical2.setAttribute("postion",{x:posX,y:2.5,z:-30});
            //coin.setAttribute("postion",{x:posX,y:2.5,z:-40});

            obstical1.setAttribute(
                "gltf-model",
                "assets/obstical1.glb",
            );

            obstical2.setAttribute(
                "gltf-model",
                "assets/obstical2.glb",
            );

            coin.setAttribute(
                "gltf-model",
                "assets/gamecoin.glb",
            );

            //obstical1.setAttribute("static-body", {});
            //obstical2.setAttribute("static-body", {});
            //coin.setAttribute("static-body", {});

            obstical1.setAttribute("scale",{x:0.05,y:0.05,z:0.05})
            obstical2.setAttribute("scale",{x:0.05,y:0.05,z:0.05})
            coin.setAttribute("scale",{x:0.05,y:0.05,z:0.05})

            var sceneEL = document.querySelector("#scene");
            sceneEL.appendChild(obstical1)
            sceneEL.appendChild(obstical2)
            sceneEL.appendChild(coin)
        }
    }
})