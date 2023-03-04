/*
* Author: Balázs Réka
* Copyright: 2023, Balázs Réka
* Group: SzoftI-2-E
* Date: 2023-03-04
* Github: https://github.com/BalazsR2022/gepida
* Licenc: GNU GPL
*/
const tbody = document.querySelector("#tbody");

const name = document.querySelector("#name");
const size = document.querySelector("#size");
const use = document.querySelector("#use");
const price = document.querySelector("#price");

var cars = [
    {name: "cassis", size: 28, use: "offroad", price: 557900},
    {name: "Alboin 900", size: 28, use: "trekking", price: 519900},
    {name: "Asgard", size: 29, use: "technikás utak", price:519900},
    {name: "Ruga", size: 29, use: "hegyi", price:372900},
    {name: "Reptila", size: 28, use: "városi", price: 308900},
    {name: "Sirmium", size: 29, use: "hegyi", price: 264900}
];

function generateTbody(){
    cars.forEach((car) => {
        

        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdSize = document.createElement('td');
        let tdUse = document.createElement('td');
        let tdPrice = document.createElement('td');
        

        tdName.textContent = car.name;
        tdSize.textContent = car.size;
        tdUse.textContent = car.use;
        tdPrice.textContent = car.price;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdSize);
        tr.append(tdUse);
        tr.append(tdPrice);
    });
}
generateTbody();
 
