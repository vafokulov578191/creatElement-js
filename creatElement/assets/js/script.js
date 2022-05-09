import { arr } from "./arr.js";

for(let product of arr) {

let item = document.createElement('div')
let item_title = document.createElement('div')
let polzunok = document.createElement('div')
let fill = document.createElement('div')
let b = document.createElement('b')
let span = document.createElement('span')
//top
let item_bottom = document.createElement('div')
let ul = document.createElement('ul')
let ul_li1 = document.createElement('li')
let ul_li2 = document.createElement('li')
let ul_li3 = document.createElement('li')
let ul_li4 = document.createElement('li')
let ul_li5 = document.createElement('li')
let span_bottom1 = document.createElement('span')
let span_bottom2 = document.createElement('span')
let span_bottom4 = document.createElement('span')
let span_bottom5 = document.createElement('span')
let btn = document.createElement('button')


//bottom
b.innerHTML = product.course
span.innerHTML = product.place
fill.style.width = product.procent
ul_li3.innerHTML = product.duration
span_bottom1.innerHTML = product.days
span_bottom2.innerHTML = product.time
span_bottom4.innerHTML = product.price
span_bottom5.innerHTML = product.Teacher
//arr

if(fill.style.width === "0%") {
    polzunok.style.background = "green"
}

ul_li1.innerHTML = "Дни: "
ul_li2.innerHTML = "Время: "
ul_li4.innerHTML = "Цена: "
ul_li5.innerHTML = "Преподаватель: "
btn.innerHTML = "Записаться"
//innerHTML
item.classList.add('item')
item_title.classList.add('item_title')
item_bottom.classList.add('item_bottom')
b.classList.add('text_title')
span.classList.add('span_title')
polzunok.classList.add('polzunok')
fill.classList.add('fill')
btn.classList.add('btn')
ul.classList.add('list')
//classlist
//append prepend
let body = document.body
body.append(item)
item.append(item_title, item_bottom)
item_title.append(b, span, polzunok)
polzunok.append(fill)

item_bottom.append(ul, btn)
ul.append(ul_li1, ul_li2, ul_li3, ul_li4, ul_li5)
ul_li1.append(span_bottom1)
ul_li2.append(span_bottom2)
ul_li4.append(span_bottom4)
ul_li5.append(span_bottom5)
}
