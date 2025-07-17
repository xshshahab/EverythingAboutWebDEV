var Parent = /** @class */ (function () {
    function Parent(key, childName) {
        this.key = key;
        this.childName = childName;
        console.log("Your key : ".concat(key, " and your son name is : ").concat(childName));
    }
    return Parent;
}());
var c1 = new Parent("djflka", "Choda1");
console.log(c1);
var c2 = new Parent(21, "Puttar");
console.log(c2);
