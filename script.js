let time = 2000,
    currentImageIndex =0,
    images = fotos-acaraje("#slider img")
    max = images.length;

function start()  {

    images[currentImagenIndex]
        .classlist.remove("selected")

    currentImageINdex++

    if(currentImageIndex >= max)
        currentImageINdex=0

    images(currentImageIndex)
        .classlist.add("selected")

    function start(){

    }

    window.addEventListener("load", start)
    
}  