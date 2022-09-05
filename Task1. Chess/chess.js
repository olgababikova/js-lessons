"use strict";

function renderChessboard() {
    var table = document.createElement('table');
    var trr = document.createElement('tr');
    var alfabet = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var flag = true;
    var a = '40px';

    table.style.borderCollapse = 'collapse';

    for (var row = 0; row < 8; row++) {
        var tr = document.createElement('tr');

        var tdd = document.createElement('th');
        tdd.style.width = a;
        tdd.style.height = a;
        tdd.innerHTML = 8 - row;
        tr.appendChild(tdd);

        for (var col = 0; col < 8; col++) {
            if (col == 0)
                flag = !flag;

            var td = document.createElement('td');
            td.style.width = a;
            td.style.height = a;
            td.style.border = '1px solid black';

            if (flag){
                td.style.background = 'black';
            } else {td.style.background = 'white'};

            tr.appendChild(td);
            flag = !flag;
        }

        table.appendChild(tr);

    };

    for (var i = 0; i < 9; i++){
        var td = document.createElement('th');
        td.style.width = a;
        td.style.height = a;
        td.style.background = 'white';
        td.innerHTML = alfabet[i];
        trr.appendChild(td);
    }

    table.appendChild(trr);
    document.body.appendChild(table);

};

renderChessboard();