const resolve = require('rollup-plugin-node-resolve');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',

    'ng-zorro-antd': 'ngZorro.antd',

    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/of': 'Rx.Observable',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/FromEventObservable': 'Rx.Observable',
    'rxjs/observable/ErrorObservable': 'Rx.Observable'
};

module.exports = {
    rollup: require('rollup'),
    context: 'this',
    output: {
        file: 'acl.umd.js',
        name: 'alain.acl',
        format: 'umd',
        sourcemap: true,
        globals: globals
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true
        })
    ],
    external: Object.keys(globals)
};
