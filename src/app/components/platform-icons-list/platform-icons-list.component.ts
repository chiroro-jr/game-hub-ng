import { Component, Input, OnInit } from '@angular/core'
import { Platform } from '../../services/games.service'
import { NgFor } from '@angular/common'
import { PlatformPipe } from '../../pipes/platform.pipe'
import { IconType, NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    bootstrapGlobe,
    bootstrapNintendoSwitch,
} from '@ng-icons/bootstrap-icons'
import { matPhoneIphoneOutline } from '@ng-icons/material-icons/outline'
import {
    faBrandWindows,
    faBrandPlaystation,
    faBrandXbox,
    faBrandApple,
    faBrandLinux,
    faBrandAndroid,
} from '@ng-icons/font-awesome/brands'

const plaformIcons = {
    faBrandWindows,
    faBrandPlaystation,
    faBrandXbox,
    faBrandApple,
    faBrandLinux,
    faBrandAndroid,
    matPhoneIphoneOutline,
    bootstrapGlobe,
    bootstrapNintendoSwitch,
}

@Component({
    selector: 'platform-icons-list',
    standalone: true,
    imports: [NgFor, PlatformPipe, NgIconComponent],
    templateUrl: 'platform-icons-list.component.html',
    viewProviders: [provideIcons({ ...plaformIcons })],
})
export class PlatformIconsListComponent {
    iconMap: { [key: string]: IconType } = {
        ios: 'matPhoneIphoneOutline',
        android: 'faBrandAndroid',
        web: 'bootstrapGlobe',
        mac: 'faBrandApple',
        pc: 'faBrandWindows',
        linux: 'faBrandLinux',
        nintendo: 'bootstrapNintendoSwitch',
        playstation: 'faBrandPlaystation',
        xbox: 'faBrandXbox',
    }

    @Input({ required: true }) platforms!: { platform: Platform }[]

    trackByPlaform(index: number, plaform: Platform) {
        return plaform.id
    }
}
