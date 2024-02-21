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
export class GameGridComponent implements OnInit, OnChanges {
    gamesService = inject(GamesService)
    @Input({ required: true }) selectedGenre: Genre | null = null
    selectedGenreSubject = new BehaviorSubject<Genre | null>(null)
    games$ = this.selectedGenreSubject.pipe(
        switchMap((selectedGenre) => {
            return this.gamesService.getGames(selectedGenre).pipe(
                catchError((error) => {
                    this.errorMessage = error
                    return EMPTY
                })
            )
        })
    )
    errorMessage = ''

    ngOnChanges(changes: SimpleChanges): void {
        this.selectedGenreSubject.next(changes['selectedGenre'].currentValue)
    }

    ngOnInit(): void {
        this.selectedGenreSubject.next(this.selectedGenre)
    }

    trackByGames(index: number, game: Game) {
        return game.id
    }

    trackByIndex(index: number) {
        return index
    }
}
