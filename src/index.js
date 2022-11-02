import {Table} from "../src/table";
import {Order} from "../src/table";

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = addOrder;
    document.getElementById('deleteButton').onclick = deleteOrder;
}

let table = new Table();
//загрузить из бд

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
    //почистить таблицу!!!
    const tableB = document.querySelector('tbody');
    tableB.remove();

    const tableBody = document.createElement('tbody');
    document.getElementById('table').appendChild(tableBody);

    //const tableBody = document.getElementById('tableBody');
    //table.map.forEach(element => {let row = createRow(element); tableBody.appendChild(row);});
    table.map.forEach((value, key) => {let row = createRow(value, key); tableBody.appendChild(row);});

}

function addOrder(){
    const data = document.getElementById('data').value;
    const time = document.getElementById('time').value;
    const disc = document.getElementById('description').value;
    const adr = document.getElementById('data').value;
    let ord = new Order("17.05.22","9.00","Белые розы 31 шт","Соборный 22");
    //let ord = new Order(data,time,disc,adr);
    table.AddOrder(ord);
    redrawTable();
}

function deleteOrder(){
    const deleteId = Number(document.getElementById('deleteId').value);
    table.DeleteOrderBuId(deleteId);
    redrawTable();
}