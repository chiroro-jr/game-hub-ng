import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'color-mode-switch',
    standalone: true,
    templateUrl: './color-mode-switch.component.html',
})
export class ColorModeSwitchComponent implements OnInit {
    colorMode!: 'dark' | 'light'
    isDarkMode!: boolean

    ngOnInit() {
        this.colorMode = localStorage.getItem('game-hub-color-mode') as
            | 'dark'
            | 'light'
        this.changeColorMode(this.colorMode)
    }

    toggleDarkMode() {
        this.colorMode = this.colorMode === 'dark' ? 'light' : 'dark'
        this.changeColorMode(this.colorMode)
        localStorage.setItem('game-hub-color-mode', this.colorMode)
    }

    changeColorMode(colorMode: string) {
        if (colorMode === 'dark') {
            this.isDarkMode = true
            document.documentElement.classList.add('dark')
        } else {
            this.isDarkMode = false
            document.documentElement.classList.remove('dark')
        }
    }
}
