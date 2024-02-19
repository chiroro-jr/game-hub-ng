import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { initFlowbite } from 'flowbite'
import { NavBarComponent } from './components/nav-bar.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    title = 'game-hub-ng'

    ngOnInit() {
        initFlowbite()
    }
}
