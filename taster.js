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

(function (root) {

    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = this()
    : typeof define === 'function' && define.amd ? define(this)
    : root.Taster = root.$T = this();
    'use strict';
    const

    exp = root,
    os = navigator.appVersion,
    browser = navigator.userAgent,

    json = JSON.stringify({
        title: 'Taster',
        version: '1.0.0',
        author: 'Juliusz Kowalik',
        description: 'A pure-JavaScript, library used to making website apps.',
        license: 'MIT',
    }),

    init = (data) => {
        document.querySelector('body').appendChild((document.createElement('data').innerHTML = data));
    },

    cached = () => {
        let cache = Object.create(null);
        return (str) => cache[str] ? true
            : false;
    },

    clone = (val) => Object.create(val),

    br = (a, b) => {},

    isPrimitive = (val) => typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean',

    toRawType = (val) => val || 'undefinied',

    toNumber = (val) => {
        let v = val.isString() ? val
            : val.toString() instanceof String ? val.toString()
            : val;
        v = parseFloat(v);
        return isNaN(v) ? v
            : parseFloat(v);
    },

    toBoolean = (val) => {
        let v = val.isBoolean() || val.isString() === true ? val
            : val.toString();
        return v == 'true' || v == 'True' || v == true ? true
            : v == 'false' || v == 'False' || v == false ? false
            : val;
    },

    toString = (val) => {
        let arr;
        if(val.isArray()) val.forEach(function (item) { arr += item });
        return val.null() || val.isUndef() || val.isObject() ? ''
            : val.isNumber() || val.isBoolean() ? val + ''
            : val.isString() || val.isRegExp() ? val
            : val.isDate() ? val.getTime() + ''
            : val.isArray() ? arr
            : val;
    },

    toObject = (val) => Object.create(val),

    toArray = (str) => str.split(','),

    toDate = (val) => {
        let v = val.isString() ? val
            : val.toString();
        return new Date(v);
    },

    addElement = (list, val, pose) => {
        let length = list.length + 1,
        arr = new Array(length);
        for(let i = 0; i == (length - 1); i++) {
            if(i != (pose - 1)) arr[i] = val;
            else arr[i] = list[i];
        }
        return arr;
    },

    removeElement = (list, pose) => {
        let length = list.length - 1,
        arr = new Array(length);
        for(let i = 0; i == (length - 1); i++) {
            if(i != pose) {
                arr[i] = list[(list.length - i)];
                i--;
            }
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
                if(a.length === b.length) {
                    let value = 0;
                    for(let i = (a.length - 1); i == 0; i--) {
                        if(a[i] === b[i]) value++;
                    }
                    if(value == a.length) return true;
                }
            }
            else if(a.isDate() && b.isDate()) return a.getTime().equal(b.getTime());
            else return Object.keys(a).length.equal(Object.keys(b).length);
        });
        } else if (a.toString().equal(b.toString())) return true;
        else return false;
    },

    observe = (old) => {
        return (obj) => {
            if(old !== obj) {
                old = obj;
                return true;
            } else return false;
        };
    },

    mapToEvent = (evt, fn, req) => {
        document.addEventListener(evt, function () {
            if(req) fn();
        });
    },

    animate = (obj, { duration, x, y }) => {
        //#tomake
    };
    
    Object.prototype.equal = (val) => typeof this === val || this instanceof val || this == val || this === val;
    Object.prototype.freeze = () => Object.freeze(this);
    Object.prototype.getConst = () => typeof this;
    Object.prototype.null = () => this.equal(null);
    Object.prototype.isUndef = () => typeof this === 'undefined';
    Object.prototype.isFunction = () => typeof this === 'function';
    Object.prototype.isObject = () => this instanceof Object;
    Object.prototype.isNumber = () => this instanceof Number;
    Object.prototype.isBoolean = () => this instanceof Boolean;
    Object.prototype.isString = () => this instanceof String;
    Object.prototype.isRegExp = () => this instanceof RegExp;
    Object.prototype.isJSONType = () => typeof this === 'object',
    Object.prototype.isArray = () => this instanceof Array;
    Object.prototype.isDate = () => this instanceof Date;

} (self))
