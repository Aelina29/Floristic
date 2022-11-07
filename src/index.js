import {Table} from "../src/table";
import {Order} from "../src/table";
import {IsTime} from "../src/table";
import {IsDate} from "../src/table";
import {Barchart} from "../src/canvas";

document.addEventListener('DOMContentLoaded',setup);

function setup() {
    document.getElementById('addButton').onclick = addOrder;
    document.getElementById('deleteButton').onclick = deleteOrder;
    document.getElementById('sortButton').onclick = sortTime;
    document.getElementById('histButton').onclick = hist;
}

let table = new Table();
//загрузить из бд?
table.AddOrder(new Order(table.lastID+1,"17-05-22","9.00","Алые розы 31 шт","Соборный 22"));
table.AddOrder(new Order(table.lastID+1,"17-05-22","12.30","Желтые тюльпаны 13 шт","Мильчакова 8а"));
table.AddOrder(new Order(table.lastID+1,"18-05-22","9.00","Тюльпаны желтые и розовые астромерии на 1500","Самовывоз"));
table.AddOrder(new Order(table.lastID+1,"17-05-22","9.15","Сухоцвет на 1000","Кировский 19"));
table.AddOrder(new Order(table.lastID+1,"18-05-22","9.15","Розы на выворот, корзина, нежно, 2500","Суворова 21"));
table.AddOrder(new Order(table.lastID+1,"18-05-22","14.30","Лаванда пучок","Самовывоз"));
table.AddOrder(new Order(table.lastID+1,"19-05-22","18.30","Свеча девушка торс, лавандовая свеча, пучек лаванды, имбирный пряник","Красноармейская 127 б"));
table.AddOrder(new Order(table.lastID+1,"18-05-22","18.30","Подсолнухи на 5000","Пушкинская 145"));
table.AddOrder(new Order(table.lastID+1,"18-05-22","18.30","Имбирный пряник 4, Открытка с днем матери любая, букет на 2500 яркий","Доломановский 12"));
redrawTable();

const myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;
let myBarchart = new Barchart(myCanvas);

function hist()
{
    myBarchart.draw(OrderForeachTime());
}

function sortTime()
{
    table.SorByTime();
    redrawTable();
}

function createRow(ord)
{
    let row = document.createElement('tr');
    let d1 = document.createElement('td');
    d1.innerHTML = ord.id;
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
    table.arr.forEach(el => {let row = createRow(el); tableBody.appendChild(row);});
}

function addOrder(){
    let f = 1;
    const data = document.getElementById('data').value;
    if (!IsDate(data)) {alert("Wrong Date!!!"); f = 0;}
    const time = document.getElementById('time').value;
    if (!IsTime(time)) {alert("Wrong Time!!!"); f = 0;}
    const disc = document.getElementById('description').value;
    const adr = document.getElementById('address').value;
    //let ord = new Order(table.lastID+1,"17-05-22","10.00","Белые розы 31 шт","Соборный 22");
    let ord = new Order(table.lastID+1,"17-05-22",time,"Белые розы 31 шт","Соборный 22");
    if (f) table.AddOrder(ord);
    redrawTable();
}

function deleteOrder(){
    const deleteId = Number(document.getElementById('deleteId').value);
    table.DeleteOrderById(deleteId);
    redrawTable();
}

function OrderForeachTime()
{
    let map = new Map();
    for (let i = 0; i< table.arr.length; i++)
    {
        let time = table.arr[i].time;
        if (!map.has(time)) map.set(time,1);
        else {
            map.set(time,map.get(time)+1);
        }
    }
    return map;
}
