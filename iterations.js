const answerTheQuestions = () => {
    const frontOrBack = prompt('Você quer seguir para a área de front-end (digite 1) ou back-end (digite 2)? Digite qualquer outra tecla para sair.')
    let frontOrBackChoose = ''
    if (frontOrBack === '1') {
        frontOrBackChoose = 'Você decidiu seguir pela área de front-end,'
    } else if (frontOrBack === '2') {
        frontOrBackChoose = 'Você decidiu seguir pela área de back-end,'
    } else {
        console.log('Você decidiu não seguir por nenhuma área, bye!')
        return
    }


    let techQuestion = ''
    if (frontOrBack === '1') {
        techQuestion = 'Você quer aprender React (digite 1) ou Vue (digite 2)?'
    } else if (frontOrBack === '2') {
        techQuestion = 'Você quer aprender C# (digite 1) ou Java (digite 2)?'
    }


    const tech = prompt(techQuestion)
    let techChoose = ''
    if (frontOrBack === '1') {
        if (tech === '1') {
            techChoose = 'começar a aprender React'
        } else if (tech === '2') {
            techChoose = 'começar a aprender Vue'
        }
    } else if (frontOrBack === '2') {
        if (tech === '1') {
            techChoose = 'começar a aprender C#'
        } else if (tech === '2') {
            techChoose = 'começar a aprender Java'
        }
    } else {
        techChoose = 'mas sua linguagem escolhida para aprender não é nenhuma das que te apresentei.'
    }


    const stack = prompt(`Você quer seguir se especializando na área escolhida (digite 1) ou quer se tornar full-stack (digite 2)?`)
    let stackChoose = ''
    if (stack === '1') {
        stackChoose = 'e se tornar especialista na área escolhida.'
    } else if (stack === '2') {
        stackChoose = 'mas que ser se tornar um desenvolvedor full-stack.'
    }


    let moreTechsArray = []
    const moreTechsQuestion = 'Qual outra tecnologia você gostaria de se especializar ou conhecer (digite o nome da tecnologia ou s para sair)?'
    while (!moreTechsArray.includes('s')) {
        const moreTechsAnswer = prompt(moreTechsQuestion)
        moreTechsArray.push(moreTechsAnswer)
    }
    moreTechsArray.pop()
    const moreTechsAnswer = moreTechsArray.length > 0 
        ? `Ainda deseja se especializar ou conhecer em ${moreTechsArray}` 
        : 'Não tem interesse em se especializar ou conhecer nenhuma outra tecnologia ou linguagem de programação.'

    const message = `${frontOrBackChoose} ${techChoose} ${stackChoose} ${moreTechsAnswer}`
    console.log(message)
}

answerTheQuestions()