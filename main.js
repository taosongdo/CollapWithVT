var thoRaMau = true
var checkChay = undefined
const IaRaTuDauTho = () => {
    const ImageIaRaTuDau = document.querySelector("#IaRaTuDauId > img")
    setInterval(() => {
        if (thoRaMau) {
            if (ImageIaRaTuDau.src === "http://127.0.0.1:5500/IaRaTuDauTho.png") {
                ImageIaRaTuDau.src = "./IaRaTuDauBTH.png"
            }
            else {
                ImageIaRaTuDau.src = "./IaRaTuDauTho.png"
            }
        }
    }, 500);
}
const diChuyen = (key) => {
    const ImageIaRaTuDau = document.getElementById("IaRaTuDauId")
    const ImageIaRaTuDauCon = document.querySelector("#IaRaTuDauId > img")
    if (key === "ArrowRight") {
        thoRaMau = false
        ImageIaRaTuDau.style.left = (parseInt(ImageIaRaTuDau.style.left.substring(0, ImageIaRaTuDau.style.left.length - 2)) + 10) + "px"
        ImageIaRaTuDauCon.src = "./IaRaTuDauChay.png"
    }
    else if (key === "ArrowLeft") {
        thoRaMau = false
        ImageIaRaTuDau.style.left = (parseInt(ImageIaRaTuDau.style.left.substring(0, ImageIaRaTuDau.style.left.length - 2)) - 10) + "px"
        ImageIaRaTuDauCon.src = "./IaRaTuDauChay.png"
    }
    thoRaMau = true
    ImageIaRaTuDau.src = "./IaRaTuDauBTH.png"
}
const batSuKienDiChuyen = () => {
    var checkChan = true
    document.addEventListener("keydown", (event) => {
        if (!checkChay && checkChan) {
            checkChan = false
            diChuyen(event.key)
            setTimeout(() => {
                checkChan = true
            }, 200)
        }
        checkChay = event.key
    })
    document.addEventListener("keyup", () => {
        checkChay = undefined
  
    })
    setInterval(() => {
        if (checkChay) {
            diChuyen(checkChay)
        }
    }, 700)
}
window.onload = () => {
    IaRaTuDauTho()
    batSuKienDiChuyen()
}