/**
 * @type {{writer:string, time:string, lover:string, otherlover?:string}[]}
 */
const arr = [
    {
        writer: 'Balassi Bálint',
        time: 'reformáció',
        lover: 'Losonczy Anna',
        otherlover: 'Dobó Krisztina',
    },
    {
        writer: 'Csokonai Vitéz Mihály',
        time: 'felvilágosodás',
        lover: 'Vajda Juliána',
    },
    {
        writer: 'Petőfi Sándor',
        time: 'magyar romantika',
        lover: 'Mednyánszky Berta',
        otherlover: 'Szendrey Júlia',
    },
    {
        writer: 'Ady Endre',
        time: '20. század',
        lover: 'Léda',
        otherlover: 'Csinszka',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

//thead, th-k
const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

createElement('th', "Szerző neve", tr)
createElement('th', "Korszak", tr)
const th3 = createElement('th', "Szerelmek", tr)

//tbody, td-k
const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    //const tr_td1 = document.createElement('td');
    //tr_td1.innerText = a.writer;
    //tr.appendChild(tr_td1);

    //const tr_td2 = document.createElement('td');
    //tr_td2.innerText = a.time;
    //tr.appendChild(tr_td2);

    //const tr_td3 = document.createElement('td');
    //tr_td3.innerText = a.lover;
    //tr.appendChild(tr_td3);

    createElement('td', a.writer, tr2)
    createElement('td', a.time, tr2)
    const td3 = createElement('td', a.lover, tr2)

    if(a.otherlover != undefined) {
        createElement('td', a.otherlover, tr2)
    }
    else {
        td3.colSpan = "2"
        th3.colSpan = "2"
    }
}

/**
 * @param {string} celltype
 * @param {string} cellcontent
 * @param {HTMLTableRowElement} cellrow
 * @returns {HTMLTableCellElement} 
 */
function createElement(celltype, cellcontent, cellrow){

    const cell = document.createElement(celltype);
    cell.innerText = cellcontent;
    cellrow.appendChild(cell)

    return cell
}
