var thoRaMau = true
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
    const ImageIaRaTuDauCon = document.querySelector("#IaRaTuDauId > img")
    thoRaMau = false
    if (key === "ArrowRight") {
        ImageIaRaTuDauCon.src = "./IaRaTuDauChay.png"
    }
    else if (key === "ArrowLeft") {
        ImageIaRaTuDauCon.src = "./IaRaTuDauChay.png"
    }
    setTimeout(() => { ImageIaRaTuDauCon.src = "./IaRaTuDauBTH.png" }, 200)
}
const batSuKienDiChuyen = () => {
    var checkChay = undefined
    const ImageIaRaTuDau = document.getElementById("IaRaTuDauId")
    document.addEventListener("keydown", (event) => {
        if (!checkChay) {
            diChuyen(event.key)
        }
        checkChay = event.key
        if (event.key === "ArrowRight") {
            ImageIaRaTuDau.style.left = (parseInt(ImageIaRaTuDau.style.left.substring(0, ImageIaRaTuDau.style.left.length - 2)) + 10) + "px"
        }
        else if (event.key === "ArrowLeft") {
            ImageIaRaTuDau.style.left = (parseInt(ImageIaRaTuDau.style.left.substring(0, ImageIaRaTuDau.style.left.length - 2)) - 10) + "px"
        }

    })
    document.addEventListener("keyup", () => {
        checkChay = undefined
        thoRaMau = true
    })
    setInterval(() => {
        if (checkChay) {
            console.log("gg")
            diChuyen(checkChay)
        }
    }, 400)
}
window.onload = () => {
    IaRaTuDauTho()
    batSuKienDiChuyen()
}