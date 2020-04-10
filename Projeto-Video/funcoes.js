window.onload = function () {
    var btnGrey = document.getElementById("btn-cinza");
    var btnSepia = document.getElementById("btn-sepia");
    var btnSaturate = document.getElementById("btn-saturate");
    var btnVerde = document.getElementById("btn-verde");
    var btnVermelho = document.getElementById("btn-vermelho");
    var btnAzul = document.getElementById("btn-azul");
  
    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext('2d');

    var key = 0;
    var video = document.getElementById("video");
  

    btnGrey.onclick = function () {
        if (key == 0) {
            video.style.cssText = "-webkit-filter: grayscale(100%); filter: grayscale(100%)";
            btnGrey.style.cssText = "color: #ffffff;box-shadow: 0 0 0 1px #bdbdbd inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 rgb(255, 255, 255), 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #5f5f5f;";
            key = 1;
        } else {
            video.style.cssText = "-webkit-filter: grayscale(0%);filter: grayscale(0%)";
            key = 0;
            btnGrey.style.cssText = "color: #666666;box-shadow: 0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 #BEBEBE, 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #f9f9f9;";
        }
    }
    btnSepia.onclick = function () {
        if (key == 0) {
            video.style.cssText = "-webkit-filter: sepia(100%); filter: sepia(100%)";
            btnSepia.style.cssText = "color: #ffffff;box-shadow: 0 0 0 1px #bdbdbd inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 rgb(255, 255, 255), 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #5f5f5f;";
            key = 1;
        } else {
            video.style.cssText = "-webkit-filter: sepia(0%);";
            key = 0;
            btnSepia.style.cssText = "color: #666666;box-shadow: 0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 #BEBEBE, 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #f9f9f9;";
        }
    }

    btnSaturate.onclick = function () {

        if (key == 0) {
            video.style.cssText = "-webkit-filter: invert(0.8);";
            btnSaturate.style.cssText = "color: #ffffff;box-shadow: 0 0 0 1px #bdbdbd inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 rgb(255, 255, 255), 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #5f5f5f;";
            key = 1;
        } else {
            video.style.cssText = "-webkit-filter: invert(0%);";
            key = 0;
            btnSaturate.style.cssText = "color: #666666;box-shadow: 0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 #BEBEBE, 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #f9f9f9;";
        }
    }
/*
    btnVerde.onclick = function () {
     
        if (video.paused || video.ended) return;
        var x = 0;
        var y = 0;
        context.drawImage(video, x, y, canvas.width, canvas.height);///snep shot imagem que conpoe o video
        var imageData = context.getImageData(x, y, canvas.width, canvas.height);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            var red = data[i + 0];
            var green = data[i + 1];
            var blue = data[i + 2];
            var media = (red + green + blue) / 3;
            data[i + 0] = red;
            data[i + 1] = 0;
            data[i + 3] = 0;
        }
        context.putImageData(imageData, x, y);
        requestAnimationFrame(draw);
    }*/
}
