import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core'
import { Game, GamesService } from '../../services/games.service'
import {
    BehaviorSubject,
    EMPTY,
    Observable,
    ReplaySubject,
    catchError,
    switchMap,
    tap,
} from 'rxjs'
import { AsyncPipe, CommonModule } from '@angular/common'
import { GameCardComponent } from '../game-card/game-card.component'
import { GameCardSkeletonComponent } from '../game-card-skeleton/game-card-skeleton.component'
import { GameCardContainerComponent } from '../game-card-container.component'
import { Genre } from '../../services/genres.service'

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

    readonly selectedGenre$ = new ReplaySubject<Genre | null>()
    @Input() set selectedGenre(value: Genre | null) {
        this.selectedGenre$.next(value)
    }

    errorMessage = ''

    ngOnInit(): void {
        this.games$ = this.selectedGenre$.pipe(
            switchMap((selectedGenre) =>
                this.gamesService.getGames(selectedGenre).pipe(
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
