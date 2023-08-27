"use strict"
const titleCode = document.querySelector(".title-code").textContent
const price = document.querySelector(".product-price__grn").textContent
const priceHtml =  document.querySelector(".product-price__grn")
fetch('/get-api')
    .then(response => response.json())
    .then(data => {
    const transformedData = data.data.map(item => ({
      name: item["maker"],
      id: item["code"],
      description: item["name"],
      price: item["price"],
      count: item["count"],
      analogue:item["analogue"],
      exchange:item["exchange"]
    }));
   
    const transformedDataExchange = transformedData.map(item =>{
      const arrayPrices = []
      arrayPrices.push(item.exchange)
      const arrayTrash = arrayPrices.shift()
      return arrayTrash    
    })
    const arrayClear = transformedDataExchange.filter(str => str !== '')
    const exchangePriceStr = arrayClear[0]
    const exchangePrice  = Number(exchangePriceStr)

    transformedData.forEach(item =>{
     if(titleCode === item.id){
        const priceD = price * exchangePrice
        priceHtml.innerHTML = `${priceD.toFixed(2)} грн`
     }
    })
})
