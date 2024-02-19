import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import {
    Observable,
    catchError,
    count,
    delay,
    delayWhen,
    map,
    retry,
    throwError,
} from 'rxjs'

export interface Game {
    id: string
    name: string
}

interface FetchGamesResponse {
    count: number
    results: Game[]
}

@Injectable({
    providedIn: 'root',
})
export class GamesService {
    httpClient = inject(HttpClient)
    baseUrl = 'https://api.rawg.io/api/games'
    apiKey = 'fc992f5179d14507bfc1bddc17a9c03c'
    baseParams = new HttpParams().set('key', this.apiKey)

    getGames() {
        return this.httpClient
            .get<FetchGamesResponse>(this.baseUrl, {
                params: this.baseParams,
            })
            .pipe(
                map((res) => res.results),
                retry({ count: 3, delay: 500 }),
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error.message)
        let errorMessage = `An error has occured: ${error.message}`
        return throwError(() => errorMessage)
    }
}
