'use strict';

// ключ доступа в localStorage
const KEY = 'model';

let appData = [];
// console.log('appData: ', appData);

/** напишем функцию добавки одной записи в массиив обктов */
const addModelToAppData = (brand, model, year, mileage) => {

  if (localStorage.getItem(KEY)) {
    //проверка есть что-то в хранилище
    appData = JSON.parse(localStorage.getItem(KEY));
  } else {
    //если в хранилище пусто сохраняем пустой массив
    appData = [];
  }

  //добавляем нужную модель в массив
  appData.push( {brand, model, year, mileage} );

  //выгружаем обратно в хранилище
  localStorage.setItem(KEY, JSON.stringify(appData));
};


/** TODO собираем массив объектов  */
// appData.push( 
//     {   
//         'id': 0,
//         'brand': 'Mazda',
//         'model': 'x10',
//         'year': 2020,
//         'mileage': 10000
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
//  addModelToAppData( 4, 'Renault', 'x2', 2020, 45000);
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

  if (localStorage.getItem('model')) {
    
    appData = JSON.parse( localStorage.getItem('model') );
  } else {

    console.log('localStorage is empty');
    appData = [];
  }

};
readFromLocalStorage();
// console.log('appData: ', appData);


//находим нужные кнопочки
const btnAddCar = document.getElementById('btn-add-car');
const btnFilter = document.getElementById('btn-filter');
const btnRender = document.getElementById('btn-render');
console.log('btnAddCar: ', btnAddCar);
console.log('btnFilter: ', btnFilter);
console.log('btnRender: ', btnRender);
//находим нужный контейнер для выгрузки списка
const tableContainer = document.querySelector('.table-container');


const renderTable = () => {

  if (tableContainer) {
    console.log('tableContainer существует и добавим таблицу сюда');

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
      let tableIndex = 0;
      tableBody += '<tbody>';
      for (let value of appData) {
          // console.log('item: ', value);
          // let id = ''
          let brand = value.brand;
          let model = value.model;
          let mileage = value.mileage;
          
          tableBody += `
      <tr>
        <th>${ ++tableIndex }</th>
        <td>${brand}</td>
        <td>${model}</td>
        <td>2010</td>
        <td>${mileage}</td>
      </tr>`;
      } //for
    
      tableBody += '</tbody>';
    
      const tableFoot = `
    <tfoot>
      <td>Итого</td>
      <td></td>
      <td></td>
      <td>года</td>
      <td>суммарный пробег</td>
    </tfoot>`;
    
      const tableStructure = `<table class="table table-striped table-hover">
      <caption class="caption-top">Список автомобилей в таблце</caption>
      ${tableHead}
      ${tableBody}
      ${tableFoot}
    </table>`;
    
      //записываем эти в структуру html
      tableContainer.innerHTML = tableStructure;

  } else {
    console.log('tableContainer null не найден');
  } 
};



btnAddCar.addEventListener('click', (e) => {
  const target = e.target;
  console.log('Добавим машину сюда', target);
  console.log('appData: ', appData);

  //читаем значения из формы инпутов
  const inputAddBrand = document.getElementById('input-add-brand');
  const inputAddModel = document.getElementById('input-add-model');
  const inputAddYear = document.getElementById('input-add-year');
  const inputAddMileage = document.getElementById('input-add-mileage') ;

  const brand = inputAddBrand.value;
  const model = inputAddModel.value;
  const year = inputAddYear.value;
  const mileage = inputAddMileage.value;
  console.log('mileage: ', mileage);
  

  if ( brand || model || year || mileage ) {
    
    //проверяем хотя бы какоето поле заполнено
    addModelToAppData( brand, model, year, mileage );
    // addModelToAppData( 111, 'Mazda', '13', 2010, 55000);
  } else {
    alert('Ни одно поле в форме не заполнено, заполните поля');
    console.log('Ни одно поле в форме не заполнено, заполните поля');
  }

  console.log('appData: ', appData);

  //перестариваем таблицу
  renderTable();
});


btnRender.addEventListener('click', (event) => {
  console.log('Построим таблицу здесь, lets render table');

  renderTable();

//   const tableHead = `
// <thead>
//   <tr>
//     <th>№</th>
//     <th>Марка brand</th>
//     <th>Модель model</th>
//     <th>Год выпуска year</th>
//     <th>Пробег mileage</th>
//   </tr>
// </thead>`;

//   let tableBody = '';

//   tableBody += '<tbody>';
//   for (let value of appData) {
//       // console.log('item: ', value);
//       // let id = ''
//       let brand = value.brand;
//       let model = value.model;
//       let mileage = value.mileage;
      
//       tableBody += `
//   <tr>
//     <th>3</th>
//     <td>${brand}</td>
//     <td>${model}</td>
//     <td>2010</td>
//     <td>${mileage}</td>
//   </tr>`;
    
//     // console.log(brand, model, mileage);
//   }

//   tableBody += '</tbody>';

//   const tableFoot = `
// <tfoot>
//   <td>Итого</td>
//   <td></td>
//   <td></td>
//   <td>2002..2021</td>
//   <td>71500</td>
// </tfoot>`;

//   const tableStructure = `<table class="table table-striped table-hover">
//   <caption class="caption-top">Список автомобилей в таблце</caption>
//   ${tableHead}
//   ${tableBody}
//   ${tableFoot}
// </table>`;

//   //записываем эти в структуру html
//   tableContainer.innerHTML = tableStructure;

  // console.log(tableStructure);

});//btnRender.addEventListener

