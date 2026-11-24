let agora = new Date()
let minutos = new Date()
let hr = agora.getHours()
let min = minutos.getMinutes()
console.log(`Agora são exatamente ${hr} horas e ${min} minutos.`)
if (hr < 12){
    console.log('Bom dia!')
} else if (hr <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}