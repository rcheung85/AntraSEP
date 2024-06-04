/* filter, map, includes, indexOf, reduce, slice, splice */

///////////////////////////////////////////////////////////
// 1 - filter
Array.prototype.myFilter = function (cb) {
    const filteredArr = [];
    for(let i = 0; i < this.length; i++){
        const result = cb(this[i], i, this);
        if(result){
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
}

// filter test
const arr1 = [1, 2, 3, 4, 5, 6]
const filterResult = arr1.myFilter(num => num % 2 === 0);
console.log('1 - filter: ', filterResult);

///////////////////////////////////////////////////////////
// 2 - map
Array.prototype.myMap = function (cb) {
    const mappedArr = [];
    for(let i = 0; i < this.length; i++){
        mappedArr.push(cb(this[i], i, this));
    }
    return mappedArr;
}

// map test
const arr2 = [5, 10, 15, 20, 25];
const mappedResult = arr2.myMap(num => num / 5);
console.log('2 - map: ', mappedResult);

///////////////////////////////////////////////////////////
// 3 - includes
Array.prototype.myIncludes = function (searchElement, fromIndex) {
    const start = fromIndex === undefined ? 0 : fromIndex;
    for(let i = start; i < this.length; i++){
        if(this[i] === searchElement){
            return true;
        }
    }
    return false;
}

// test
const arr3 = ['a', 'b', 'c'];
console.log('3 - includes: ', arr3.myIncludes('a'));
// console.log('includes: ', arr3.myIncludes('a', 1));

///////////////////////////////////////////////////////////
// 4 - indexOf
Array.prototype.myIndexOf = function (searchElement, fromIndex) {
    const start = fromIndex === undefined ? 0 : fromIndex;
    for(let i = start; i < this.length; i++){
        if(this[i] === searchElement){
            return i;
        }
    }
    return -1;
}

// test
const arr4 = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log('4 - indexOf: ', arr4.myIndexOf('bison'));
// console.log('indexOf: ', arr4.myIndexOf('bison', 2));

///////////////////////////////////////////////////////////
// 5 - reduce
Array.prototype.myReduce = function (cb, initialVal) {
    let acc = initialVal === undefined ? 0 : initialVal;
    for(let i = 0; i < this.length; i++){
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}

// reduce test
const arr5 = [1, 2, 3, 4, 5];
const sumReducer = (acc, curr) => acc + curr; 
const reducedResult = arr5.myReduce(sumReducer, 0);
console.log('5 - reduce: ', reducedResult);

///////////////////////////////////////////////////////////
// 6 - slice
Array.prototype.mySlice = function (start, end=this.length) {
    const slicedArr = [];
    if(start < 0) {
        start+=this.length
        if (start < 0){
            start = 0
        }
    }

    if(end < 0) {
        end+=this.length
        if (end < 0){
            end = 0
        }
    }
    for(let i = start; i < end; i++){
        slicedArr.push(this[i]);
    }
    return slicedArr;
}

// slice test
const arr6 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('6 - slice: ', arr6.mySlice(2));
// console.log('6 - slice: ', arr6.mySlice(1, 4));


///////////////////////////////////////////////////////////
// 7 - splice
Array.prototype.mySplice = function (start, deleteCount, ...args) {
    //const removedEle = [];

    // ensure start is whithin bound
    if(start < 0) {
        start+=this.length
        if (start < 0){
            start = 0
        }
    }

    if(start > this.length){
        start = this.length;
    }

    // ensure delete count is whithin bound
    if (deleteCount === undefined) {
        deleteCount = this.length - start;
    } else {
        deleteCount = Math.min(deleteCount, this.length - start);
    }
 
    // left, right, and deleted array
    const left = this.slice(0, start);
    const right = this.slice(start + deleteCount);
    const removedEle = this.slice(start, start + deleteCount);

    this.length = 0;

    const newArray = left.concat(args, right);
    for (let i = 0; i < newArray.length; i++) {
        this[i] = newArray[i];
    }
    
    return removedEle;
}

const months = ['Jan', 'March', 'April', 'June'];
months.mySlice(1, 0, 'Feb');
console.log('7 - splice: ', months);
// months.splice(4, 1, 'May');
// console.log(months);