import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = environment.baseUrl;
  private recordUrl = `${this.baseUrl}/Record`;

  constructor(private http: HttpClient) {}

  getUsersWithBalance(companyId: string): Observable<any> {
    const params = new HttpParams().set('companyId', companyId);
    return this.http.get(`${this.recordUrl}/user/balance`, { params });
  }

  downloadUsersBalancePdf(companyId: string): Observable<Blob> {
    const params = new HttpParams().set('companyId', companyId);
    return this.http.get(`${this.recordUrl}/user/balance/pdf`, {
      params,
      responseType: 'blob'
    });
  }

  downloadTransactionReportPdf(companyId: string, fromDate?: string, toDate?: string): Observable<Blob> {
    let params = new HttpParams().set('companyId', companyId);
    if (fromDate) params = params.set('fromDate', fromDate);
    if (toDate) params = params.set('toDate', toDate);

    return this.http.get(`${this.recordUrl}/report/kiosk/pdf`, {
      params,
      responseType: 'blob'
    });
  }

  downloadUserTransactionPdf(companyId: string, fullName: string, date?: string): Observable<Blob> {
    let params = new HttpParams()
      .set('companyId', companyId)
      .set('fullName', fullName);
    if (date) params = params.set('date', date);

    return this.http.get(`${this.recordUrl}/report/user/pdf`, {
      params,
      responseType: 'blob'
    });
  }
}
