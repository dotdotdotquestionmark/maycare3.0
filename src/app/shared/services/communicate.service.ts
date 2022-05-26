import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../clients';





@Injectable({
  providedIn: 'root'
})

export class CommunicateService {

  ROOT_URL = "http://108.233.124.81:8206/postings"

  constructor(
    private http: HttpClient) { }
  
  uploadItem(item:Client) {
    
    console.table(item); 
    
    this.http.post(this.ROOT_URL, JSON.stringify(item)).subscribe();
        
    }

  }
