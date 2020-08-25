var calculateVarient = function (data) {
    var a = [];
    for (var i = 0; i < data.length; i++) {
        var arr = data[0];
        var arrNext = data[1];
        for (var j = 0; j < arrNext.length; j++) {
            var obj = [arr[i], arrNext[j]];
            a.push(obj);
        }
    }
    console.log(a);
};
var data = [['xl', 'xxl', 'L'], ['red', 'blue', 'green']];
var result = calculateVarient(data);
