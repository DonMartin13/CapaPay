import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = environment.baseUrl;
  private transactionUrl = `${this.baseUrl}/Transaction`; // Adjust as needed

  constructor(private http: HttpClient) { }

  getTransactions(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== null && query[key] !== undefined) {
        params = params.set(key, query[key]);
      }
    });

    return this.http.get(`${this.transactionUrl}`, { params });
  }

  getTransaction(id: string, userId: string): Observable<any> {
  return this.http.get(`${this.transactionUrl}/${id}?userId=${userId}`);
}


  getTransactionsByUserId(userId: string, limit?: number, sortBy: string = 'date_desc'): Observable<any> {
    // Construct the URL with query parameters
    let url = `${this.transactionUrl}/user/${userId}?sortBy=${sortBy}`;
    
    if (limit) {
      url += `&limit=${limit}`; // Add the limit if provided
    }
    
    return this.http.get(url);
  }  

  addTransaction(payload: any): Observable<any> {
    return this.http.post(`${this.transactionUrl}`, payload);
  }

  updateTransaction(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.transactionUrl}/${id}`, payload);
  }

  deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.transactionUrl}/${id}`);
  }
}
