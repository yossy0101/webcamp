var username;
var userresult;

username = prompt("お名前を教えて下さい。"); //prompt入力ダイアログを表示

/***************課題****************/

if (username == "") {
    username = "名無し"
}

/***********************************/

document.getElementById("name").innerHTML = username; //""のidのタグに囲まれている文字列を、変数で上書き

var rand = Math.floor( Math.random() * 5) ;
if (rand == 0) {
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
}
if (rand == 2) {
    userresult = "小吉";
}
if (rand == 3) {
　  userresult = "吉";
}
if (rand == 4) {
    userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;