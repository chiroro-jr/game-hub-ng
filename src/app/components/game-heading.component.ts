import { Component, Input, OnInit } from '@angular/core'
import { GameQuery } from '../app.component'

@Component({
    selector: 'game-heading',
    standalone: true,
    template: ` <h1 class="text-5xl font-bold mb-5">
        {{ gameQuery.platform?.name || null }}
        {{ gameQuery.genre?.name || '' }} Games
    </h1>`,
})
export class GameHeadingComponent {
    @Input() gameQuery!: GameQuery
}
