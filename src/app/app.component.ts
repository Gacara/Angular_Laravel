

import { Component, Injectable } from '@angular/core';
import { Item } from './Item';
import { NgForm }   from '@angular/forms';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
    constructor(private http: HttpClient){}

     
    private httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};

  	title = 'AGILE';


  	onSubmit(form: NgForm): Promise <Item>{
        return this.http.post('http://127.0.0.1:8000/api/items', JSON.stringify(form.value),this.httpOptions)

  		   .toPromise()
    	        
    	            .catch(this.handleError);





  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  }
}

