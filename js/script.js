let $ = document
const inputWeightElem = $.getElementById('weight')
const valueWeightElem = $.getElementById('weight-val')
const inputHeightElem = $.getElementById('height')
const valueHeightElem = $.getElementById('height-val')
const resultBmiElem = $.getElementById('result')
const categoryBmiElem = $.getElementById('category')

function showValueWeight(){
    let valueInputWeight = inputWeightElem.value
    valueWeightElem.innerHTML = valueInputWeight + ' kg'
//   console.log('weght')
}

function showValueHeigh(){
    let valueInputHeight = inputHeightElem.value
    valueHeightElem.innerHTML = valueInputHeight +' cm'
    // console.log('hieght')
}

function calculate(){
    let valueInputHeight = inputHeightElem.value
    let valueInputWeight = inputWeightElem.value
    let calculateBmi = (valueInputWeight / ((valueInputHeight ** 2)/ 10000)).toFixed(2)
    resultBmiElem.innerHTML = calculateBmi

    if(calculateBmi<18.50){
        categoryBmiElem.innerHTML ='under weight'
        resultBmiElem.style.cssText = 'color : #f9ca24;'
    }else if(  calculateBmi>=18.5  && calculateBmi<= 24.9){
        console.log ('roya')
        categoryBmiElem.innerHTML ='Normal weight'
        resultBmiElem.style.cssText = 'color : #4cd137;'

    }else if( calculateBmi>=25  && calculateBmi<= 29.9) {
        
        categoryBmiElem.innerHTML ='over weight'
        resultBmiElem.style.cssText = 'color : #ee5253;'

    }else if(calculateBmi>=30){
        categoryBmiElem.innerHTML ='obese'
        resultBmiElem.style.cssText = 'color : red;'

    }
}



inputWeightElem.addEventListener('input',showValueWeight)
inputHeightElem.addEventListener('input',showValueHeigh)