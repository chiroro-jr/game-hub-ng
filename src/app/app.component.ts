import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { initFlowbite } from 'flowbite'
import { NavBarComponent } from './components/nav-bar.component'
import { GameGridComponent } from './components/game-grid/game-grid.component'
import { GenreListComponent } from './components/genre-list/genre-list.component'

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
    title = 'game-hub-ng'

    ngOnInit() {
        initFlowbite()
    }
}
