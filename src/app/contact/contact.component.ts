import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/greeting/models/contact';
import { ContactService } from '../modules/skills/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];
  contactDataService: ContactService;

  constructor(private contactsService: ContactService) {
    this.contactDataService = contactsService;
  }

  ngOnInit() {
    this.contacts = this.contactDataService.contacts;
  }

}
