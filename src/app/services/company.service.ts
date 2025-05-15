import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = environment.baseUrl;
    private companyUrl = `${this.baseUrl}/Company`; 

  constructor(private http: HttpClient) {}

  getCompanies(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== undefined && query[key] !== null) {
        params = params.set(key, query[key]);
      }
    });

    return this.http.get(`${this.companyUrl}`, { params });
  }

  getCompanyById(id: string): Observable<any> {
    return this.http.get(`${this.companyUrl}/${id}`);
  }

  createCompany(companyData: any): Observable<any> {
    return this.http.post(`${this.companyUrl}`, companyData);
  }

  updateCompany(id: string, companyData: any): Observable<any> {
    return this.http.put(`${this.companyUrl}/${id}`, companyData);
  }

  joinCompany(data: any): Observable<any> {
    return this.http.post(`${this.companyUrl}/join-company`, data);
  }

  deleteCompany(id: string): Observable<any> {
    return this.http.delete(`${this.companyUrl}/${id}`);
  }
  getRequests(companyId: string): Observable<any> {
    return this.http.get(`${this.companyUrl}/requests/${companyId}`);
  }

  processJoinRequest(data: { userId: string, companyId: string, status: string }): Observable<any> {
    return this.http.post(`${this.companyUrl}/process-join-request`, data, {
      responseType: 'text'
    });
  } 
  getCompanyByCode(companyCode: string): Observable<any> {
    return this.http.get(`${this.companyUrl}/by-code/${companyCode}`);
  }
  
}
