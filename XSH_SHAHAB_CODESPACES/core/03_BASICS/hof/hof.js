// high order function(hof) hota hai jo ki return kare function ya fir accept kare ek fnc apne parameter main.

function abcd(val) {
  val();
}

abcd(function () {
  console.log("Abcd is a hof");
});
