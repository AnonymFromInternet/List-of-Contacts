import {Component, EventEmitter, Output} from '@angular/core';
import {Contact} from "../../types/Contact";
import {ContactsArrayService} from "../services/contactsArray.service";

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent {
  constructor(private contactsArrayService: ContactsArrayService) {}

  @Output() newContact = new EventEmitter<Contact>()

  name: string = ""
  number: string = ""
  regexpNumber = /[0-9]/

  clearName() {
    this.name = ""
  }
  clearNumber() {
    this.number = ""
  }

  addNewContact() {
    if (this.name === "" || this.number === "" || this.number.match(/[a-z]/)) {
      return
    }

    let newContact: Contact = {name: this.name, number: this.number, id: this.name, date: new Date().toLocaleDateString()}
    this.contactsArrayService.addNewContact(newContact).subscribe()

    this.name = ""
    this.number = ""
    this.newContact.emit(newContact)
  }
}
