function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText() { 
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num
}

function resetCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = 0
  numberElement.textContent = num
}

function writeText() {
  const input = document.querySelector("#input")
  const inputText = input.value
  const output = document.querySelector("#output")
  const outputBefore = output.textContent
  output.textContent = outputBefore + "\n" + inputText
}


function Theorom() {
  const input = document.querySelector("#inputA")
  const inputText = input.value 
  const inputB = document.querySelector("#inputB")
  const inputBText = inputB.value 
  const inputC = document.querySelector("#inputC")
  const inputCText = inputC.value 
  const output = document.querySelector("#outputA")
  const output1 = document.querySelector("#outputB")
  const output2 = document.querySelector("#outputC")
  const squared = inputText * inputText + inputBText * inputBText + inputCText * inputCText
  const root = Math.sqrt(squared)
  output.textContent = root
}

function stoptext() {
  disableTextbox.setAttribute('disabled', '');
  disableTextbox.value = ''
}
function starttext() {
  disableTextbox.removeAttribute('disabled', '');

}