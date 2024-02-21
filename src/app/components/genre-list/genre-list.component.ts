import { AsyncPipe, CommonModule, NgFor } from '@angular/common'
import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    inject,
} from '@angular/core'
import { Genre, GenresService } from '../../services/genres.service'
import { EMPTY, Observable, catchError } from 'rxjs'
import { CropImagePipe } from '../../pipes/crop-image.pipe'

@Component({
    selector: 'genre-list',
    standalone: true,
    imports: [CommonModule, AsyncPipe, CropImagePipe],
    providers: [GenresService],
    templateUrl: 'genre-list.component.html',
})
export class GenreListComponent implements OnInit {
    genres$!: Observable<Genre[]>
    genresService = inject(GenresService)
    errorMessage = ''

    @Input() selectedGenre!: Genre | null

    @Output() selectGenre = new EventEmitter()

    selectedGenreClasses(id: number) {
        return {
            'font-bold': this.selectedGenre
                ? this.selectedGenre.id === id
                : false,
        }
    }

    onSelectGenre(genre: Genre) {
        this.selectGenre.emit(genre)
    }

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
