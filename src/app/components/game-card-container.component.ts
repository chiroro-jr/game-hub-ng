import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'game-card-container',
    standalone: true,
    template: `
        <div
            class="max-w-sm lg:w-[400px] min-w-[300px] rounded-xl overflow-hidden"
        >
            <ng-content></ng-content>
        </div>
    `,
})
export class GameCardContainerComponent {}
