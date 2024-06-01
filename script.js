function* makerangeIterator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
  return makerangeIterator;
}

let result = makerangeIterator(1, 10);

const clickbtn = document.getElementById("clickbtn");
const howmany = document.getElementById("howmany");

// for (let value of result) {
//   console.log(value);
// }

clickbtn.addEventListener("click", () => {
  const checkResult = result.next().value;

  if (checkResult >= checkResult - 1) {
    howmany.innerText = checkResult;
  } else {
    alert(`The end value is set upto ${howmany.innerText}`);
    location.reload();
  }
});
