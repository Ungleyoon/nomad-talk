// 현재시간으로 status-bar시간 설정
const clock = document.querySelector("#time");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const timeStr = hours + ":" + minutes;
  clock.innerText = timeStr;
}

getTime();
setInterval(getTime, 1000);

// 사용자로부터 입력받은 내용이 정답이면 다음페이지 이동
function test(event) {
  var pw = document.querySelector("#password").value;
  if (
    pw == "니콜라스" ||
    pw == "니코" ||
    pw == "니콜라스 세라노 아레발로" ||
    pw == "박인" ||
    pw == "Nicolas" ||
    pw == "Nicolas Serrano Arevalo"
  ) {
    alert("정답이에요!! ☺️");
  } else {
    alert("정답이 아닙니다!😭");
    event.preventDefault();
  }
}
