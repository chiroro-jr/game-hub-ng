import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'sort-selector',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: 'sort-selector.component.html',
})
export class SortSelectorComponent {
    sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-popularity', label: 'Popularity' },
        { value: '-metacritic', label: 'Average rating' },
    ]

    @Output() selectSortOrder = new EventEmitter()
    @Input() selectedSortOrder!: string | null

    getCurrentSortOrder(selectedSortOrder: string | null) {
        const sortOrder = this.sortOrders.find(
            (sortOrder) => sortOrder.value === selectedSortOrder
        )

        if (sortOrder) {
            return sortOrder.label
        }

        return this.sortOrders[0].label
    }

    onSelectSortOrder(sortOrder: string) {
        this.selectSortOrder.emit(sortOrder)
    }

    trackBySortOrder(
        index: number,
        sortOrder: { value: string; label: string }
    ) {
        return sortOrder.value
    }
}
