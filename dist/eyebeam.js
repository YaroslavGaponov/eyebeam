"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var DEBUG = process.env.NODE_ENV !== 'production';
/**
 * http(s) handler
 * @param url  - metrics server url
 * @param interval  - interval
 */
function handler(url, interval) {
    if (interval === void 0) { interval = 1000; }
    var html = fs_1.readFileSync(path_1.join(__dirname, "eyebeam.html")).toString()
        .replace(/\$\{url\}/g, url)
        .replace(/\$\{interval\}/g, interval.toString());
    return function (req, res) {
        if (DEBUG)
            res.setHeader('Cache-Control', 'no-cache');
        res.end(html);
    };
}
exports.handler = handler;
