"use strict"
document.addEventListener("DOMContentLoaded" , function(){
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
    const priceNumb = parseFloat(price.replace(",", "."));

    transformedData.forEach(item =>{
    if(titleCode === item.id){
        const priceD = priceNumb * exchangePrice
        priceHtml.innerHTML = `${priceD.toFixed(2)} грн`
    }
    })
  })
})


const popup = document.querySelector(".popup-wrapper")
const htmlDoc = document.querySelector("html")
const unloginnedBtn = document.querySelector(".unloginned-btn")
try{
  unloginnedBtn.addEventListener("click" , ()=>{
    popup.style.display = "flex"
    htmlDoc.style.overflow = "hidden"
  })
  
}catch{
  
}
