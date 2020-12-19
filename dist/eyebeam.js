"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var DEBUG = process.env.NODE_ENV !== 'production';
function handler(settings) {
    var template = fs_1.readFileSync(path_1.join(__dirname, "eyebeam.html")).toString();
    for (var name_1 in settings) {
        template = template.replace(new RegExp("\\$\\{" + name_1 + "\\}", "g"), "" + settings[name_1]);
    }
    return function (req, res) {
        if (DEBUG)
            res.setHeader('Cache-Control', 'no-cache');
        res.end(template);
    };
}
exports.handler = handler;
