if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const td1 = document.querySelector('.td1')
const td2 = document.querySelector('.td2')
const td3 = document.querySelector('.td3')
const td4 = document.querySelector('.td4')
const td5 = document.querySelector('.td5')
const td6 = document.querySelector('.td6')
const td7 = document.querySelector('.td7')
const td8 = document.querySelector('.td8')
const td9 = document.querySelector('.td9')
const anySquare = document.querySelectorAll('td')
const turnLine = document.querySelector('.turnLine')
let currentTurn = 'X'
const possibleWays = [[td1, td2, td3], [td4, td5, td6], [td7, td8, td9], [td1, td4, td7], [td2, td5, td8], [td3, td6, td9], [td1, td5, td9], [td3, td5, td7]]
const modal = document.querySelector('body')
const modalContent = document.querySelector('h3')
let draw = 0

for (let i = 0; i < anySquare.length; i++) {
  anySquare[i].addEventListener('click', () => {
    anySquare[i].textContent = currentTurn

    let someOneWon = false

    for (let i = 0; i < possibleWays.length; i++) {
      if (possibleWays[i][0].textContent === currentTurn &&
      possibleWays[i][1].textContent === currentTurn &&
      possibleWays[i][2].textContent === currentTurn) {
        turnLine.textContent = `${currentTurn} Wins`
        someOneWon = true
        modal.className = 'modal'
      }
    }

    if (!someOneWon) {
      draw++
      if (currentTurn === 'X') {
        currentTurn = 'O'
        turnLine.textContent = "It's Rick's turn!"
      } else {
        currentTurn = 'X'
        turnLine.textContent = "it's Morty's turn!"
      }
    }
    if (draw >= 9) {
      modal.className = 'modal'
      modalContent.textContent = "It's a tie"
    }
  })
}

const restart = document.querySelector('button.restart')
restart.addEventListener('click', () => {
  window.location.reload()
})

const button = document.querySelector('button.playAgain')
button.addEventListener('click', () => {
  modal.className = ''
  window.location.reload()
})

const main = () => {}
document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
