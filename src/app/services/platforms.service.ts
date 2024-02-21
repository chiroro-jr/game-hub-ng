import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, catchError, map, retry, throwError } from 'rxjs'

export interface Platform {
    id: number
    name: string
    slug: string
}

interface FetchPlatformsResponse {
    count: number
    results: Platform[]
}

@Injectable({
    providedIn: 'root',
})
export class PlatformsService {
    httpClient = inject(HttpClient)
    baseUrl = 'https://api.rawg.io/api/platforms/lists/parents'
    apiKey = 'fc992f5179d14507bfc1bddc17a9c03c'
    baseParams = new HttpParams().set('key', this.apiKey)

    getPlatforms() {
        return this.httpClient
            .get<FetchPlatformsResponse>(this.baseUrl, {
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
