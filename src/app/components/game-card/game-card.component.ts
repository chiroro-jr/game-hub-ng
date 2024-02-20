import { Component, Input, OnInit } from '@angular/core'
import { Game, Platform } from '../../services/games.service'
import { CommonModule } from '@angular/common'
import { PlatformPipe } from '../../pipes/platform.pipe'
import { PlatformIconsListComponent } from '../platform-icons-list/platform-icons-list.component'
import { CriticScoreComponent } from '../critic-score.component'

@Component({
    selector: 'game-card',
    standalone: true,
    imports: [CommonModule, PlatformIconsListComponent, CriticScoreComponent],
    templateUrl: './game-card.component.html',
})
export class GameCardComponent {
    @Input({ required: true }) game!: Game
}
