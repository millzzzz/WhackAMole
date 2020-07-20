const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
let timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeleft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
            console.log(result)
            switch (result) {
                case 3:
                    timerID = setInterval(randomSquare, 900)
                    break;
                case 7:
                    timerID = setInterval(randomSquare, 800)
                    break;
                case 15:
                    timerID = setInterval(randomSquare, 500)
                    break;
                case 20:
                    timerID = setInterval(randomSquare, 300)
                    break;
            }
        }
    })
})

function moveMole() {
    let timerID = null
    timerID = setInterval(randomSquare, 1000)
}

moveMole()

let timerId = setInterval(countDown, 1000)

function countDown() {
    currentTime--
    timeleft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}