/**
 * Created by johnny on 2017/12/25.
 */

function extend(...args) {
    let length = args.length;
    let obj=args[0];
    obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (let index = 1; index < length; index++) {
        let source = arguments[index]
        for (let key in source) {
            obj[key] = source[key];
        }
    }
    return obj
}
window.extend=extend;
export default extend