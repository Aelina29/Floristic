class Order{
  constructor(date, time, discription, adress) {
    this.date = date;
    this.time = time;
    this.discription = discription;
    this.adress = adress;
  }
}

class Table {
  constructor() {
    this.map = new Map();
    this.count = 0;
  }
  AddOrder(ord)
  {
    this.count++;
    this.map.set(this.count+1, ord);
  }
  DeleteOrderBuId(id)
  {
    this.count--;
    this.map.delete(id);
  }
}
export {Order}
export {Table}