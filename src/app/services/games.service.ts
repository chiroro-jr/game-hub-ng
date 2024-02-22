import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, catchError, map, retry, throwError } from 'rxjs'
import { GameQuery } from '../app.component'

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
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

    getGames(gameQuery: GameQuery) {
        let params = this.baseParams

        if (gameQuery.genre) {
            params = params.append('genres', gameQuery.genre.id.toString())
        }

        if (gameQuery.platform) {
            params = params.append(
                'parent_platforms',
                gameQuery.platform.id.toString()
            )
        }

        if (gameQuery.sortOrder) {
            params = params.append('ordering', gameQuery.sortOrder)
        }

        return this.httpClient
            .get<FetchGamesResponse>(this.baseUrl, {
                params,
            })
            .pipe(
                map((res) => res.results),
                retry({ count: 3, delay: 500 }),
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = `An error has occured: ${error.message}`
        return throwError(() => errorMessage)
    }
}
