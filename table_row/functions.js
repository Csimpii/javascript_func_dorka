/**
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} countrywriters
 */

/**
 * 
 * @param {HTMLTableSelection} tablebody
 * @param {countrywriters[]} countrywriters
 */
function renderTableRow(tablebody, countrywriters){
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const valtozo = e.target;

        const tr = valtozo.parentElement;
        const tbody = tr.parentElement;
        const alrmarked = tbody.querySelector('.marked');

        if (alrmarked !== null) {
            alrmarked.classList.remove('marked');
        }

        valtozo.classList.add("marked");
    });
    tr2_td1.innerText = countrywriters.nationality;
    tr2.appendChild(tr2_td1);

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = countrywriters.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = countrywriters.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (a.author2 != undefined && a.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tablebody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = countrywriters.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = countrywriters.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}

/**
 * 
 * @param {countrywriters} 
 */
function renderTableBody(array) {
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = "";

    for(let a of array) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const valtozo = e.target;

        const tr = valtozo.parentElement;
        const tbody = tr.parentElement;
        const alrmarked = tbody.querySelector('.marked');

        if (alrmarked !== null) {
            alrmarked.classList.remove('marked');
        }

        valtozo.classList.add("marked");
    });

    tr2_td1.innerText = a.nationality;
    tr2.appendChild(tr2_td1);

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = a.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = a.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (a.author2 != undefined && a.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tablebody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = a.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = a.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}
}

/**
 * 
 * @param {'td'|'th'} cellType 
 * @param {string}  cellContent
 * @param {HTMLTableRowElement} parentRow
 * @returns
 */
function createCell(cellType, cellContent, parentRow){
    const cell = document.createElement(cellType); 
    cell.innerText = cellContent; 
    parentRow.appendChild(cell); 
    return cell;
}

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {*} headerList 
 */
function generateHeader(table, headerList){
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    
    for(let i of headerList){
        createCell('th', i, tr)
    }
    return thead;
}

/**
 * 
 * @param {SubmitEvent} e 
 */
function htmlFormEventListener(e){
    e.preventDefault(); //alapértelmezett működést gátolja
    /**
     * @type {HTMLFormElement}
     */
    const event = e.target;

    /** @type {HTMLInputElement} */
    const nemzetiseg = event.querySelector("#nemzetiseg");
    /** @type {string} */
    const nemzetisegvalue = nemzetiseg.value;

    /** @type {HTMLInputElement} */
    const szerzo1 = event.querySelector("#szerzo1");
    /** @type {string} */
    const szerzo1value = szerzo1.value;

    /** @type {HTMLInputElement} */
    const szerzo2 = event.querySelector("#szerzo2");
    /** @type {string} */
    const szerzo2value = szerzo2.value;

    /** @type {HTMLInputElement}*/
    const mu1 = event.querySelector("#mu1");
    /** @type {string} */
    const mu1value = mu1.value;

    /** @type {HTMLInputElement} */
    const mu2 = event.querySelector("#mu2");
    /** @type {string} */
    const mu2value = mu2.value;

    /** 
     * @type {countrywriter[]} 
     */
    const obj2 = {}
    obj2.nationality = nemzetisegvalue;
    obj2.author1 = szerzo1value;
    obj2.literarypiece1 = mu1value;

    if (szerzo2value && mu2value) {
        obj2.author2 = szerzo2value;
        obj2.literarypiece2 = mu2value;
    }

    arr.push(obj2);
    renderTableBody(arr);
}

/**
 * @param {countrywriters[]}
 */
function renderTableBody(array){
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = "";

    for(let a of array){
        renderTableRow(tablebody, a)
    }
}

/**
 * @param {string} labelText - label szövege
 * @param {string} inputId - input id-ja
 * @param {HTMLElement} forms - amihez hozzáadjuk
 */
function createFormElement(forms, id, labelContent) {
    const div = document.createElement('div');
    forms.appendChild(div);

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;
    forms.appendChild(label);

    const br1 = document.createElement('br');
    forms.appendChild(br1);

    const input = document.createElement('input');
    input.id = id;
    div.appendChild(input);

    const br2 = document.createElement('br');
    forms.appendChild(br2);

    const br3 = document.createElement('br');
    forms.appendChild(br3);

    const span = document.createElement('span');
    classList.add;
    div.appendChild(span);
}


function validateFields(inputfield1,inputfield2, inputfield3){
    const valid = true;
    if(inputfield1.value == ""){
        
        valid = false;
    }

    return valid;
}