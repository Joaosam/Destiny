let answerElement = document.querySelector('#answer')
let containerAnswer = document.querySelector('#containerAnswer')
let button = document.querySelector('#button')

const answers = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'Me parece que não hein!'
]

function makeQuestion() {
  let questionFormElement = document.querySelector('#questionForm')
  if (!questionFormElement.value) {
    swal({
      title: 'Digite uma pergunta',
      icon: 'warning',
      button: 'Fechar'
    })
    return
  }

  // Printo o input na tela
  let questionElement = document.querySelector('#question')
  questionElement.innerHTML = questionFormElement.value

  // Printo a resposta na tela
  const randomNumber = Math.floor(Math.random() * answers.length)
  answerElement.innerHTML = answers[randomNumber]

  //Desabilita botão
  button.setAttribute('disabled', true)

  // Limpa input
  clearInput(questionFormElement)
  // Limpa resposta
  clearAnswerandDisabledButton()
}

function clearInput(questionFormElement) {
  setTimeout(() => (questionFormElement.value = ''), 3000)
}

function clearAnswerandDisabledButton() {
  containerAnswer.style.opacity = 1
  setTimeout(() => {
    containerAnswer.style.opacity = 0
    button.removeAttribute('disabled')
  }, 3000)
}
