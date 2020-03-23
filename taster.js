/**
 * 2020 (c) Juliusz Kowalik.
 * All rights reserved.
 * Relased under the MIT license.
 * 
 * @version 1.0.0 // beta 1.0
 * @author Juliusz Kowalik
 * 
 * 
 * 
 * 
 * 
 */

(function (root, doc) {

    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = this()
    : typeof define === 'function' && define.amd ? define(this)
    : root.Taster = root.$T = this();
    'use strict';
    const

    exp = root,
    os = navigator.appVersion,
    browser = navigator.userAgent,
    notation = JSON.stringify({
        title: 'Taster',
        version: '1.0.0',
        author: 'Juliusz Kowalik',
        description: 'A pure-JavaScript, library make for use it to making website apps.',
        license: 'MIT',
    }),

    init = (data) => {
        doc.querySelector('body').appendChild((doc.createElement('data').innerHTML = data));
    },

    addRenderer = (renderer, { value }) => {
        init(null);
        doc.querySelector('data').appendChild((doc.createElement('renderer').innerHTML = (renderer({ value }))));
    },

    cached = () => {
        let cache = Object.create(null);
        return (str) => cache[str] ? true
            : false;
    },

    clone = (val) => Object.create(val),

    br = (a, b) => {},

    toRawType = (val) => val || 'undefinied',

    toNumber = (val) => {
        let v = val.isString() || val.isNumber() ? val
            : val.toString();
        return isNaN(parseFloat(v)) ? v
            : parseFloat(v);
    },

    toBoolean = (val) => {
        let v = val.isBoolean() || val.isString() ? val
            : val.toString();
        return v == 'true' || v == 'True' || v == true ? true
            : v == 'false' || v == 'False' || v == false ? false
            : val;
    },

    toString = (val) => {
        let arr;
        if(val.isArray()) {
            arr = new Array(val.length);
            val.forEach(function (item, i) { arr[i] = item.toString() });
        }
        return val.null() || val.isUndef() || val.isObject() ? ''
            : val.isNumber() || val.isBoolean() ? val + ''
            : val.isString() || val.isRegExp() ? val
            : val.isDate() ? val.getTime() + ''
            : val.isArray() ? arr
            : val;
    },

    toObject = (val) => JSON.parse(val),

    toArray = (str) => str.split(','),

    toDate = (val) => {
        let v = val.isString() || val.isDate() ? val
            : val.toString();
        return new Date(v);
    },

    addElement = (list, pose, val) => {
        let length = list.length + 1,
        arr = new Array(length);
        for(let i = 0; i != (length - 1); i++) {
            if(i != (pose - 1)) arr[i] = val;
            else arr[i] = list[i];
        }
        return arr;
    },

    removeElement = (list, pose) => {
        let length = list.length - 1,
        arr = new Array(length);
        for(let i = 0; i != (length - 1); i++) {
            if(i != pose)
                arr[i] = list[(list.length - i)];
            else i++;
        };
        return arr;
    },

    getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min,

    test = (fn) => {
        try {
            return fn();
        } catch (err) {
            console.log(err);
        }
    },

    looseEqual = (val) => {
        if(a.equal(b)) return true;
        else if(a.isObject() && b.isObject()) {
        test(function () {
            if(a.isArray() && b.isArray()) {
                if(a.length.equal(b.length)) {
                    let value = 0;
                    for(let i = (a.length - 1); i == 0; i--) {
                        if(a[i].equal(b[i])) value++;
                    }
                    if(value == a.length) return true;
                }
            }
            else if(a.isDate() && b.isDate() && a.getTime().equal(b.getTime())) return true;
            else if(Object.keys(a).length.equal(Object.keys(b).length)) return true;
            else return false;
        });
        } else if (a.toString().equal(b.toString())) return true;
        else return false;
    },

    observe = (old) => {
        return (obj) => {
            if(!old.equal(obj)) {
                old = obj;
                return true;
            } else return false;
        };
    },

    mapToEvent = (evt, fn, req) => {
        document.addEventListener(evt, function () {
            if(req()) fn();
        });
    },

    animate = (obj, { duration, x, y }) => {
        //#tomake
    };

    Object.prototype.isPrimitive = () => (typeof this === 'number' || typeof this === 'boolean' || typeof this === 'string');
    Object.prototype.equal = (val) => (typeof this === val || this instanceof val || this == val || this === val);
    Object.prototype.freeze = () => Object.freeze(this);
    Object.prototype.getConst = () => typeof this;
    Object.prototype.null = () => this === null;
    Object.prototype.isUndef = () => typeof this === 'undefinied';
    Object.prototype.isFunction = () => typeof this === 'function';
    Object.prototype.isJSON = () => typeof this === 'object';
    Object.prototype.isArray = () => typeof this === 'array';
    Object.prototype.isDate = () => typeof this === 'date';
    Object.prototype.isObject = () => typeof this === '[object Object]';
    Object.prototype.isNumber = () => typeof this === '[object Number]';
    Object.prototype.isBoolean = () => typeof this === '[object Boolean]';
    Object.prototype.isString = () => typeof this === '[object String]';
    Object.prototype.isRegExp = () => typeof this === '[object RegExp]';

} (self, document));
