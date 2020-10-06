import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  env = environment.apiUrl;
  constructor(private http: HttpClient) {
    console.log("Service Construtor Cards Pokemon OK");
  }

  getCard(id: string): Observable<any> {
    const url = `${environment.apiUrl}/${id}`;
    console.log(url);
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`read the card id = ${id}`)),
      catchError(this.handleError<any>(`getCard id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}