import { Component} from '@angular/core';

// Types Imports
import {Contact} from "../../types/Contact";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  contacts: Contact[] = [
    {id: "Anna", name: "Anna", number: "333", date: new Date().toLocaleDateString()},
    {id: "Alex", name: "Alex", number: "333", date: new Date().toLocaleDateString()},
    {id: "Martin", name: "Martin", number: "333", date: new Date().toLocaleDateString()},
  ]
  deleteContact(id: string) {
    this.contacts.forEach(contact => {
      if (contact.id === id) {
        let indexOfContact: number = this.contacts.indexOf(contact)
        setTimeout(() => {
          this.contacts.splice(indexOfContact, 1)
        }, 800)
      }
    })
  }
  addContact(contact: Contact) {
    this.contacts.push(contact)
  }
}
