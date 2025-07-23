// clousers => ek fnc jo return kare ek aur fnc aur return hone wala function hamesha use kare parent function ke koi variable.

function parent() {
  let parentFnVariable = 21;
  return function () {
    parentFnVariable++;
    console.log(parentFnVariable);
  };
}

parent()();
