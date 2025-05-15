import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KioskService {
  private baseUrl = environment.baseUrl;
  private kioskUrl = `${this.baseUrl}/Kiosk`;

  constructor(private http: HttpClient) {}

  // GET /Kiosk?sortBy=Name&kioskIds=...
  getKiosks(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== undefined && query[key] !== null) {
        if (Array.isArray(query[key])) {
          query[key].forEach((item: any) => {
            params = params.append(key, item);
          });
        } else {
          params = params.set(key, query[key]);
        }
      }
    });

    return this.http.get(`${this.kioskUrl}`, { params });
  }

  // GET /Kiosk/{id}
  getKioskById(id: string): Observable<any> {
    return this.http.get(`${this.kioskUrl}/${id}`);
  }

  // POST /Kiosk
  createKiosk(data: any): Observable<any> {
    return this.http.post(`${this.kioskUrl}`, data);
  }

  // PUT /Kiosk/{id}
  updateKiosk(id: string, data: any): Observable<any> {
    return this.http.put(`${this.kioskUrl}/${id}`, data);
  }

  // DELETE /Kiosk/{id}
  deleteKiosk(id: string): Observable<any> {
    return this.http.delete(`${this.kioskUrl}/${id}`);
  }

  // GET /Kiosk/by-company/{companyId}
  getKiosksByCompanyId(companyId: string): Observable<any> {
    return this.http.get(`${this.kioskUrl}/by-company/${companyId}`);
  }
    getKiosksByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.kioskUrl}/by-user/${userId}`);
  }
}
