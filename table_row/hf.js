/**
 * @type {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}}
 */

const arr = [
    {
        nationality: 'Orosz',
        author1: 'Gogol',
        literarypiece1: 'A köpönyeg',
        author2: 'Csehov',
        literarypiece2: 'A csinovnyik halála',
    },
    {
        nationality: 'Cseh',
        author1: 'Franz Kafka',
        literarypiece1: 'Az átváltozás',
    },
    {
        nationality: 'Magyar',
        author1: 'Örkény István',
        literarypiece1: 'gyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svácj',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const a = ['Nemzetiség', 'Szerző', 'Mű'];
for(let i of a) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = i;
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for(let a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

      
    
    const tr2_td1 = document.createElement('td');
    tr2_td1.addEventListener("click", function(e){
    /** 
     * @type {HTMLTableCellElement}
     * */
    const a = e.target;
    a.classList.add("marked")
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
        tbody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = a.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = a.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}

const element = document.getElementById("htmlform");
element.addEventListener("submit", function(e){
    //default mukodes egy get-et kuld
    e.preventDefault(); //meggatolja az alapertelmezett mukodest
    /**
     * @type {HTMLFormElement}
     */
    const event = e.target;
    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = event.querySelector("#nemzetiseg");
    /**
     * @type {string}
     */
    const nemz_v = nemzetiseg.value

    /**
     * @type {HTMLInputElement}
     */
    const szerzo1 = event.querySelector("#szerzo1");
    /**
     * @type {string}
     */
    const szer1_v = szerzo1.value

    /**
     * @type {HTMLInputElement}
     */
    const szerzo2 = event.querySelector("#szerzo2");
    /**
     * @type {string}
     */
    const szer2_v = szerzo2.value

    /**
     * @type {HTMLInputElement}
     */
    const mu1 = event.querySelector("#mu1");
    /**
     * @type {string}
     */
    const mu1_v = mu1.value

    /**
     * @type {HTMLInputElement}
     */
    const mu2 = event.querySelector("#mu2");
    /**
     * @type {string}
     */
    const mu2_v = mu2.value

    /**@type {{nationality:string, author1:string, author2?:string, literarypiece1?:string, literarypiece2?:string}} */
    const obj = {}
    obj.nationality = nemz_v;
    obj.author1 = szer1_v;
    obj.author2 = szer2_v;
    obj.literarypiece1 = mu1_v;
    obj.literarypiece2 = mu2_v;

    const tbo = document.getElementById("test")
    
    const tr = document.createElement("tr");
    tbo.appendChild(tr)

    const tr_td1 = document.createElement('td');
    tr_td1.innerText = obj.nationality;
    tr.appendChild(tr_td1);

    const tr_td2 = document.createElement('td');
    tr_td2.innerText = obj.author1;
    tr.appendChild(tr_td2);

    const tr_td3 = document.createElement('td');
    tr_td3.innerText = obj.literarypiece1;
    tr.appendChild(tr_td3);

    if (obj.author2 != "" && obj.literarypiece2 != "") {
        const tr2 = document.createElement('tr');
        tbo.appendChild(tr2);

        const tr2_td2 = document.createElement('td');
        tr2_td2.innerText = obj.author2;
        tr2.appendChild(tr2_td2);

        const tr2_td3 = document.createElement('td');
        tr2_td3.innerText = obj.literarypiece2;
        tr2.appendChild(tr2_td3);

        tr_td1.rowSpan = 2;
    }

})

const form = document.createElement("form")
form.id = "jsform";
document.body.appendChild(form)

/**
 * @param {string} labelText - label szövege
 * @param {string} inputType - input típusa (pl. text)
 * @param {string} inputId - input id-ja
 * @param {HTMLElement} forms - amihez hozzáadjuk
 */
function createInputField(form, id, labelContent) {
    const label = document.createElement('label'); 
    label.htmlFor = id; 
    label.innerText = labelContent; 
    form.appendChild(label);

    const input = document.createElement("input");
    input.type = inputType;
    input.id = id;
    input.name = id;
    form.appendChild(input)

    
}
    createInputField(form, 'Nemzetiség', 'nemzetiseg'); 
    createInputField(form, 'Szerző', 'korszak'); 
    createInputField(form, 'Mű', 'szerelem1'); 
    
