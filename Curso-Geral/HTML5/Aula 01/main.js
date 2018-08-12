
    function teste() {
        var element = document.getElementsByTagName('div');
        element[0].innerHTML = 'Hello word';
    return element;
    }

 
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
    
    

