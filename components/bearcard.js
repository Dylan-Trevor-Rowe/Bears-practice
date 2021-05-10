import print from './helpers/utils.js'

let attempts = 0

const bearCard = (arr) => {
  let domString = ""    
  for (const i of arr) {
  domString =
  `<div id="bearDelete" class="card" style="width: 18rem;">
     <img src="${i.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <div>
      ${attempts}
      </div>
      <h5 class="card-title">${i.name}</h5>
      <button id="${i.id}">fishing</button>
      <button>caught one</button
    </div>
  </div>`

}
    print.printToDom('cardDiv', domString)
    catchAFish(arr)
}

export default { bearCard }