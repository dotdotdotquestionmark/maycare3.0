import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../clients';


/*setting up variables and links*/
const spreadsheet= "1nJiVkfPbjBSIJVj-ICS1G_QmEiDI4QV09NLLmX-oApM";


@Injectable({
  providedIn: 'root'
})

export class CommunicateService {

  constructor(
    private http: HttpClient) { }
  
  uploadItem(item:Client) {
    console.log(item); 
    if (item.name == "Stanley Wang") {
      console.log("no chinamen allowed not sorry");
        
    }

  }
}
