var data = [
    ["ABCDEFGHI"],
    ["ABCDE"],
    ["A"],
    ["ABCDEFG"]
];
for (var row = 0; row < 4; row++) {
    var num = 0;
    for (var col = 0; col < data[row][0].length; col++) {
        var byte = data[row][0].charAt(col);
        switch (byte) {
            case 'A':
                num = num + 4;
                break;
            case 'B':
                num = num + 2;
                break;
            case 'C':
                num = num + 2;
                break;
            default:
                num = num + 1
                break;
        }
    }
    console.log(num);
}

function generateTable(dataArray) {
    $("#content").empty();
    var tbody = document.getElementById("content");
    dataArray.forEach(function (r, index) {
        var row = document.createElement("tr");
        for (var i = 0; i < r.length + 1; i++) {
            var col = document.createElement("td");
            col.textContent = r[i - 1];
            row.appendChild(col);
        }
        tbody.appendChild(row);
    });
}


function ajax() {
    $.post(ctx + "/book/findBook", {
        "queryBookName": $("#test").val()
    }, function (data) {
        $("#list").empty();
        if ($("#test").val() !== "") {
            const book = JSON.parse(data);
            for (let i = 0; i < book.length; i++) {
                const row = document.createElement("tr");
                for (const name in book[i]) {
                    const col = document.createElement("td");
                    col.textContent = book[i][name];
                    row.append(col);
                }
                $("#list").append(row);
            }
        }
    })
}