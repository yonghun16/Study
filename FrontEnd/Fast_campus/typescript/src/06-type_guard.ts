// 타입 가드(Guards)

// 1
function logText(el: Element) {
  console.log(el.textContent)
}

const h1El = document.querySelector('h1') as HTMLHeadingElement
logText(h1El)



// 2
function add61(val: string | number) {
  let res = 'Result => '
  if (typeof val === 'number') {
    res += val.toFixed(2)
  } else {
    res += val.toUpperCase()
  }
  console.log(res)
}

add61(123)
add61('hello')
