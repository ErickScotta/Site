function refresh(conteudo){
    const larguraJanela = window.innerWidth;
    if(larguraJanela<=480){
        var url = 'p.html'
    }else if(larguraJanela > 480 && larguraJanela <= 767){
        var url = 'm.html'
    }else if(larguraJanela >= 768 && larguraJanela <= 1024){
        var url = 'g.html'
    }else if(larguraJanela >= 1025 && larguraJanela <=1500){
        var url = 'gg.html'
    }else{//talvez (largurajanela >= 1280)
        var url = 'extrag.html'
    }
    
    
    var target = conteudo
    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200 ) {
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
}

let botao = document.querySelector(".volt")
botao.addEventListener("click",()=>{
    location.reload();
})


