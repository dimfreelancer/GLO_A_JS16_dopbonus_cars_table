'use strict';

/** напишем функцию добавки одной записи в массиив обктов */
const addModelToAppData = (id, brand, model, year, mileage) => {
    appData.push( {id, brand, model, year, mileage} );
};

/** TODO собираем массив объектов  */
let appData = [];
// console.log('appData: ', appData);

// appData.push( 
//     {   
//         'id':0,
//         'brand':'Mazda',
//         'model':'x10',
//         'year':2020,
//         'mileage':10000
//     });
    
// console.log('appData: ', appData);

// let id = 1;
// let brand = 'Opel';
// let model = 'CC';
// let year = 2019;
// let mileage = '50000';
// appData.push( {id, brand, model, year, mileage} );

// console.log('appData: ', appData); 



// addModelToAppData( 2, 'mazda', '3', 2010, 55000);
// addModelToAppData( 3, 'BMW', 'x3', 2010, 155000);
// addModelToAppData( 4, 'Renault', 'x2', 2020, 45000);
// addModelToAppData( 5, 'VW', 'cc', 2005, 95000);
// addModelToAppData( 5, 'Toyota', 'model-x', 2005, 95000);


// console.log('appData: ', appData); 


// let appDataJSON = JSON.stringify(appData);
// console.log('appDataJSON: ', appDataJSON);

// /** запись обкта в хранилище localstorage */
// localStorage.setItem('model', appDataJSON);





/** читаем из localstorage */
// let readMyJSON = localStorage.getItem('model');
// // console.log('readMyJSON: ', readMyJSON);

// /** преобразуем в обычный обкт */
// let myAppData = JSON.parse(readMyJSON);
// console.log('myAppData: ', myAppData); 


const readFromLocalStorage = () => {
    appData = JSON.parse( localStorage.getItem('model') );
};
readFromLocalStorage();
// console.log('appData: ', appData);






const btnAddCar = document.getElementById('btn-add-car');
const btnFilter = document.getElementById('btn-filter');
const btnRender = document.getElementById('btn-render');
console.log('btnAddCar: ', btnAddCar);
console.log('btnFilter: ', btnFilter);
console.log('btnRender: ', btnRender);
const tableContainer = document.querySelector('.table-container');


btnAddCar.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
});




btnRender.addEventListener('click', (event) => {
    console.log('lets render table');

const tableHead = `
<thead>
  <tr>
    <th>№</th>
    <th>Марка brand</th>
    <th>Модель model</th>
    <th>Год выпуска year</th>
    <th>Пробег mileage</th>
  </tr>
</thead>`;

let tableBody = '';

tableBody += '<tbody>';
for (let value of appData) {
    // console.log('item: ', value);
    // let id = ''
    let brand = value.brand;
    let model = value.model;
    let mileage = value.mileage;
    
    tableBody += `
<tr>
  <th>3</th>
  <td>${brand}</td>
  <td>${model}</td>
  <td>2010</td>
  <td>${mileage}</td>
</tr>`;
    
    // console.log(brand, model, mileage);
}




tableBody += '</tbody>';





const tableFoot = `
<tfoot>
  <td>Итого</td>
  <td></td>
  <td></td>
  <td>2002..2021</td>
  <td>71500</td>
</tfoot>`;

const tableStructure = `<table class="table table-striped table-hover">
  <caption class="caption-top">Список автомобилей в таблце</caption>
  ${tableHead}
  ${tableBody}
  ${tableFoot}
</table>`;

//записываем эти в структуру html
tableContainer.innerHTML = tableStructure;

console.log(tableStructure);

});
