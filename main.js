let answerElement = document.querySelector('#answer')

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
  let questionFormElement = document.querySelector('#questionForm').value
  if (!questionFormElement) {
    swal({
      title: 'Digite uma pergunta',
      icon: 'warning',
      button: 'Fechar'
    })
    return
  }

  let questionElement = document.querySelector('#question')
  questionElement.innerHTML = questionFormElement

  const randomNumber = Math.floor(Math.random() * answers.length)
  answerElement.innerHTML = answers[randomNumber]
}
