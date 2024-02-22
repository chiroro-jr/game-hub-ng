import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'sort-selector',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'sort-selector.component.html',
})
export class SortSelectorComponent {
    sortOptions = [
        'Relevance',
        'Date added',
        'Name',
        'Release date',
        'Popularity',
        'Average rating',
    ]

    trackBySortValue(index: number, sortValue: string) {
        return sortValue
    }
}
