System.config({
    map: {
        'jquery': 'lib/jquery/jquery.min'
    },
    packages: {
        '': {
            defaultExtension: 'js'
        }
    }
});

/*
*
* For TS >= 1.8 use "allowSyntheticDefaultImports": true
*/

declare module 'jquery' {
  var $: JQueryStatic;
  export default $;
}
