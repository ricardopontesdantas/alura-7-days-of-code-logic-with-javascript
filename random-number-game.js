const maxNumber = 10
const secret = Math.round(Math.random() * maxNumber)
const attempts = 3
const attemptsArray = []
let winner = false

for (let i = attempts; i > 0; i--) {
    const attempt = prompt(`Tente adivinhar o número que estou pensando entre 0 e ${maxNumber}. Você tem ${i} tentativa(s).`)
    
    attemptsArray.push(attempt)
    
    if (attempt == secret) {
        document.write(`Parabéns, você acertou! O número que pensei foi exatamente o ${secret}! (Suas tentativas foram: ${attemptsArray})`)
        winner = true
        break
    }
}

if (!winner) {
    document.write(`Que pena, você não acertou... o número que eu pensei foi o ${secret} (Suas tentativas foram: ${attemptsArray})`)
}