/**
 *  1. T?o module `circle.js` export 1 constructor function tên là Circle
 *  2. Circle có 3 property là x, y, radius (to? d? x, y và bán kính)
 *  3. Circle có 1 method là isOverlapped (overlap là ch?ng l?n, dè lên nhau), tr? v? -1 n?u 2 hình tròn này dè lên nhau, tr? v? 1 n?u 2 hình tròn không d?ng nhau, tr? v? 0 n?u 2 hình tròn ti?p xúc nhau.
 *  4. Test th?
 */
var Circle = require('./circle');
var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);
console.log(circle1.isOverlapped(circle2));

var circle3 = new Circle(0, 0, 3);
console.log(circle1.isOverlapped(circle3));

var circle4 = new Circle(5, 5, 1);
console.log(circle1.isOverlapped(circle4));

