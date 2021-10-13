let leftStartingPoint = 0;
let topStartingPoint = 50;
var element = document.getElementById("move_box");
let interval = setInterval(function(){
    moveBox();
    if(topStartingPoint >= 500){
        clearInterval(interval);
    }},1000);
        function moveBox(){
            let count = 0;
            let moveRight = setInterval(function(){
                count += .1;
                if(count >= 10){
                    count = 0;
                    clearInterval(moveRight);
                    let moveDown = setInterval(function(){
                        count += .1;
                         if(count >= 10){
                            count = 0;
                            clearInterval(moveDown);
                        }else{
                            topStartingPoint += .1;
                            element.style.top = topStartingPoint+"px";
                        }
                    },5);
                }else{
                    leftStartingPoint += .1;
                    element.style.left = leftStartingPoint+"px";
                }
            },5);
        }

