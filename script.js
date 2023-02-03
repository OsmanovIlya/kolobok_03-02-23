let name_0=prompt("Роль - колобок");
let name_1=prompt("Роль - Дед");
let name_2=prompt("Роль - Заяц");
let name_3=prompt("Роль - Рассказчик");

alert (`${name_0}
${name_1}
${name_2}
${name_3}`)

let div_0 = document.createElement('div');
let div_1 = document.createElement('div');
let div_2 = document.createElement('div');

div_0.innerHTML = "Жили-были старик со старухой. Вот и говорит старик старухе " + name_3;
document.body.append(div_0);

div_1.innerHTML = "Поди-ка, старуха, по коробу поскреби, по сусеку помети, не наскребешь ли муки на колобок " + name_1;
document.body.append(div_1);



div_0.className = "msg1";
    div_0.innerHTML = "Привет - " + name_0;
    document.body.append(div_0);

div_1.className = "msg2";
    div_1.innerHTML = "Пока - " + name_1;
    document.body.append(div_1);    
    

