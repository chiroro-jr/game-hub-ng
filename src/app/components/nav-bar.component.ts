import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'nav-bar',
    standalone: true,
    template: `
        <nav>
            <img src="assets/images/logo.webp" alt="game hub logo" />
        </nav>
    `,
    styles: `
        nav {
            display: flex;
        }

        nav img {
            width: 60px
        }
    `,
})
export class NavBarComponent {}
