import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private REST_API_SERVER = 'https://localhost:7064/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httprequest: HttpClient) {}

  public Call_API(alias: string, type: string, data?: any) {
    var url = this.REST_API_SERVER + alias;
    if (type == 'post') {
      return this.httprequest.post<any>(url, data, this.httpOptions);
    } else if (type == 'get') {
      return this.httprequest.get<any>(url, this.httpOptions);
    }
    return null;
  }
}
