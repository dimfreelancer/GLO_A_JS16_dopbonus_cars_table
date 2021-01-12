'use strict';

// ключ доступа в localStorage
const KEY = 'model';

let appData = [];

//находим нужные кнопочки
const btnAddCar = document.getElementById('btn-add-car');
const btnFilter = document.getElementById('btn-filter');
const btnRender = document.getElementById('btn-render');
console.log('btnAddCar: ', btnAddCar);
console.log('btnFilter: ', btnFilter);
console.log('btnRender: ', btnRender);

//находим нужный контейнер для выгрузки списка
const tableContainer = document.querySelector('.table-container');

//функция добавки одной записи в массиив обктов
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


const readFromLocalStorage = () => {

  if (localStorage.getItem('model')) {
    
    appData = JSON.parse( localStorage.getItem('model') );
  } else {

    console.log('localStorage is empty');
    appData = [];
  }
};



//функция прорисовки таблицы через innerHTML
const renderTableHTML = () => {

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
        <td>средний год</td>
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

//функция прорисовки таблицы через append
const renderTable = () => {

  if (tableContainer) {
    console.log('tableContainer существует и добавим таблицу сюда');

    const th1 = document.createElement('th');
    th1.textContent = 'Номер';
    const trh = document.createElement('tr');
    trh.append(th1);

    const th2 = th1.cloneNode();
    th2.textContent = 'Марка';
    trh.append(th2);

    const th3 = th1.cloneNode();
    th3.textContent = 'Модель';
    trh.append(th3);

    const th4 = th1.cloneNode();
    th4.textContent = 'Год выпуска';
    trh.append(th4);
    
    const th5 = th1.cloneNode();
    th5.textContent = 'Пробег';
    trh.append(th5);

    const tableHead = document.createElement('thead');
    tableHead.append(trh);

    const tableBody = document.createElement('tbody');
    const tableFoot = document.createElement('tfoot');
    

    const tableContent = document.createElement('table');
    tableContent.append(tableHead);
    tableContent.append(tableBody);
    tableContent.append(tableFoot);


    //записываем эти в структуру html
    // tableContainer.innerHTML = tableStructure;
    tableContainer.append(tableContent);
    console.log('tableContainer: ', tableContainer);

  } else {
    console.log('tableContainer null не найден');
  } 
};





//проверяем и загружаем данные из localStorage
readFromLocalStorage();
//перестраиваем таблицу после загрузки
renderTable();




btnAddCar.addEventListener('click', (e) => {
  const target = e.target;
  console.log('Добавим машину сюда', target);
  console.log('appData: ', appData);

  //читаем значения из формы инпутов
  const inputAddBrand = document.getElementById('input-add-brand');
  const inputAddModel = document.getElementById('input-add-model');
  const inputAddYear = document.getElementById('input-add-year');
  console.log('inputAddYear: ', inputAddYear);
  const inputAddMileage = document.getElementById('input-add-mileage') ;

  const brand = inputAddBrand.value;
  const model = inputAddModel.value;
  const year = inputAddYear.value;
  console.log('year: ', year);
  const mileage = inputAddMileage.value;
  console.log('mileage: ', mileage);
  

  if ( brand || model || year ) {
    
    //проверяем хотя бы какоето поле заполнено
    addModelToAppData( brand, model, year, mileage );

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

});//btnRender.addEventListener

