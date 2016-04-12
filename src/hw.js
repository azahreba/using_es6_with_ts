System.register(['./module', 'jquery'], function(exports_1) {
    var module_1, jquery_1;
    var tsNameSpace, fn, Engine, Car, Sprite, Player, Monster;
    function iFn(num) {
        return num * 100;
    }
    return {
        setters:[
            function (module_1_1) {
                module_1 = module_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }],
        execute: function() {
            console.log('in here');
            module_1.default();
            jquery_1.default('body').css({ 'background': '#6bad6c' });
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
                        Car.log('Started' + this._engine.engineType);
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
            {
                class Sprite {
                    constructor() {
                        this.name = '123';
                    }
                }
                class Player extends Sprite {
                    update() {
                    }
                }
                class Monster extends Sprite {
                    update() {
                    }
                }
                const p = new Player();
            }
            {
                let table = document.createElement('table');
            }
            {
            }
        }
    }
});
//# sourceMappingURL=hw.js.map