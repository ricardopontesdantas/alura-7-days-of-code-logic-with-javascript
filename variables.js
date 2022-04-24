const name = prompt('Qual o seu nome?')
const age = prompt('Quantos anos você tem?')
const language = prompt('Qual linguagem de programação você está estudando?')
const paragraph = document.querySelector('p')

console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`)

const likeToStudy = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (likeToStudy === '1') {
    console.log('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
    console.log('Ahh que pena... Já tentou aprender outras linguagens?')
}