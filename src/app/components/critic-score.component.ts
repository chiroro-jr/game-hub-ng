import { NgClass } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'critic-score',
    standalone: true,
    imports: [NgClass],
    template: `
        @if (score >= 90) {
        <span
            class="bg-green-100 text-green-700 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            >{{ score }}</span
        >
        } @else if (score < 90 && score >= 70) {
        <span
            class="bg-yellow-100 text-yellow-700 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-yellow-500 dark:text-yellow-300"
            >{{ score }}</span
        >
        } @else {
        <span
            class="bg-gray-100 text-gray-700 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300"
            >{{ score }}</span
        >
        }
    `,
})
export class CriticScoreComponent {
    currentClasses: Record<string, boolean> = {}
    @Input({ required: true }) score!: number
}
