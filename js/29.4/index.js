/**
 *  1. T?o module `circle.js` export 1 constructor function t�n l� Circle
 *  2. Circle c� 3 property l� x, y, radius (to? d? x, y v� b�n k�nh)
 *  3. Circle c� 1 method l� isOverlapped (overlap l� ch?ng l?n, d� l�n nhau), tr? v? -1 n?u 2 h�nh tr�n n�y d� l�n nhau, tr? v? 1 n?u 2 h�nh tr�n kh�ng d?ng nhau, tr? v? 0 n?u 2 h�nh tr�n ti?p x�c nhau.
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

