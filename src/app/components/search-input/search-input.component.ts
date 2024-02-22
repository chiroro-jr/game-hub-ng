import { Component, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
    selector: 'search-input',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: 'search-input.component.html',
})
export class SearchInputComponent {}
