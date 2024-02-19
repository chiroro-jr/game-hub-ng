import { Component, OnInit } from '@angular/core'
import { ColorModeSwitchComponent } from './color-mode-switch/color-mode-switch.component'

@Component({
    selector: 'nav-bar',
    standalone: true,
    imports: [ColorModeSwitchComponent],
    template: `
        <nav>
            <img src="assets/images/logo.webp" alt="game hub logo" />
            <color-mode-switch />
        </nav>
    `,
    styles: `
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-inline: 10px;
        }

        nav img {
            width: 60px
        }
    `,
})
export class NavBarComponent {}
