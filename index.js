/**
 * Выводит элементы массива в формате:
 * Element index: value value
 * @param {Array} arr - массив для вывода
 * @returns {undefined}
 */
function printArray(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log('Element ' + i + ": value " + arr[i]);
    }
}
/**
 * Выводит элементы массива в кратком формате:
 * index: value
 * @param {Array} arr - массив для вывода
 * @returns {undefined}
 */
function printArray1(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(i + ": " + arr[i]);
    }
}
let arr = [5, 8, 9]
printArray(arr);
printArray1(arr);

/**
 * Выполняет callback для каждого элемента массива
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция, вызываемая для каждого элемента
 * @returns {undefined}
 */
function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}
let shortFormat = (value, index) => {
    console.log(index + ':' + value)
}
let longFormat = (value, index) => {
    console.log('Element: ' + value + ', Index: ' + index); 
}

forEach(arr, shortFormat);
forEach(arr, longFormat);

/**
 * Создает новый массив, применяя callback к каждому элементу
 * @param {Array} arr - исходный массив
 * @param {Function} callback - функция преобразования
 * @returns {Array} новый массив
 */
function myMap(arr, callback){
    let results = [];
    for(let i = 0; i < arr.length; i++){
        results.push(callback(arr[i], i, arr));
        
    }
    return results;
}

let multiplication = (element, index, array) => element **= 2;

let array = [4, 5, 7];

console.log(myMap(array, multiplication))

/**
 * Фильтрует элементы массива по условию callback
 * @param {Array} arr - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {Array} новый массив с подходящими элементами
 */
function myFilter(arr, callback){
    let results = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            results.push(arr[i]);
        }
        else continue;
        
    }
    return results;
}

let filtration = (element, index, array) => element % 2 == 0;

console.log(myFilter(array, filtration))

/**
 * Возвращает первый элемент, удовлетворяющий условию
 * @param {Array} arr - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {*} найденный элемент или undefined
 */
function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return arr[i];
        }
        else continue;
        
    }
    return undefined;
}

let find = (element, index, array) => element % 2 == 0;

array = [4, 5, 7, 8];

console.log(myFind(array, find))

/**
 * Проверяет, есть ли хотя бы один элемент, удовлетворяющий условию
 * @param {Array} arr - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {boolean}
 */
function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;
        }
        else continue;
        
    }
    return false;
}

let some = (element, index, array) => element % 2 == 0;

array = [1, 7];

console.log(mySome(array, some))

/**
 * Проверяет, удовлетворяют ли все элементы условию
 * @param {Array} arr - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {boolean}
 */
function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr) == false){
            return false;
        }
        else continue;
        
    }
    return true;
}

let every = (element, index, array) => element % 2 == 0;

array = [6, 8, 4, 2, 1];

console.log(myEvery(array, every))

/**
 * Применяет callback к элементам массива, накапливая результат
 * @param {Array} arr - исходный массив
 * @param {Function} callback - функция аккумуляции
 * @param {*} [initialValue] - начальное значение аккумулятора (необязательно)
 * @returns {*} итоговое значение
 */
function myReduce(arr, callback, initialValue){
    for(let i = 0; i < arr.length; i++){
        if (initialValue == undefined){
        initialValue = arr[i];
        continue;
    }
    if(initialValue == undefined && arr.length == 0)
        return undefined;
    else initialValue = callback(initialValue, arr[i], i, arr);
    }
    return initialValue;
}

let summa = (accumulator, element, index, array) => accumulator += element;

array = [1, 2, 3, 4, 5];

console.log(myReduce(array, summa));