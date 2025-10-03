
/**
 * @type {{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement(`table`); //letrehoz egy html elemet a memoriaban
document.body.appendChild(table)//hozzafuz egy html elemet valamihez

const thead = document.createElement(`thead`)
table.appendChild(thead)

const tr = document.createElement(`tr`)
thead.appendChild(tr)
const tr2 = document.createElement(`tr2`)
thead.appendChild(tr2)

const th1 = document.createElement(`th1`)
th1.innerText = "Fizika területe"
tr.appendChild(th1)
const th2 = document.createElement(`th2`)
th2.innerText = "Időszak"
tr.appendChild(th2)
const th3 = document.createElement(`th3`)
th3.innerText = "Képviselő"
th3.colSpan=2
tr.appendChild(th3)

const td1 = document.createElement(`td1`)
td1.innerText = arr.theme 
tr2.appendChild(td1)
const td2 = document.createElement(`td2`)
td2.innerText = arr.time
tr2.appendChild(td2)
const td3 = document.createElement(`td3`)
td3.innerText = arr.scientist1
tr2.appendChild(td3)