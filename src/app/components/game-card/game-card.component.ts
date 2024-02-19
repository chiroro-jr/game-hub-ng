import { Component, Input, OnInit } from '@angular/core'
import { Game } from '../../services/games.service'

@Component({
    selector: 'game-card',
    standalone: true,
    templateUrl: './game-card.component.html',
})
export class GameCardComponent {
    @Input({ required: true }) game!: Game
}
