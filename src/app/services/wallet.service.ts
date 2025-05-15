import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private baseUrl = environment.baseUrl;
  private walletUrl = `${this.baseUrl}/Wallet`;// Adjust base URL as needed

  constructor(private http: HttpClient) { }

  getWallets(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== null && query[key] !== undefined) {
        params = params.set(key, query[key]);
      }
    });

    return this.http.get(`${this.walletUrl}`, { params });
  }

  getWallet(id: string): Observable<any> {
    return this.http.get(`${this.walletUrl}/${id}`);
  }

  addWallet(payload: any): Observable<any> {
    return this.http.post(`${this.walletUrl}`, payload);
  }

  updateWallet(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.walletUrl}/${id}`, payload);
  }

  deleteWallet(id: string): Observable<any> {
    return this.http.delete(`${this.walletUrl}/${id}`);
  }

  createCompanyWallet(payload: any): Observable<any> {
    return this.http.post(`${this.walletUrl}/create-company-wallet`, payload);
  }

  addBonus(payload: any): Observable<any> {
    return this.http.post(`${this.walletUrl}/add-bonus`, payload);
  }
  sendMoney(payload: any): Observable<any> {
    return this.http.post(`${this.walletUrl}/send-money`, payload);
  }
}
