import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ColorModeSwitchComponent } from './color-mode-switch/color-mode-switch.component'
import { SearchInputComponent } from './search-input/search-input.component'

@Component({
    selector: 'nav-bar',
    standalone: true,
    template: `
        <nav class="flex items-center px-2.5 pt-3 pb-6 gap-3">
            <img src="assets/images/logo.webp" alt="game hub logo" />
            <div class="flex-1">
                <search-input (search)="handleSearch($event)" />
            </div>
            <color-mode-switch />
        </nav>
    `,
    styles: `

        nav img {
            width: 60px
        }
    `,
    imports: [ColorModeSwitchComponent, SearchInputComponent],
})
export class NavBarComponent {
    @Output() search = new EventEmitter()

    handleSearch(searchText: string) {
        this.search.emit(searchText)
    }
}
