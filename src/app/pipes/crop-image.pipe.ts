import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'crop',
    standalone: true,
})
export class CropImagePipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        const target = 'media/'
        const index = value.indexOf(target) + target.length
        return value.slice(0, index) + 'crop/600/400/' + value.slice(index)
    }
}
