/**
 * 1. Thêm method `sum` cho module `math`, nhận vào 1 array các số, trả về tổng các số
 * 2. Require module math và sử dụng method sum để tính tổng 1 array các số bất kì
 * 3. Log kết quả
 */

var math = {
  add: function(a, b) {
    return a + b;
  },
  sum: function(arr){
    var sum =0;
    for (i=0; i<arr.length; i++)
    {
      sum = sum + arr[i];
    }
    return sum;
  }
};

module.exports = math;