// const buttons = document.querySelectorAll("button");
// for (let btn of buttons) {
//   let bgColor = window.getComputedStyle(btn, null).backgroundColor
//   console.log(bgColor)
//   btn.addEventListener("click", function() {
//     document.body.style.backgroundColor = bgColor
//   })
// }




let input = document.querySelector('input')
let p = document.querySelector('p')
let results = document.getElementById('results')
let h1 = document.querySelector("h1");

input.addEventListener('keyup', event => {
    results.classList.add("resultsBorder")
  results.innerHTML = ''
  p.innerHTML = ''
  p.classList.remove("red-text")
  let filterArr = lowerCase.filter(element => element.includes(input.value.toLowerCase()))
  console.log(filterArr)
  let ul = document.createElement('ul')
  results.append(ul)

  if(input.value.length == 0 || filterArr.length == 0) {
      results.classList.remove("resultsBorder")
    results.innerHTML = ''
  }

  for (let color of filterArr) {
    let li = document.createElement('li')
    li.innerText = color
    li.classList.add('listClass')
    li.setAttribute("tabindex", "0")
    li.addEventListener('click', () => {
      input.value = color;
      input.innerText = input.value;
      document.body.style.backgroundColor = color
      let rgb = window.getComputedStyle(document.body, null).backgroundColor
        let rgbArr = rgb.replace("rgb", "").replace("(", "").replace(")", "").split(",")
        let oppositeRGB = rgbArr.map(el => Math.abs(parseInt(el) - 255))
        let oppositeRGBstr = `rgb(${oppositeRGB[0]}, ${oppositeRGB[1]}, ${oppositeRGB[2]})`
        h1.style.color = oppositeRGBstr
        results.innerHTML = ''
    results.classList.remove("resultsBorder");
    })
    li.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        input.value = color;
      input.innerText = input.value;
      document.body.style.backgroundColor = color
      let rgb = window.getComputedStyle(document.body, null).backgroundColor
        let rgbArr = rgb.replace("rgb", "").replace("(", "").replace(")", "").split(",")
        let oppositeRGB = rgbArr.map(el => Math.abs(parseInt(el) - 255))
        let oppositeRGBstr = `rgb(${oppositeRGB[0]}, ${oppositeRGB[1]}, ${oppositeRGB[2]})`
        h1.style.color = oppositeRGBstr
        results.innerHTML = ''
    results.classList.remove("resultsBorder");
      }
    })
    ul.append(li)
    
  }

  if (event.key === 'Enter') {
    results.innerHTML = ''
    results.classList.remove("resultsBorder");
    if (filterArr.length === 1) {
      input.value = filterArr[0]
      
    }
    if (lowerCase.includes(input.value.toLowerCase())) {
        document.body.style.backgroundColor = input.value
        let rgb = window.getComputedStyle(document.body, null).backgroundColor
        let rgbArr = rgb.replace("rgb", "").replace("(", "").replace(")", "").split(",")
        let oppositeRGB = rgbArr.map(el => Math.abs(parseInt(el) - 255))
        let oppositeRGBstr = `rgb(${oppositeRGB[0]}, ${oppositeRGB[1]}, ${oppositeRGB[2]})`
        h1.style.color = oppositeRGBstr
    } else {
        results.innerHTML = ''
      p.classList.add('red-text')
      p.innerText = 'Color does not exist'
    }
  }
})

window.addEventListener("click", () => {
  results.innerHTML = ''
    results.classList.remove("resultsBorder");
})