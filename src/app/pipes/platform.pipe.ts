import { Pipe, PipeTransform } from '@angular/core'
import { Game, Platform } from '../services/games.service'

@Pipe({
    name: 'plaform',
    standalone: true,
})
export class PlatformPipe implements PipeTransform {
    transform(value: { platform: Platform }[], ...args: any[]) {
        const platforms = value.map((platform) => platform.platform)
        return platforms
    }
}
