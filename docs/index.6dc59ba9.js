class e{constructor(e,t,n,r,i){this.id=e,this.date=t,this.time=n,this.discription=r,this.adress=i}}function t(e,t){let n=e.split("."),r=t.split(".");if(Number(n[0])<Number(r[0]))return-1;if(Number(n[0])>Number(r[0]))return 1;if(Number(n[0])==Number(r[0])){if(Number(n[1])<Number(r[1]))return-1;if(Number(n[1])>Number(r[1]))return 1;if(Number(n[1])==Number(r[1]))return 0}}function n(e,t){let n=e.date.split("-"),r=t.date.split("-");return Number(n[2])<Number(r[2])?-1:Number(n[2])>Number(r[2])?1:Number(n[1])<Number(r[1])?-1:Number(n[1])>Number(r[1])?1:Number(n[0])<Number(r[0])?-1:Number(n[0])>Number(r[0])?1:Number(n[0])==Number(r[0])?0:void 0}function r(e){const t=e.split(".");if(2!=t.length)return!1;const n=Number(t[0]);if(isNaN(n))return!1;if(n<0||n>23)return!1;const r=Number(t[1]);return!isNaN(r)&&!(r<0||r>59)}function i(e){const t=e.split("-");if(3!=t.length)return!1;for(let e=0;e<3;e++)if(isNaN(Number(t[e])))return!1;return!(t[1]>12)&&(!(t[1]=t[0]>28)&&(t[1]=12,!(t[0]>31)&&(t[1]=4,!(t[0]>30))))}function d(){$("#popup1").show(),document.getElementById("auth-form").addEventListener("submit",s,{once:!0})}function s(e){e.preventDefault();const t=e.target.querySelector("#email").value,n=e.target.querySelector("#password").value,r=e.target.querySelector("button");r.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwGCR0qESPJ02eV5G2YS7HaXD9K-0IRhw",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(t,n).then((e=>{console.log(e),console.log(t),e?document.getElementById("demo").innerHTML="You:  "+t:alert("Ошибка!!!"),$("#popup1").hide()})).then((()=>r.disabled=!1))}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("addButton").onclick=h,document.getElementById("deleteButton").onclick=g,document.getElementById("sortButton").onclick=u,document.getElementById("histButton").onclick=c,document.getElementById("authButton").onclick=d}));let o=new class{constructor(){this.arr=new Array,this.lastID=0}AddOrder(e){this.arr.push(e),this.lastID++}DeleteOrderById(e){const t=this.arr.findIndex((t=>t.id==e));-1!=t&&this.arr.splice(t,1)}SorByTime(){this.arr.sort(((e,n)=>t(e.time,n.time))),this.arr.sort(n)}};o.AddOrder(new e(o.lastID+1,"17-05-22","9.00","Алые розы 31 шт","Соборный 22")),o.AddOrder(new e(o.lastID+1,"17-05-22","12.30","Желтые тюльпаны 13 шт","Мильчакова 8а")),o.AddOrder(new e(o.lastID+1,"18-05-22","9.00","Тюльпаны желтые и розовые астромерии на 1500","Самовывоз")),o.AddOrder(new e(o.lastID+1,"17-05-22","9.15","Сухоцвет на 1000","Кировский 19")),o.AddOrder(new e(o.lastID+1,"18-05-22","9.15","Розы на выворот, корзина, нежно, 2500","Суворова 21")),o.AddOrder(new e(o.lastID+1,"18-05-22","14.30","Лаванда пучок","Самовывоз")),o.AddOrder(new e(o.lastID+1,"19-05-22","18.30","Свеча девушка торс, лавандовая свеча, пучек лаванды, имбирный пряник","Красноармейская 127 б")),o.AddOrder(new e(o.lastID+1,"18-05-22","18.30","Подсолнухи на 5000","Пушкинская 145")),o.AddOrder(new e(o.lastID+1,"18-05-22","18.30","Имбирный пряник 4, Открытка с днем матери любая, букет на 2500 яркий","Доломановский 12")),m();const l=document.getElementById("myCanvas");l.width=300,l.height=300;let a=new class{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.colors=["#a55ca5","#67b6c7","#bccd7a","#eb9743"],this.padding=20,this.gridScale=1,this.gridColor="#555454"}draw(e){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let n=new Array,r=e.keys();for(let t=0;t<e.size;t++)n.push(r.next().value);n=n.sort(t);let i=0;for(let t of e.values())i=Math.max(i,t);let d=this.canvas.height-2*this.padding,s=this.canvas.width-2*this.padding,o=0;for(;o<=i;){let e=d*(1-o/i)+this.padding;l=this.ctx,a=0,c=e,u=this.canvas.width,m=e,h=this.gridColor,l.save(),l.strokeStyle=h,l.beginPath(),l.moveTo(a,c),l.lineTo(u,m),l.stroke(),l.restore(),this.ctx.save(),this.ctx.fillStyle=this.gridColor,this.ctx.textBaseline="bottom",this.ctx.font="bold 10px Arial",this.ctx.fillText(o,10,e-2),this.ctx.restore(),o+=this.gridScale}var l,a,c,u,m,h;let g=0,p=s/e.size;const f=Math.round(d/i);n.forEach((t=>{let n=f*e.get(t);!function(e,t,n,r,i,d){e.save(),e.fillStyle=d,e.fillRect(t,n,r,i),e.restore()}(this.ctx,this.padding+g*p,this.canvas.height-n-this.padding,p,n,this.colors[g%this.colors.length]),g++})),g=0;let b=d+this.padding+15,y=this.padding+2;n.forEach((e=>{this.ctx.fillText(e,y,b),g++,y+=p}))}}(l);function c(){a.draw(function(){let e=new Map;for(let t=0;t<o.arr.length;t++){let n=o.arr[t].time;e.has(n)?e.set(n,e.get(n)+1):e.set(n,1)}return e}())}function u(){o.SorByTime(),m()}function m(){document.querySelector("tbody").remove();const e=document.createElement("tbody");document.getElementById("table").appendChild(e),o.arr.forEach((t=>{let n=function(e){let t=document.createElement("tr"),n=document.createElement("td");n.innerHTML=e.id,t.appendChild(n);let r=document.createElement("td");r.innerHTML=e.date,t.appendChild(r);let i=document.createElement("td");i.innerHTML=e.time,t.appendChild(i);let d=document.createElement("td");d.innerHTML=e.discription,t.appendChild(d);let s=document.createElement("td");return s.innerHTML=e.adress,t.appendChild(s),t}(t);e.appendChild(n)}))}function h(){let t=1;i(document.getElementById("data").value)||(alert("Wrong Date!!!"),t=0);const n=document.getElementById("time").value;r(n)||(alert("Wrong Time!!!"),t=0);document.getElementById("description").value,document.getElementById("address").value;let d=new e(o.lastID+1,"17-05-22",n,"Белые розы 31 шт","Соборный 22");t&&o.AddOrder(d),m()}function g(){const e=Number(document.getElementById("deleteId").value);o.DeleteOrderById(e),m()}