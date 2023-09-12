import { Injectable } from '@angular/core';
import { Contact } from 'src/app/shared/greeting/models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {
    firstName: 'Aung',
    lastName: 'Oo',
    phoneNumber: 3265234636,
    email: 'aungoo@gmail.com'
    }
  ];

  constructor() { }
}
