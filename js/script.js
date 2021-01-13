'use strict';

// ключ доступа в localStorage
const KEY = 'model';

let appData = [];

//находим нужные кнопочки
const btnAddCar = document.getElementById('btn-add-car');
const btnFilter = document.getElementById('btn-filter');
const btnRender = document.getElementById('btn-render');
// console.log('btnAddCar: ', btnAddCar);
// console.log('btnFilter: ', btnFilter);
// console.log('btnRender: ', btnRender);

//находим нужный контейнер для выгрузки списка
const tableContainer = document.querySelector('.table-container');

//функция добавки одной записи в массиив обктов
const addModelToAppData = (brand, model, year, mileage) => {

  //проверка есть что-то в хранилище
  if (localStorage.getItem(KEY)) {
    //читаем из хранилища по ключу
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
    //читаем из хранилища
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


const getTableRow = (car, isTH)  => {
  
  let td;
  if (isTH) {
    td = document.createElement('th');
  } else {
    td = document.createElement('td');
  }
  let row = document.createElement('tr');

  let j = 0;
  for (let key in car) {
    j++;
    let item = car[key];
    // console.log(key, item);
    let tdata = td.cloneNode();

    tdata.textContent = item.trim();
    // switch (j)  {
    //   case 0:
    //     tdata.textContent = '';
    //     break;
    //   case 1:
    //     tdata.textContent = car.brand.trim() ? car.brand.trim() : '-';
    //     break;
    //   case 2:
    //     tdata.textContent = car.model.trim() ? car.model.trim() : '-';
    //     break;
    //   case 3:
    //     tdata.textContent = car.year.trim() ? car.year.trim() : '-';
    //     break;
    //   case 4:
    //     tdata.textContent = car.mileage.trim() ? car.mileage.trim() : '-';
    //     break;
    //   default:
    //     tdata.textContent = '---';
    // }
    row.append(tdata);
  }

  return row;
};



//функция прорисовки таблицы через append
const renderTable = () => {
  
  if (tableContainer) {
    // console.log('tableContainer существует и добавим таблицу сюда');
    
    //элементы оригиналы
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td = document.createElement('td');
    
    const tHead = document.createElement('thead');
    const tBody = document.createElement('tbody');
    const tFoot = document.createElement('tfoot');
    
    const table = document.createElement('table');
    table.classList.add('table', 'table-sm', 'table-dark', 'table-striped', 'table-hover');

    // const trows = [];
    // const ths = [];
    // const tds = [];

    // THEAD
    let row = getTableRow({ 
      brand:'Марка',
      model:'Модель',
      year:'Год выпуска',
      mileage:'И пробег'
    }, true);
    
    console.log('row: ', row);
    tHead.append(row);


    // TBODY
    //для каждого элемента массива (для каждого обеъкта) выполняем функцию
    appData.forEach( (carItem) => {
      console.log('carItem', carItem);
      tBody.append(getTableRow(carItem));
    });


    const caption = document.createElement('caption');
    caption.classList.add('caption-top');
    caption.textContent = 'Список автомобилей';
    table.append(caption);

    table.append(tHead);
    table.append(tBody);

    tFoot.append(getTableRow({ b:'Marka',m:'Model',y:'Year',a:'Miles'}, true));
    table.append(tFoot);
    
    tableContainer.append(table);


    //TABLE HEAD thead>tr>th
    // trows[0] = tr.cloneNode();
    
    // ths[1] = th.cloneNode();
    // ths[2] = th.cloneNode();
    // ths[3] = th.cloneNode();
    // ths[4] = th.cloneNode();
    // ths[5] = th.cloneNode();
    
    // trows[1].append(ths[1]);
    // trows[1].append(ths[2]);
    // trows[1].append(ths[3]);
    // trows[1].append(ths[4]);
    // trows[1].append(ths[5]);



    //клонируем
    // for (let i=0; i<5; i++) {
    //   ths[i] = th.cloneNode();
    // }
    
    // ths[0].textContent = 'Номер';
    // ths[1].textContent = 'Марка';
    // ths[2].textContent = 'Модель';
    // ths[3].textContent = 'Год выпуска';
    // ths[4].textContent = 'Пробег';
    
    
    // for (let i=0; i<5; i++) {
    //   trows[0].append(ths[i]);
    // }
    // tHead.append(trows[0]);



    //TABLE BODY tbody>tr>td

    // let carIndex = 0;
    //   for (let car of appData) {
        
    //     trows[++carIndex] = tr.cloneNode();
    //     tds[carIndex] = td.cloneNode();
      
    //   let brand = car.brand;
    //   let model = car.model;
    //   let year = car.year;
    //   let mileage = car.mileage;
      
    //   tds[0].textContent = carIndex;//table index
    //   tds[1].textContent = brand;
    //   tds[2].textContent = model;
    //   tds[3].textContent = year;
    //   tds[4].textContent = mileage;
    //   console.log('carIndex: ', carIndex);
      
    //   //добавляем td
    //   for (let i=0; i<5; i++) {
    //     trows[carIndex].append(tds[i]);
    //   }
      
    //   tBody.append(trows[carIndex]);
    // }

  } else {
    console.log('tableContainer null не найден');
  } 
};



//проверяем и загружаем данные из localStorage
readFromLocalStorage();
console.log('appData: ', appData);
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
  const inputAddMileage = document.getElementById('input-add-mileage') ;

  const brand = inputAddBrand.value.trim();
  const model = inputAddModel.value.trim();
  const year = inputAddYear.value.trim();
  const mileage = inputAddMileage.value.trim();


  //проверяем хотя бы какоето поле заполнено
  if ( brand || model || year ) {
    //добавляем данные из формы в массив appData    
    addModelToAppData( brand, model, year, mileage );

  } else {
    alert('Ни одно поле в форме не заполнено, заполните поля');
    console.log('Ни одно поле в форме не заполнено, заполните поля');
  }

  console.log('appData: ', appData);

  //перестариваем таблицу
  renderTable();
});


btnFilter.addEventListener('click', (event) => {
  console.log('Кнопка фильтарации, давайте отфильтруем');
  alert('Давайте отфильтруем,\nфункция фильтрации на стадии разработки');
});//btnFilter.addEventListener


btnRender.addEventListener('click', (event) => {
  console.log('Построим таблицу здесь, lets render table');

  renderTable();

});//btnRender.addEventListener

