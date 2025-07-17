class TVKaRemote {
  switchOff() {
    console.log("Switch off karna tv ko.....");
  }
}

class CarKaRemote {
  switchOff() {
    console.log("Switch off karna Car ko.....");
  }
}

let tv = new TVKaRemote();
let car = new CarKaRemote();

function offDevice(device: TVKaRemote | CarKaRemote) {
  if (device instanceof TVKaRemote) {
    tv.switchOff();
  } else {
    car.switchOff();
  }
}
