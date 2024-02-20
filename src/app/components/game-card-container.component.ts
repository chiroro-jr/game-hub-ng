import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'game-card-container',
    standalone: true,
    template: `
        <div class="max-w-sm rounded-xl overflow-hidden">
            <ng-content></ng-content>
        </div>
    `,
})
export class GameCardContainerComponent {}
