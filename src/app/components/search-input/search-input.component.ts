import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
    selector: 'search-input',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: 'search-input.component.html',
})
export class SearchInputComponent {
    @Output() search = new EventEmitter()

    onSearch(event: Event) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        this.search.emit(formData.get('searchText'))
    }
}
