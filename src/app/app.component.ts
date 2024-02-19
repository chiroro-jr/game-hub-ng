import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { initFlowbite } from 'flowbite'
import { NavBarComponent } from './components/nav-bar.component'
import { GameGridComponent } from './components/game-grid/game-grid.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavBarComponent, GameGridComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'game-hub-ng'

    ngOnInit() {
        initFlowbite()
    }
}
