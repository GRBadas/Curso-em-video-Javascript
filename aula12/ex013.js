var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

switch (diaSem) {
    case 1: diaSem=1
        console.log("Segunda")
        break;
    case 2: diaSem=2
        console.log("Terça")
        break;
    case 3: diaSem=3
        console.log("Quarta")
        break;
    case 4: diaSem=4
        console.log("Quinta")
        break;
    case 5: diaSem=5
        console.log("Sexta")
        break;
    case 6: diaSem=6
        console.log("Sábado")
        break;
    case 7: diaSem=7
        console.log("Domingo")
        break;
    default:
        break;
}