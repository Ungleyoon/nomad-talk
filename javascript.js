// 현재시간으로 status-bar시간 설정
const date = new Date();
const hours = ("0" + date.getHours()).slice(-2);
const minutes = ("0" + date.getMinutes()).slice(-2);
const timeStr = hours + ":" + minutes;
document.getElementById("time").innerHTML = timeStr;

// 사용자로부터 입력받은 내용이 정답이면 다음페이지 이동
function test() {
  var pw = document.getElementById("password").value;
  if (
    pw == "니콜라스" ||
    pw == "니코" ||
    pw == "니콜라스 세라노 아레발로" ||
    pw == "박인" ||
    pw == "Nicolas" ||
    pw == "Nicolas Serrano Arevalo"
  ) {
    alert("정답이에요!! ☺️");
    return true;
  } else {
    alert("정답이 아닙니다!😭");
    return false;
  }
}
