module.exports = class DepthCalculator {

    calculateDepth(arr, count = 0, array = []) {
        count ++;
        array.push(count);
        arr.forEach(item => { if(Array.isArray(item)) this.calculateDepth(item, count, array) });
        console.log(arr);
        console.log(count);
        return Math.max(...array);
    }
};