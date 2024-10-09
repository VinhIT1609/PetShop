import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private REST_API_SERVER = 'https://localhost:7064/api/';
  private httpOptions = {
    headers: new HttpHeaders(),
  };

  constructor(private httprequest: HttpClient) {
    this.httpOptions.headers.append('Content-Type', 'application/json');
    this.httpOptions.headers.append('Content-Type', 'multipart/form-data');
  }

  public Call_API(
    alias: string,
    type: string,
    dataname?: string | null,
    data?: any
  ) {
    var url = this.REST_API_SERVER + alias;
    if (type == 'post') {
      var formdata = new FormData();
      if (dataname) {
        formdata.append(dataname, JSON.stringify(data));
      } else {
        formdata.append('data', JSON.stringify(data));
      }
      // console.log(formdata.get('data'));
      return this.httprequest.post<any>(url, formdata, this.httpOptions);
    } else if (type == 'get') {
      return this.httprequest.get<any>(url, this.httpOptions);
    }
    return null;
  }
}
