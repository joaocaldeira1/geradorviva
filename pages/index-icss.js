// Encontra as inputs
const nomeInput = document.getElementById("nome");
const cargoInput = document.getElementById("cargo");
const gerenciaInput = document.getElementById("gerencia");
const telefoneInput = document.getElementById("telefone");

desenharImagem();

// adiciona um metodo que realiza uma funcao quando um eventoacontece
// no caso o evento chama-se: "input" e ocorre quando o texto digitado se altera
// ou quando o valor selecionado altera
nomeInput.addEventListener("input", () => atualizarDados());
cargoInput.addEventListener("input", () => atualizarDados());
gerenciaInput.addEventListener("input", () => atualizarDados());
telefoneInput.addEventListener("input", () => atualizarDados());

function atualizarDados() {
    // recebe as informacoes das inputs
    var nome = nomeInput.value;
    var cargo = cargoInput.value;
    var gerencia = gerenciaInput.value;
    var telefone = telefoneInput.value;

    let nomeCompleto = nome;

    desenharImagem(nomeCompleto, cargo, gerencia, telefone);
}

function desenharImagem(name, cargo, gerencia, telefone) {
    var canvas = document.getElementById("idCanvas");
    var context = canvas.getContext("2d");

    if (!name) name = "";
    if (!cargo) cargo = "";
    if (!gerencia) gerencia = "";
    if (!telefone) telefone = "";

    var imageObj = new Image();

    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0);
        context.font = "26px Montserrat";
        context.fillStyle = "#3e3e3d";

        if(gerencia){
            context.fillText(name, 89, 65, 335);
        } else {
            context.font = "29px Montserrat";
            context.fillText(name, 89, 72, 335);
        }

        context.font = "17px Montserrat";

        if(gerencia){
            context.fillText(cargo, 88, 85, 335);
        } else {
            context.font = "18px Montserrat";
            context.fillText(cargo, 88, 94, 335);
        }

        context.font = "15px Montserrat";
        
        context.fillText(gerencia, 88, 103, 326);

        context.font = "16px Montserrat";
        
        if(gerencia){
            context.fillText(telefone, 88, 122, 335);
        } else {
            context.font = "19px Montserrat"
            context.fillText(telefone, 88, 117, 335);
        }
        

        var canvas = document.getElementById("idCanvas");
        var dataURL = canvas.toDataURL();

        // adiciona a imagem no botao de download
        const downloadButton = document.querySelector(".download-image");
        downloadButton.href = `data:application/octet-stream;${dataURL}`;
    };
    imageObj.setAttribute("crossOrigin", "anonymous");
    // Esse é o atributo que você vai alterar para colocar a sua imagem de assinatura
    imageObj.src = "../assets/imgs/imgassICSS.jpg";

    //imageObj.src = "https://raw.githubusercontent.com/Tashima42/Email-sign-generator/canvas/assets/imgs/assinatura-modelo.png";
}
