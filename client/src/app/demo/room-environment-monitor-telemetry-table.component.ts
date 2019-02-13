import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'project-list',
    template: `
        <h1>Hello World</h1>
    `,
})

export class RoomEnvironmentMonitorTelemetryComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('Hello World');
    }
}
