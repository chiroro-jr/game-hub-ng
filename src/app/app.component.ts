import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { initFlowbite } from 'flowbite'
import { NavBarComponent } from './components/nav-bar.component'
import { GameGridComponent } from './components/game-grid/game-grid.component'
import { GenreListComponent } from './components/genre-list/genre-list.component'
import { Genre } from './services/genres.service'
import { PlatformSelectorComponent } from './components/platform-selector/platform-selector.component'
import { Platform } from './services/platforms.service'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavBarComponent,
        GameGridComponent,
        GenreListComponent,
        PlatformSelectorComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    selectedGenre: Genre | null = null
    selectedPlatform: Platform | null = null
    title = 'game-hub-ng'

    handleSelectedGenre(genre: Genre) {
        this.selectedGenre = genre
    }

    handleSelectPlatform(platform: Platform) {
        this.selectedPlatform = platform
    }

    ngOnInit() {
        initFlowbite()
    }
}
