import {Component, EventEmitter, Output} from '@angular/core';
import {Contact} from "../../types/Contact";

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent {
  name: string = ""
  number: string = ""
  regexpNumber = /[0-9]/

  @Output() newContact = new EventEmitter<Contact>()

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
    this.newContact.emit(newContact)

    this.name = ""
    this.number = ""
  }
}
