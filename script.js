let c = (el) => document.querySelector(el)
let cs = (el) => document.querySelectorAll(el)
let qtdModal = 1

pizzaJson.map((item, index) => {


    let pizzaItem = c('.models .pizza-item').cloneNode(true)
   

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    document.querySelector('.pizza-area').append(pizzaItem)

    pizzaItem.setAttribute('data-key', index)

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        qtdModal = 1
        c('.pizzaWindowArea').style.display = 'flex'
        c('.pizzaWindowArea').style.opacity = 0
         qtdModal = 1
        c('.pizzaInfo--qt').innerHTML = qtdModal

        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1
        }, 200)

        let key = e.target.closest('.pizza-item').getAttribute('data-key', index)


        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2){
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })
    })
})

function closeModal() {
    c('.pizzaWindowArea').style.opacity = '0'
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none'
    }, 500)
}
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (qtdModal > 1) {
        qtdModal--
    }
    c('.pizzaInfo--qt').innerHTML = qtdModal
})
c('.pizzaInfo--qtmais').addEventListener('click', () => {
    qtdModal++
    c('.pizzaInfo--qt').innerHTML = qtdModal
})
