startday = new Date();
clockStart = startday.getTime();
var txt = "";
var cont = 1;
var Lista = [0, 0, 0, 0, 0, 0, 0, 0];
var Total = 0;

function Fecha() {

    var Fecha;
    var date = new Date();
    var d = date.getDate();
    var day = (d < 10) ? '0' + d : d;
    var m = date.getMonth() + 1;
    var month = (m < 10) ? '0' + m : m;
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
    Fecha = "Fecha: " + day + "/" + month + "/" + year + " Hora:  ";
    return Fecha;
}

function startTime() {
    var today = new Date();
    var hh = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dd = "AM";

    var h = hh;
    if (h >= 12) {
        h = hh - 12;
        dd = "PM";
    }
    if (h == 0) {
        h = 12;
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('reloj').innerHTML = Fecha() + h + ":" + m + ":" + s + " " + dd;

    t = setTimeout('startTime()', 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}
window.onload = function() {
        startTime();
    }
    /*----------    ---- CODIGOFORMULARIO 1------   -----*/
function obtenerDatos() {


    var Producto = document.getElementById("idP").value;
    var Existencias = document.getElementById("idC").value;
    var Precio = document.getElementById("idPr").value;
    var Descripcion = document.getElementById("idD").value;

    txt = txt + "<li>" + "<h3>" + "calzado " + cont + " </h3>" +
        "<p>" + "Nombre del calzado: " + Producto + "</p>" +
        "<p>" + "Cantidad de producto: " + Existencias + "</p>" +
        "<p>" + "Precio: " + Precio + "</p>" +
        "<p>" + "Descripcion del calzado: " + Descripcion + "</p>" + "</li>";
    cont++;
    document.getElementById('lista').innerHTML = txt;
}

function total() {

    Total = 550 * Lista[0] + 650 * Lista[1] + 750 * Lista[2] + 420 * Lista[3] + 1350 * Lista[4] +
        620 * Lista[5] + 590 * Lista[6] + 450 * Lista[7];

    document.getElementById("idTotal").innerHTML = "Total:    $" + Total;
}


function agregar(pos) {

    Lista[pos]++;

    if (pos == 0) {
        document.getElementById("id0").innerHTML = "Cantidad: " + Lista[pos];
    } else if (pos == 1) {
        document.getElementById("id1").innerHTML = "Cantidad: " + Lista[pos];
    } else if (pos == 2) {
        document.getElementById("id2").innerHTML = "Cantidad: " + Lista[pos];
    } else if (pos == 3) {
        document.getElementById("id3").innerHTML = "Cantidad: " + Lista[pos];
    } else if (pos == 4) {
        document.getElementById("id4").innerHTML = "Cantidad: " + Lista[pos];
    } else if (pos == 5) {
        document.getElementById("id5").innerHTML = "Cantidad: " + Lista[pos];
    } else if (pos == 6) {
        document.getElementById("id6").innerHTML = "Cantidad: " + Lista[pos];
    } else {
        document.getElementById("id7").innerHTML = "Cantidad: " + Lista[pos];
    }
    document.getElementById("idPagar").innerHTML = "";
    total();
}

function pagar() {

    var x = 0;
    for (x in Lista) {
        Lista[x] = 0;
    }

    document.getElementById("idPagar").innerHTML = "SE PAGO $" + Total;
    total();
    document.getElementById("id0").innerHTML = "Cantidad: " + Lista[0];
    document.getElementById("id1").innerHTML = "Cantidad: " + Lista[1];
    document.getElementById("id2").innerHTML = "Cantidad: " + Lista[2];
    document.getElementById("id3").innerHTML = "Cantidad: " + Lista[3];
    document.getElementById("id4").innerHTML = "Cantidad: " + Lista[4];
    document.getElementById("id5").innerHTML = "Cantidad: " + Lista[5];
    document.getElementById("id6").innerHTML = "Cantidad: " + Lista[6];
    document.getElementById("id6").innerHTML = "Cantidad: " + Lista[7];
}