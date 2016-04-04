define(["require", "exports", './module'], function (require, exports, module_1) {
    {
        const obj = { a: 1 };
        obj.a = 2;
        var tsNameSpace;
        (function (tsNameSpace) {
            tsNameSpace.a = 1;
        })(tsNameSpace || (tsNameSpace = {}));
        tsNameSpace.a = 3;
    }
    {
        const greetArrow = (name) => {
            return "Hello, " + name;
        };
    }
    {
        console.log(greetArrowTs('Dead zone'));
    }
    {
        const greetArrowTs = (name) => "Hello, " + name;
    }
    {
        const address = {
            city: 'NY',
            zip: 12345,
        };
        let { city: c = 'LA by default' } = address;
        const numbers = [1, 2, 3];
        const strings = ['a', 'b', 'c'];
        const [first = 0, second, ...rest] = numbers || [];
        const res = [...numbers, ...strings];
    }
    console.log('in here');
    module_1.default();
    {
    }
});
//# sourceMappingURL=hw.js.map