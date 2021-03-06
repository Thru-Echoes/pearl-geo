/******************************************************
Convert between string Map and object
******************************************************/

function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        // We don’t escape the key '__proto__'
        // which can cause problems on older engines
        obj[k] = v;
    }
    return obj;
}
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

/* Example usage: */

let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap);
objToStrMap({yes: true, no: false});

/******************************************************
Convert between Map and JSON
******************************************************/

function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}

function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

/* Example usage: */
let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap);
jsonToStrMap('{"yes":true,"no":false}');
