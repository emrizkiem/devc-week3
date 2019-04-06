var OutData = "";
var idData = document.getElementById('idData')
for (var i = 0; i <= DataObj.length - 1; i++) {
    OutData += "<tr><td class='nbr'>"
    OutData += (i + 1)
    OutData += "</td><td>"
    OutData += DataObj[i].name
    OutData += "</td><td>"
    OutData += DataObj[i].diameter
    OutData += "</td><td>"
    OutData += DataObj[i].climate
    OutData += "</td><td>"
    OutData += DataObj[i].gravity
    OutData += "</td><td>"
    OutData += DataObj[i].population
    OutData += "</td>"
    OutData += "</tr>"
}
idData.innerHTML = OutData

// function btnAdd() {
//     var btn = document.getElementById("divAdd");
//     if (btn.style.display === "none") {
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";
//     }
// }

// function btnSave() {
//     var nbr = document.getElementsByClassName('nbr')
//     nbr = nbr[nbr.length - 1].innerHTML
//     nbr = parseInt(nbr)
//     var input = document.getElementsByTagName('input');
//     OutData += "<tr><td class='nbr'>" + eval(nbr + 1) + "</td>"
//     OutData += "<td>" + input[0].value + "</td>"
//     OutData += "<td>" + input[1].value + "</td>"
//     OutData += "<td>" + input[2].value + "</td>"
//     OutData += "<td>" + input[3].value + "</td>"
//     OutData += "<td>" + input[4].value + "</td>"
//     OutData += "</tr>"
//     idData.innerHTML += OutData
// }