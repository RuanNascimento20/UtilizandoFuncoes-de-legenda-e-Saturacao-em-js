document.addEventListener('DOMContentLoaded', function () {///estrutura da pagina
    var video = document.querySelector("#video");
    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext('2d');


    video.addEventListener("play", function () {

        if (video.paused || video.ended) return;
        draw();
    });
    console.log(video.clientWidth)
    video.addEventListener("loadedmetadata", function () {
        canvas.width = video.clientWidth

        canvas.height = video.clientHeight
    });
    var cont = 0;

    var draw = function () {
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
        var image = new Image();//uso de servidor
        image.src = canvas.toDataURL("image/png");
        image.width = 120;
        if (cont++ % 50 == 0) {
            var imgs = document.querySelector("#imgs");
            imgs.appendChild(image);
        }
        requestAnimationFrame(draw);
    }
});

