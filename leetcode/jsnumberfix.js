// fix some problems:
(0.1 + 0.2).toFixed(1);//0.3

function add(num1, num2) {
    var p1 = 0;
    var p2 = 0;

    if (num1.toString().split('.').length > 1) {
        p1 = num1.toString().split('.')[1].length;
    }

    if (num2.toString().split('.').length > 1) {
        p2 = num2.toString().split(".")[1].length;
    }

    var p = p1 > p2 ? p1 : p2;

    var n1 = num1 * Math.pow(10, p);
    var n2 = num2 * Math.pow(10, p);

    var result = (n1 + n2) / Math.pow(10, p);

    return result;
}

add(0.1, 0.2);//0.3