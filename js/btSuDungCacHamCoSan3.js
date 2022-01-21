var str = prompt('Nhập 1 dòng chữ bất kỳ');
var UPPER = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
var result = [];
for (let x=0;x<str.length; x++){
    if(UPPER.indexOf(str[x]) !== (-1))
    {
        result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x])!== (-1))
    {
        result.push(str[x].toUpperCase());
    }
    else
    {
        result.push(str[x]);
    }
}

alert(result.join(''));

