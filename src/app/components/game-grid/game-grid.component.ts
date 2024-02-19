import { Component, OnInit, inject } from '@angular/core'
import { Game, GamesService } from '../../services/games.service'
import { EMPTY, Observable, catchError } from 'rxjs'
import { AsyncPipe, CommonModule } from '@angular/common'

@Component({
    selector: 'game-grid',
    standalone: true,
    imports: [AsyncPipe, CommonModule],
    providers: [GamesService],
    templateUrl: './game-grid.component.html',
})
export class GameGridComponent implements OnInit {
    gamesService = inject(GamesService)
    games$!: Observable<Game[]>
    errorMessage = ''

    ngOnInit(): void {
        this.games$ = this.gamesService.getGames().pipe(
            catchError((error) => {
                this.errorMessage = error
                return EMPTY
            })
        )
    }

    trackByGames(index: number, game: Game) {
        return game.id
    }
}
