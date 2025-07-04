const convertButton = document.querySelector(".convert-button")
const worldCurrencies = document.querySelector(".world-currencies")
const countryConvert = document.querySelector(".country-convert")

function changeCountry(){
     const coinName = document.getElementById("coin-name")
     const countryImge = document.querySelector(".country-img")

     if(countryConvert.value == "Real" ){
          coinName.innerHTML = "Real"
          countryImge.src = "./assets/brasil 2.png"   
     }
     
     if(countryConvert.value == "Peso" ){
          coinName.innerHTML = "Peso Argentino"
          countryImge.src = "./assets/peso-argentino.png"             
     }
     
     if(countryConvert.value == "Iene" ){
          coinName.innerHTML = "Iene"
          countryImge.src = "./assets/iene e yuan.png"             
     }

     if(countryConvert.value == "Franco" ){
          coinName.innerHTML = "Franco Suiço"
          countryImge.src = "./assets/francosuiço.jpg"            
     }
}


function convertValues(){
     const inputCurrencyValue = document.querySelector(".input-currency").value
     
     const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
     const currencyValueCoverted = document.querySelector(".currency-value")

     const dolarToday = 5.56
     const euroToday = 6.46
     const libraToday = 7.59
     const bitcoinToday = 596.898

     const convertedValue = inputCurrencyValue / dolarToday

     if(worldCurrencies.value == "dolar"){
          currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-US",{
          style: "currency", currency: "USD"}).format(inputCurrencyValue / dolarToday)
     }
     
     if(worldCurrencies.value == "euro"){
     currencyValueCoverted.innerHTML = new Intl.NumberFormat("de-DE", { 
          style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday)
     }

     if(worldCurrencies.value == "libra"){
          currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-UK", { 
          style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday)
     }

     if(worldCurrencies.value == "bitcoin"){
     currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-US", { 
          style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToday)
     }
     
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
          style: "currency", currency: "BRL"}).format(inputCurrencyValue)

          
                
}

     function changeCurrency(){
          const currencyName = document.getElementById("currency-name")
          const currencyImage = document.querySelector(".currency-img")

          if (worldCurrencies.value == "dolar"){
               currencyName.innerHTML = "Dólar americano"
               currencyImage.src = "./assets/dolar.png"

         }

          if (worldCurrencies.value == "euro"){
               currencyName.innerHTML = "Euro"
               currencyImage.src = "./assets/euro.png"
               
          }

          if (worldCurrencies.value == "libra"){
               currencyName.innerHTML = "Libra"
               currencyImage.src = "./assets/libra.png"
          }

          if (worldCurrencies.value == "bitcoin"){
               currencyName.innerHTML = "Bitcoin"
               currencyImage.src = "./assets/bitcoin.png"
          }

          convertValues()
     }
countryConvert.addEventListener("change", changeCountry)
worldCurrencies.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
