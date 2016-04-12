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
        function iFn(num) {
            return num * 100;
        }
        var fn = iFn;
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
    {
        class Engine {
            constructor(horsePower, engineType) {
                this.horsePower = horsePower;
                this.engineType = engineType;
            }
        }
        class Car {
            constructor(engine) {
                this.engine = engine;
            }
            start() {
                module_1.default('Started' + this._engine.engineType);
            }
            get engine() {
                return this._engine;
            }
            set engine(val) {
                if (val == undefined) {
                    throw 'Supply an Engine!';
                }
                this._engine = val;
            }
        }
        Car.log = console.log;
    }
    console.log('in here');
    module_1.default();
    {
    }
});
//# sourceMappingURL=hw.js.map