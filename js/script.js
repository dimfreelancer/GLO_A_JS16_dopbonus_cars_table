'use strict';

/** TODO собираем массив объектов  */
const appData = [];
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

/** напишем функцию добавки одной записи в массиив обктов */
const addModelToAppData = (id, brand, model, year, mileage) => {
    appData.push( {id, brand, model, year, mileage} );
};


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
let readMyJSON = localStorage.getItem('model');
console.log('readMyJSON: ', readMyJSON);

/** преобразуем в обычный обкт */
let myAppData = JSON.parse(readMyJSON);
console.log('myAppData: ', myAppData);

