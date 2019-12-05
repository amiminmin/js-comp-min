const fs = require('fs');
const babel = require('babel');
const minCss = require('clean-css-cli');

function check(filePath) {
    let isExit = false;
    try {
        fs.statSync(filePath);
        isExit = true;
    } catch (err) {
        isExit = false; 
    }
    return isExit;
}

/**
 * cleancss サンプル
 */

function sampleCleancss(text) {
    var CleanCSS = require('clean-css');
    var input = text;
    var options = { /* options */ };
    var output = new CleanCSS(options).minify(input);
}

/**
 * UglifyJS サンプル
 */
function sampleUglifyJS(text) {
    var UglifyJS = require("uglify-js");
    var code = text;
    var result = UglifyJS.minify(code);
    console.log(result.error); // runtime error, or `undefined` if no error
    console.log(result.code);  // minified output: function add(n,d){return n+d}
}

/**
 * 引数回してフルパス取得
 * js or css を判定
 * jsならbabel→UglifyJSの順に通す
 * cssならcleancssを通す
 * outputをファイルに出力
 */
let fileList = [];
const argvs = process.argv;
for (let i = 2; i < argvs.length; i++) {
    const filePath = argvs[i];
    fileList.push(filePath);
}
