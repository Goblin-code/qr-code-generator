let qrImage = document.getElementById("qrImage");
let text = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");

function generateQrCode(){
    if(text.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
        imgBox.classList.add("showImg");
    }
    else{
        text.classList.add("error");
        setTimeout(() => {
            text.classList.remove("error");
        }, 1000);
    }
}