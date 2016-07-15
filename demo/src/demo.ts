/// <reference path="../typings/index.d.ts" />

import {bootstrap}    from '@angular/platform-browser-dynamic'
import {Component}    from '@angular/core';
import {LogService}   from 'angular2-log/log';

@Component({
    selector: 'demo-app',
    templateUrl: 'src/demo.html'
})
export class DemoComponent {

    constructor(public log: LogService) {

    }
}

bootstrap(DemoComponent, [LogService]);
