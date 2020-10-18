import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


import { ListModel } from '../models/list.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListService {
  env = environment.apiUrl;
  constructor(private http: HttpClient) {
    console.log("Service Construtor Cards Pokemon OK");
  }

   getCards(): Observable<ListModel> {
    let endpoint = "?supertype=pokemon&pageSize=1000";
    return this.http
      .get<ListModel>(this.env + endpoint)
      .pipe(tap(_ =>
        console.log(`read the cards pokémon id = ${this.env + endpoint}`)),
        catchError(this.handleError<any>(`getCards id=${this.env + endpoint}`))
      );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}