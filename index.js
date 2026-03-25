let scoreEl = document.getElementById("black-con")
let scoreEll = document.getElementById("black-con2")
console.log(scoreEl)
let count = 0
let count2 = 0

function increment() {
  count = count + 1
  scoreEl.innerText = count
}

function increment2() {
  count = count + 2
  scoreEl.innerText = count
}

function increment3() {
  count = count + 3
  scoreEl.innerText = count
}

function increment4() {
  count2 = count2 + 1
  scoreEll.innerText = count2
}

function increment5() {
  count2 = count2 + 2
  scoreEll.innerText = count2
}

function increment6() {
  count2 = count2 + 3
  scoreEll.innerText = count2
}