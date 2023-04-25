console.log('It`s front js')

let container_product = document.querySelector('.container_product')

const run = async () => {
   const result = await axios.get('/product');
   result.data.forEach(item => {
      container_product.innerHTML += `<div class = 'product'>${item.name}
      <img src ="${item.img}" class ="prod_img">
      </div>`
   })
}

run()