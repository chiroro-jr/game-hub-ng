import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { Platform, PlatformsService } from '../../services/platforms.service'
import { EMPTY, Observable, catchError } from 'rxjs'

@Component({
    selector: 'platform-selector',
    imports: [CommonModule],
    providers: [PlatformsService],
    standalone: true,
    templateUrl: 'platform-selector.component.html',
})
export class PlatformSelectorComponent implements OnInit {
    platformsService = inject(PlatformsService)
    platforms$!: Observable<Platform[]>
    errorMessage = ''

    ngOnInit(): void {
        this.platforms$ = this.platformsService.getPlatforms().pipe(
            catchError((error) => {
                this.errorMessage = error
                return EMPTY
            })
        )
    }

    trackByPlatformId(index: number, plaform: Platform) {
        return plaform.id
    }
}
