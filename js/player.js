// chromebookgames.github.io
window.onload = function() {
    document.getElementById("player").innerHTML = [
        '<div class="card" id="player" style="width: 100%;">',
        '<div class="card-img-top"><button style="width: 100%; height: 600px;" class="btn btn-success" onclick="activate()">Play!</button></div>',
        '<div class="card-body">',
            '<h5 class="card-title">' + document.body.getAttribute("gameTitle") + '</h5>',
            '<p class="card-text">' + document.body.getAttribute("gameDescription") + '</p>',
        '</div>',
        '</div>',
    ].join().replaceAll(",","");
}

function activate() {
    document.addEventListener('fullscreenchange', goFullscreen, false);
    document.getElementById("player").innerHTML = [
        '<div class="card" id="player" style="width: 100%;">',
        '<div class="card-img-top"><iframe id="player-frame" style="width: 100%; height: 600px;" src="' + document.body.getAttribute("gameAssetIndex") + '"></iframe></div>',
        '<div class="card-body">',
            '<h5 class="card-title">' + document.body.getAttribute("gameTitle") + '</h5>',
            '<p class="card-text">' + document.body.getAttribute("gameDescription") + '</p>',
            '<a href="#player" onclick="goFullscreen()" class="btn btn-primary">Go fullscreen</a>',
        '</div>',
        '</div>',
    ].join().replaceAll(",","");
}

function goFullscreen() {
    var iframe = document.getElementById('player-frame').contentWindow.document.body;
    
    iframe.webkitRequestFullscreen();
}