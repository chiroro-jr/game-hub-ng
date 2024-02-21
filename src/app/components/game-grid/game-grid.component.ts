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
    EMPTY,
    Observable,
    ReplaySubject,
    catchError,
    combineLatest,
    switchMap,
} from 'rxjs'
import { AsyncPipe, CommonModule } from '@angular/common'
import { GameCardComponent } from '../game-card/game-card.component'
import { GameCardSkeletonComponent } from '../game-card-skeleton/game-card-skeleton.component'
import { GameCardContainerComponent } from '../game-card-container.component'
import { Genre } from '../../services/genres.service'
import { Platform } from '../../services/platforms.service'

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

    readonly selectedPlatform$ = new ReplaySubject<Platform | null>()
    @Input() set selectedPlatform(value: Platform | null) {
        console.log(value)
        this.selectedPlatform$.next(value)
    }

    errorMessage = ''

    ngOnInit(): void {
        this.games$ = combineLatest([
            this.selectedGenre$,
            this.selectedPlatform$,
        ]).pipe(
            switchMap(([selectedGenre, selectedPlatform]) =>
                this.gamesService
                    .getGames(selectedGenre, selectedPlatform)
                    .pipe(
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
