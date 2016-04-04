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
* interface objects that will be exported
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