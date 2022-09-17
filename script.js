

function findTotal() {
    var arr = document.getElementsByClassName('amount');
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            total += parseFloat(arr[i].value);
    }
    document.getElementById('totalordercost').value = total;
}