import { Component, Input, OnInit, inject } from '@angular/core'
import { Game, GamesService } from '../../services/games.service'
import { EMPTY, Observable, ReplaySubject, catchError, switchMap } from 'rxjs'
import { AsyncPipe, CommonModule } from '@angular/common'
import { GameCardComponent } from '../game-card/game-card.component'
import { GameCardSkeletonComponent } from '../game-card-skeleton/game-card-skeleton.component'
import { GameCardContainerComponent } from '../game-card-container.component'
import { GameQuery } from '../../app.component'

@Component({
    selector: 'game-grid',
    standalone: true,
    imports: [
        AsyncPipe,
        CommonModule,
        GameCardComponent,
        GameCardSkeletonComponent,
        GameCardContainerComponent,
    ],
    providers: [GamesService],
    templateUrl: './game-grid.component.html',
})
export class GameGridComponent implements OnInit {
    gamesService = inject(GamesService)
    public games$!: Observable<Game[]>

    readonly gameQuery$ = new ReplaySubject<GameQuery>()
    @Input() set gameQuery(value: GameQuery) {
        this.gameQuery$.next(value)
    }

    errorMessage = ''

    ngOnInit(): void {
        this.games$ = this.gameQuery$.pipe(
            switchMap((gameQuery) =>
                this.gamesService.getGames(gameQuery).pipe(
                    catchError((error) => {
                        this.errorMessage = error
                        return EMPTY
                    })
                )
            )
        )
    }

    trackByGames(index: number, game: Game) {
        return game.id
    }

    trackByIndex(index: number) {
        return index
    }
}
