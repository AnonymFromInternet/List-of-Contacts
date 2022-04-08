import {Component, OnInit} from '@angular/core';
import {Contact} from "../../types/Contact";
import {ContactsArrayService} from "../services/contactsArray.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent implements OnInit {
  constructor(private contactsService: ContactsArrayService) {}

  contacts: Contact[] = []

  deleteContact(id: string) {
    setTimeout(() => {
      this.contacts = this.contacts.filter(element => element.id !== id)
    }, 600)
  }

  addContact(newContact: Contact) {
      this.contacts.push(newContact)
  }

  ngOnInit() {
    this.contactsService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts
    })
  }
}
