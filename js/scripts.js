$(document).ready(function(){
    $("video,img").each(function(index){
        setOnLoadMedia(this);
    })
    window.scroll(0,0);
})
var totalMedia = 1;
var mediaLoaded = 0;
var tiempoMinimo = false;
setTimeout(function(){
    tiempoMinimo = true;
    onLoadMedia()
}, 1500);
function setOnLoadMedia(elem) {
    let elemAttr=$(elem).attr("alt-src");
    if(typeof elemAttr !== 'undefined' && elemAttr !== false) {
        let elemAttrPlus=$(elem).attr("plus-src");
        if(typeof elemAttrPlus !== 'undefined' && elemAttrPlus !== false && (window.innerWidth>1366 || window.devicePixelRatio > 1)) {
            $(elem).attr("src",elemAttrPlus);
        } else {
            $(elem).attr("src",elemAttr);
        }
        $(elem).on("load", onLoadMedia);
        $(elem).on("loadeddata", onLoadMedia);
        totalMedia++;
    }
}
function onLoadMedia() {
    mediaLoaded ++;
    setLoadTracker((mediaLoaded/totalMedia)*100)
    if(totalMedia === mediaLoaded && tiempoMinimo) salirLoader();
}
function setLoadTracker(percent) {
    $("#mainLoader div.statusBarLoader > div").css("width",percent*2+"%");
}