import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, catchError, map, retry, throwError } from 'rxjs'

export interface Genre {
    id: number
    name: string
}

interface FetchGenresResponse {
    count: number
    results: Genre[]
}

@Injectable({ providedIn: 'root' })
export class GenresService {
    httpClient = inject(HttpClient)
    baseUrl = 'https://api.rawg.io/api/genres'
    apiKey = 'fc992f5179d14507bfc1bddc17a9c03c'
    baseParams = new HttpParams().set('key', this.apiKey)

    getGenres() {
        return this.httpClient
            .get<FetchGenresResponse>(this.baseUrl, { params: this.baseParams })
            .pipe(
                map((data) => data.results),
                retry({ count: 3, delay: 500 }),
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = `An error has occured: ${error.message}`
        return throwError(() => errorMessage)
    }
}
