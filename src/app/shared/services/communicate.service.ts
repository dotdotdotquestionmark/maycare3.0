import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../clients';
import { google } from 'googleapis';


/*setting up variables and links*/
const spreadsheet= "1nJiVkfPbjBSIJVj-ICS1G_QmEiDI4QV09NLLmX-oApM";


@Injectable({
  providedIn: 'root'
})

export class CommunicateService {

  constructor(
    private http: HttpClient) { }


  authenticate() {
    const apikey: string = "AIzaSyDOzDFAA4qFh1-DIzsp9frBSpiAdTlix3E";
    const clientID: string = "104639220756548749750";
    const scopevalue: string = "https://www.googleapis.com/auth/spreadsheets";
    const discoverydoc: string = "https://sheets.googleapis.com/$discovery/rest?version=v4";
    const client = gapi.client.init({
      apiKey: apikey,
      clientId: clientID,
      discoveryDocs: [discoverydoc],
      scope: scopevalue
    })
  }
  
  uploadItem(item:Client) {
    console.log(item); 
    if (item.name == "Stanley Wang") {
      console.log("no chinamen allowed not sorry");
    this.authenticate;
    }

  }
}
