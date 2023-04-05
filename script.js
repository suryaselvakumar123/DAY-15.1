var tableData =[
    {
        "Name": "Oliver_Bryant",
        "Place": "Easthampton",
        "Phone": "367-532-9812 x230",
        "id": "1"
      },
      {
        "Name": "Rachel_Palmer17",
        "Place": "Westonshire",
        "Phone": "(434) 220-4677 x9583",
        "id": "2"
      },
      {
        "Name": "Nash_Salazar",
        "Place": "Port Syblemouth",
        "Phone": "1-888-358-8355 x733",
        "id": "3"
      },
      {
        "Name": "Kaya_Brooks",
        "Place": "New Darrylview",
        "Phone": "(205) 775-5508 x327",
        "id": "4"
      },
      {
        "Name": "Aiden_Gonzalez6",
        "Place": "West Elenorafort",
        "Phone": "393.147.8728",
        "id": "5"
      },
      {
        "Name": "Aria_Harris55",
        "Place": "Lake Rainamouth",
        "Phone": "(625) 791-0873 x54150",
        "id": "6"
      },
      {
        "Name": "Harrison_Wilson",
        "Place": "North Tania",
        "Phone": "729-237-1709",
        "id": "7"
      },
      {
        "Name": "Noelle_Carney",
        "Place": "East Antonioton",
        "Phone": "1-633-752-2672",
        "id": "8"
      },
      {
        "Name": "Cameron_Gill",
        "Place": "Lake Jalyn",
        "Phone": "(694) 875-4761 x648",
        "id": "9"
      },
      {
        "Name": "Dalia_Figueroa4",
        "Place": "New Olabury",
        "Phone": "964.954.0077 x4041",
        "id": "10"
      },
      {
        "Name": "Eli_Haynes",
        "Place": "East Miloview",
        "Phone": "1-744-729-0295",
        "id": "11"
      },
      {
        "Name": "Ella_Glover",
        "Place": "Port Aubreeshire",
        "Phone": "(664) 660-9668 x389",
        "id": "12"
      },
      {
        "Name": "Maddox_Mcintyre",
        "Place": "North Travis",
        "Phone": "266.837.7255",
        "id": "13"
      },
      {
        "Name": "Evangeline_Harding",
        "Place": "Lake Malvinatown",
        "Phone": "(492) 427-1402 x025",
        "id": "14"
      },
      {
        "Name": "Jaxson_Bowers",
        "Place": "South Ramiro",
        "Phone": "1-415-915-1351 x977",
        "id": "15"
      },
      
   ]
console.log(typeof tableData)
var state = {
'querySet': tableData,
'page': 1,
'rows': 5,
'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

var trimStart = (page - 1) * rows
var trimEnd = trimStart + rows

var trimmedData = querySet.slice(trimStart, trimEnd)

var pages = Math.round(querySet.length / rows);

return {
    'querySet': trimmedData,
    'pages': pages,
}
}

function pageButtons(pages) {
var wrapper = document.getElementById('pagination-wrapper')

wrapper.innerHTML = ``
console.log('Pages:', pages)

var maxLeft = (state.page - Math.floor(state.window / 2))
var maxRight = (state.page + Math.floor(state.window / 2))

if (maxLeft < 1) {
    maxLeft = 1
    maxRight = state.window
}

if (maxRight > pages) {
    maxLeft = pages - (state.window - 1)
    
    if (maxLeft < 1){
        maxLeft = 1
    }
    maxRight = pages
}



for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
}

if (state.page != 1) {
    wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
}

if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
}

$('.page').on('click', function() {
    $('#table-body').empty()

    state.page = Number($(this).val())

    buildTable()
})

}

function buildTable() {
var table = $('#table-body')

var data = pagination(state.querySet, state.page, state.rows)
var myList = data.querySet;
var i = 1;
for ( i  in myList) {
    var row = `<tr>
              <td>${myList[i].id}</td>
              <td>${myList[i].Name}</td>
              <td>${myList[i].Place}</td>
              <td>${myList[i].Phone}</td>
              </tr>`
    
    table.append(row)
}

pageButtons(data.pages)
}