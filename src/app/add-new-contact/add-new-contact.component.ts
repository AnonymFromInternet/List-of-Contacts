import {Component, EventEmitter, Output} from '@angular/core';
import {Contact} from "../../types/Contact";

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent {
  name: string = ""
  number: number | null = null
  @Output() newContact = new EventEmitter<Contact>()

  clearName() {
    this.name = ""
  }
  clearNumber() {
    this.number = null
  }

  addNewContact() {
    if (this.name === "" || this.number === null) {
      return
    }
    let newContact: Contact = {name: this.name, number: this.number, id: this.name, date: new Date().toLocaleDateString()}
    this.newContact.emit(newContact)

    this.name = ""
    this.number = null
  }
}
