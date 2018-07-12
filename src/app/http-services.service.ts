import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpServicesService {

  url = 'https://auth.betacart.treedom.net/token';
  urlTreeDom = 'https://api.betacart.treedom.net/graphql';
  private jwt: string;

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {

    const credentials = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.httpClient.post(this.url, credentials)
      .map(data => {
          this.jwt = data['jwt'];
          return data;
        },
        error => {
          console.log(error)
        }
      )

  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.jwt
      })
    }
  }

  getTreeList(): Observable<any> {

    const query = 'query{\n' +
      '  species(limit:10){\n' +
      '    id\n' +
      '    name {\n' +
      '      it\n' +
      '      en\n' +
      '      es\n' +
      '      de\n' +
      '      fr\n' +
      '    } \n' +
      '    scientificName{\n' +
      '      name\n' +
      '    }\n' +
      '  }\n' +
      '}';

    return this.httpClient.post(this.urlTreeDom, {query: query}, this.getHeaders())
      .map(data => {
          return data['data'];
        },
        error => {
          console.log(error)
        })
  }
}
