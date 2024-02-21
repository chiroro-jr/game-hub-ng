import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { initFlowbite } from 'flowbite'
import { NavBarComponent } from './components/nav-bar.component'
import { GameGridComponent } from './components/game-grid/game-grid.component'
import { GenreListComponent } from './components/genre-list/genre-list.component'
import { Genre } from './services/genres.service'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavBarComponent,
        GameGridComponent,
        GenreListComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    selectedGenre: Genre | null = null
    title = 'game-hub-ng'

    handleSelectedGenre(genre: Genre) {
        this.selectedGenre = genre
    }

    ngOnInit() {
        initFlowbite()
    }
}
