function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.querySelectorAll('[name = "radsx"]')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else if(idade < 20){
                img.setAttribute('src', 'imagens/rapaz.png')

            } else if(idade <60){
                img.setAttribute('src', 'imagens/homem.png')

            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
                


        } else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if(idade < 20){
                img.setAttribute('src', 'imagens/moça.png')
            } else if(idade < 60){
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}