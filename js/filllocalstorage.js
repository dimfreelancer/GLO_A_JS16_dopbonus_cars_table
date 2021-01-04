'use strict';

const addModelToAppData = (id, brand, model, year, mileage) => {
    appData.push( {
        id, 
        brand, 
        model, 
        year, 
        mileage
    });
};


let appData = [];

appData = JSON.parse(localStorage.getItem('model'));
// console.log('appData in clear: ', appData);


addModelToAppData( 0, 'Mazda', 'x10', 2020, 10000 );
addModelToAppData( 1, 'Audi', 'A9', 2010, 55000);
addModelToAppData( 2, 'mazda', '3', 2010, 55000);
addModelToAppData( 3, 'BMW', 'x3', 2010, 155000);
addModelToAppData( 4, 'Renault', 'x2', 2020, 45000);
addModelToAppData( 5, 'VW', 'cc', 2005, 95000);
addModelToAppData( 6, 'Toyota', 'model-x', 2005, 95000);
    
localStorage.setItem('model', JSON.stringify(appData));





