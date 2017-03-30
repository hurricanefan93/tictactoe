if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'
const td1 = document.querySelector('#td1')
const td2 = document.querySelector('#td2')
const td3 = document.querySelector('#td3')
const td4 = document.querySelector('#td4')
const td5 = document.querySelector('#td5')
const td6 = document.querySelector('#td6')
const td7 = document.querySelector('#td7')
const td8 = document.querySelector('#td8')
const td9 = document.querySelector('#td9')
const anySquare = document.querySelectorAll('td')
const turnLine = document.querySelector('.turnLine')
let currentTurn = 'X'
const possibleWays = [[td1, td2, td3], [td4, td5, td6], [td7, td8, td9], [td1, td4, td7], [td2, td5, td8], [td3, td6, td9], [td1, td5, td9], [td3, td5, td7]]

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
      }
    }

    if (!someOneWon) {
      if (currentTurn === 'X') {
        currentTurn = 'O'
        turnLine.textContent = "it's O's turn!"
      } else {
        currentTurn = 'X'
        turnLine.textContent = "it's X's turn!"
      }
    }
  })
}

// // const playerMove = (event) => {
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', playerMove)
//     const targetSquare = event.target
//     if (!targetSquare.dataset.user) {
//       if (moveCount % 2 === 0) {
//         targetSquare.dataset.user = 'X'
//         $('h2').textContent = `O's turn`
//       } else {
//         targetSquare.dataset.user = 'O'
//         $('h2').textContent = `X's turn`
//       }
//       checkResult()
//       moveCount++
//     }
//   }
// }
//
// const checkResult = () => {
//   for (let i = 0; i < 8; i++) {
//     if (document.querySelectorAll(`.p${i}[data-player = ${user}]`).length === 3) {
//       $('h2').textContent = `${user} Has Won`
//       $$('.dialog h3').textContent = 'You win!'
//       console.log('someone won')
//     } else {
//       $('.dialog h3').textContent = 'You lost!'
//     }
//   }
// }
const main = () => {}
document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
