class Order{
  constructor(id, date, time, discription, adress) {
      this.id = id;
      this.date = date;
      this.time = time;
      this.discription = discription;
      this.adress = adress;
  }
}

class Table {
  constructor() {
    this.arr = new Array();
    this.lastID = 0;
  }
  AddOrder(ord)
  {
    this.arr.push(ord);
    this.lastID++;
  }
  DeleteOrderById(id)
  {
      const ind = this.arr.findIndex(el => el.id == id);
      if (ind!=-1) this.arr.splice(ind, 1);
  }
  SorByTime() {
      this.arr.sort((a,b)=>TimeCompare(a.time, b.time));
      this.arr.sort(DateCompare);
  }
}

function TimeCompare(a,b)
{
  let ar = a.split('.');
  let br = b.split('.');
  if (Number(ar[0]) < Number(br[0])) return -1;
  if (Number(ar[0]) > Number(br[0])) return 1;
  if (Number(ar[0]) == Number(br[0]))
  {
      if (Number(ar[1]) < Number(br[1])) return -1;
      if (Number(ar[1]) > Number(br[1])) return 1;
      if (Number(ar[1]) == Number(br[1])) return 0;
  }
}

function DateCompare(a,b)
{
  let ar = a.date.split('-');
  let br = b.date.split('-');
  if (Number(ar[2]) < Number(br[2])) return -1;
  if (Number(ar[2]) > Number(br[2])) return 1;
  if (Number(ar[1]) < Number(br[1])) return -1;
  if (Number(ar[1]) > Number(br[1])) return 1;
  if (Number(ar[0]) < Number(br[0])) return -1;
  if (Number(ar[0]) > Number(br[0])) return 1;
  if (Number(ar[0]) == Number(br[0])) return 0;
}

function IsTime(str)
{
    const ar = str.split('.');
    if (ar.length != 2) return false;
    const h = Number(ar[0]);
    if (isNaN(h)) return false;
    if (h<0 || h > 23) return false;
    const min = Number(ar[1]);
    if (isNaN(min)) return false;
    if (min<0 || min > 59) return false;
    return true;
}
function IsDate(str)
{
    const ar = str.split('-');
    if (ar.length != 3) return false;
    for (let i = 0; i < 3; i++) {
        if (isNaN(Number(ar[i]))) return false;
    }
    if (ar[1]>12) return false;
    if (ar[1] = 2 && ar[0]>28) return false;
    if (((ar[1] = 12)|| (ar[1] = 1)||(ar[1] = 3)||(ar[1] = 5)||(ar[1] = 7)||(ar[1] = 8)||(ar[1] = 10)) && ar[0]>31) return false;
    if ((((ar[1] = 4)||(ar[1] = 6)||(ar[1] = 9)||(ar[1] = 11)) && ar[0]>30)) return false;
    return true;
}

export {Order}
export {Table}
export {IsTime}
export {IsDate}
export {TimeCompare}