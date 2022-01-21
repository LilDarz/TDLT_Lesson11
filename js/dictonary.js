vietnamese = ["táo", "nho", "lê", "xoài", "chanh"];
english = ["apple", "grape", "pear", "mango", "lemon"];
let index_eng = 0;
let translatedWord = prompt("Nhập từ bạn muốn tra vào");
for (let x = 0; x < vietnamese.length; x++) {
    if (vietnamese[x] == translatedWord) {
        index_eng = x
        for (let y = 0; y < english.length; y++) {
            if (index_eng == y) {
                alert(`Từ ${translatedWord} có nghĩa là ${english[y]}`);
            }
        }
    }else{
        alert("Từ này không tồn tại trong từ điển");
    }
}