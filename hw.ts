/*
*
* const vs namespace
*
* */

const obj = {a: 1};
obj.a = 2; //sets a prop to 2;

namespace tsNameSpace {
    export const a = 1;
}
tsNameSpace.a = 3; //Error

/*
*
* let/const function + annotate params
*
* */

const greetArrow = (name/*Error: param has any type */) => {
    return "Hello, " + name;
};

console.log(greetArrowTs('Dead zone'));

//by let or const TS can manage dead zones
//can't bind this with arrow function
//arrow function isn't new-able
const greetArrowTs = (name: string) => "Hello, " + name;

/*
*
* Destructuring
*
* interface objects that will be exported
*
* */

interface USPostalAddress {
    city: string,
    zip: number,
    state?: string //optional
}

const address : USPostalAddress = {
    city: 'NY',
    zip: 12345,
};

let {city:/*as*/ c} = address;
