var data=[
    ["ABCDEFGHI"],
    ["ABCDE"],
    ["A"],
    ["ABCDEFG"]
];
for (var row = 0; row < 4; row++) {
    var num=0;
    for (var col = 0; col < data[row][0].length; col++) {
        var byte = data[row][0].charAt(col);
        switch (byte) {
            case 'A':
                num=num+4;
                break;
            case 'B':
                num=num+2;
                break;
            case 'C':
                num=num+2;
                break;
            default:
                num=num+1
                break;
        }
    }
    console.log(num);   
}