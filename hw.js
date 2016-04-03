const obj = { a: 1 };
obj.a = 2;
var tsNameSpace;
(function (tsNameSpace) {
    tsNameSpace.a = 1;
})(tsNameSpace || (tsNameSpace = {}));
tsNameSpace.a = 3;
const greetArrow = (name) => {
    return "Hello, " + name;
};
console.log(greetArrowTs('Dead zone'));
const greetArrowTs = (name) => "Hello, " + name;
const address = {
    city: 'NY',
    zip: 12345,
};
let { city: c } = address;
//# sourceMappingURL=hw.js.map