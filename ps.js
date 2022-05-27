var leftValue = 450, topValue = 100;

    function update(){
        document.getElementById('goku').style.left = leftValue+"px";
        document.getElementById('goku').style.top = topValue+"px";
    }

    document.onkeydown = function(e){
        console.log(e);
        if(e.keyCode == 37){//left
            leftValue = leftValue = 10;
        }
        else if (e.keyCode == 39) {//right
            leftValue = leftValue + 10;
        }
        else if (e.keyCode == 40){//down
            topValue = topValue + 10;
        }
        update();
    }