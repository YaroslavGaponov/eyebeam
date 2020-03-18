"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
function handler(url) {
    var html = fs_1.readFileSync(path_1.join(__dirname, "eyebeam.html")).toString().replace("${url}", url);
    return function (req, res) {
        res.end(html);
    };
}
exports.handler = handler;
//# sourceMappingURL=eyebeam.js.map