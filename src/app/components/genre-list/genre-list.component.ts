import { AsyncPipe, NgFor } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { Genre, GenresService } from '../../services/genres.service'
import { EMPTY, Observable, catchError } from 'rxjs'

@Component({
    selector: 'genre-list',
    standalone: true,
    imports: [NgFor, AsyncPipe],
    providers: [GenresService],
    templateUrl: 'genre-list.component.html',
})
export class GenreListComponent implements OnInit {
    genres$!: Observable<Genre[]>
    genresService = inject(GenresService)
    errorMessage = ''

    ngOnInit() {
        this.genres$ = this.genresService.getGenres().pipe(
            catchError((error) => {
                this.errorMessage = error
                return EMPTY
            })
        )
    }

    trackByGenreId(index: number, genre: Genre) {
        return genre.id
    }
}
