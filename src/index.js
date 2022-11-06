import {Table} from "../src/table";
import {Order} from "../src/table";
import {IsTime} from "../src/table";
import {IsDate} from "../src/table";

document.addEventListener('DOMContentLoaded',setup);

function setup() {
    document.getElementById('addButton').onclick = addOrder;
    document.getElementById('deleteButton').onclick = deleteOrder;
}

let table = new Table();
//загрузить из бд?

function createRow(ord,id)
{
    let row = document.createElement('tr');
    let d1 = document.createElement('td');
    d1.innerHTML = id;
    row.appendChild(d1);
    let d2 = document.createElement('td');
    d2.innerHTML = ord.date;
    row.appendChild(d2);
    let d3 = document.createElement('td');
    d3.innerHTML = ord.time;
    row.appendChild(d3);
    let d4 = document.createElement('td');
    d4.innerHTML = ord.discription;
    row.appendChild(d4);
    let d5 = document.createElement('td');
    d5.innerHTML = ord.adress;
    row.appendChild(d5);
    return row;
}

function redrawTable()
{
    const tableB = document.querySelector('tbody');
    tableB.remove();
    const tableBody = document.createElement('tbody');
    document.getElementById('table').appendChild(tableBody);
    table.map.forEach((value, key) => {let row = createRow(value, key); tableBody.appendChild(row);});
}

function addOrder(){
    let f = 1;
    const data = document.getElementById('data').value;
    if (!IsDate(data)) {alert("Wrong Date!!!"); f = 0;}
    const time = document.getElementById('time').value;
    if (!IsTime(time)) {alert("Wrong Time!!!"); f = 0;}
    const disc = document.getElementById('description').value;
    const adr = document.getElementById('address').value;
    let ord = new Order("17.05.22","9.00","Белые розы 31 шт","Соборный 22");
    //let ord = new Order(data,time,disc,adr);
    if (f) table.AddOrder(ord);
    redrawTable();
}

function deleteOrder(){
    const deleteId = Number(document.getElementById('deleteId').value);
    table.DeleteOrderBuId(deleteId);
    redrawTable();
}