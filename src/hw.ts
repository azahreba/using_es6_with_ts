/*
*
* const vs namespace
*
* */
{
    const obj = {a: 1};
    obj.a = 2; //sets a prop to 2;

    namespace tsNameSpace {
        export const a = 1;
    }
    tsNameSpace.a = 3; //Error
}
/*
*
* let/const function + annotate params
*
* */
{
    const greetArrow = (name/*Error: param has any type */) => {
        return "Hello, " + name;
    };
}
//by let or const TS can manage dead zones
{
    console.log(greetArrowTs('Dead zone'));
}

//can't bind this with arrow function
//arrow function isn't new-able
{
    const greetArrowTs = (name: string) => "Hello, " + name;
}

/*
*
* Destructuring
*
* interface objects/functions that will be exported
* use in objects, arrays
* pass params using destructuring and annotate them with type
*
* */
{
    interface USPostalAddress {
        city: string,
        zip: number,
        state?: string //optional
    }

    interface Fn {
        (x: number): number;
    }

    //interface an object or object that is returned by function
    interface Obj {
        name: string;
        setAge: (years: number) => number;
    }

    function iFn (num: number): number {
        return num * 100;
    }

    var fn: Fn = iFn;

    const address:USPostalAddress = {
        city: 'NY',
        zip: 12345,
    };

    //could be used as function params
    //take care about handling undefined props in parent obj
    let {city:/*as*/ c = 'LA by default'} = address;

    const numbers:number[] = [1, 2, 3];
    const strings:string[] = ['a', 'b', 'c'];

    const [first = 0, second, ...rest] = numbers || [];

    const res = [...numbers, ...strings];
}

/*
 * Classes combined with interfaces
 * */
{


    class Engine {
        constructor(public horsePower: number,
                    public engineType: string) {
        }
    }

    class Car {
        //Fields
        //Complex Type
        private _engine: Engine;

        //Function props
        static log: (msg: any, ...optParams: any[]) => void = console.log;

        //Contructor
        constructor(engine: Engine) {
            this.engine = engine;
        }

        //Functions/Methods
        start(): void {
            log('Started' + this._engine.engineType);
        }

        //Properties
        get engine(): Engine {
            return this._engine;
        }

        set engine(val: Engine) {
            if (val == undefined) {
                throw 'Supply an Engine!'
            }
            this._engine = val;
        }
    }
}

/*
 *
 * */
import log from './module';
console.log('in here');
log();

/*
 *
 * */
{

}