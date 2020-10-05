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

  public getCards(): Observable<ListModel> {
    let endpoint = "?supertype=pokemon&pageSize=1000";
    return this.http.get<ListModel>(this.env + endpoint);
  }

  getCard(id: number): Observable<ListService> {
    const url = `${environment.apiUrl}/cards/${id}`;
    return this.http.get<ListService>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<ListService>(`getProduto id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}