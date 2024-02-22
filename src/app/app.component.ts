import { Component, OnInit } from '@angular/core'
import { initFlowbite } from 'flowbite'
import { NavBarComponent } from './components/nav-bar.component'
import { GameGridComponent } from './components/game-grid/game-grid.component'
import { GenreListComponent } from './components/genre-list/genre-list.component'
import { Genre } from './services/genres.service'
import { PlatformSelectorComponent } from './components/platform-selector/platform-selector.component'
import { Platform } from './services/platforms.service'
import { SortSelectorComponent } from './components/sort-selector/sort-selector.component'

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string | null
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NavBarComponent,
        GameGridComponent,
        GenreListComponent,
        PlatformSelectorComponent,
        SortSelectorComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    gameQuery = {} as GameQuery

    handleSelectedGenre(genre: Genre) {
        this.gameQuery = { ...this.gameQuery, genre }
    }

    handleSelectPlatform(platform: Platform) {
        this.gameQuery = { ...this.gameQuery, platform }
    }

    handleSelectSortOrder(sortOrder: string) {
        this.gameQuery = { ...this.gameQuery, sortOrder }
    }

    ngOnInit() {
        initFlowbite()
    }
}
