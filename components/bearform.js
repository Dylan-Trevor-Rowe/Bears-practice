import print from './helpers/utils.js'
import bearCard from './bearcard.js'

let bears = []

const bearForm = () => {
  let domString = ""
  domString += `
  <form class="d-flex flex-column justify-content-center">
    <div class="mb-3>
      <p for="exampleInputEmail1" class="form-label">image</p>
      <input type="text" class="form-control" id="bearImage">
    </div>
    <div class="mb-3">
      <p for="exampleInputPassword1" class="form-label">Name</p>
      <input type="text" class="form-control" id="bearName">
    </div>
    <button type="submit" id="createBear" class="btn form-btn align-self-center  btn-primary">Submit</button>
  </form>`
  print.printToDom("formDiv", domString)
}

const createBear = () => {
  document.getElementById('createBear').addEventListener('click', bearBuilder)
}

const counter = () => {
  bears.length + 1
}

const bearBuilder = (e) => {
  e.preventDefault()
  bears.push({
    id: counter(),
    img: document.getElementById('bearImage').value,
    name: document.getElementById('bearName').value
  })
  console.log(bears)
  bearCard.bearCard(bears)
}

export default { bearForm, createBear, bearBuilder }

