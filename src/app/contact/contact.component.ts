import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../shared/services/communicate.service';
import { Client } from '../shared/clients';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model = new Client("", "", "", "");

  constructor(private CommunicateService: CommunicateService) { }

  ngOnInit(): void {
  }

  sendForm(model: Client) {
    this.CommunicateService.uploadItem(model);
  }
  
}
