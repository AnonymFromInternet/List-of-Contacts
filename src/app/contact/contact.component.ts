import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "../../types/Contact"
import {animate, style, transition, trigger, state} from "@angular/animations";
import {ContactsArrayService} from "../services/contactsArray.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger("popOverState", [
      state("show", style({
        opacity: 1
      })),
      state("hide", style({
        opacity: 0
      })),
      transition("show => hide", animate("600ms ease-out")),
      transition("hide => show", animate("600ms ease-in"))
    ])
  ]
})
export class ContactComponent {
  constructor(private contactsArrayService: ContactsArrayService) {}

  @Input() contactData: Contact = {name: "", number: "", date: "", id: ""}
  @Output() contactId = new EventEmitter<string>()

  deleteContact(id: string) {
    this.contactsArrayService.deleteContact(id).subscribe()
    this.contactId.emit(id)
  }


  // Animation Part
  animation = true

  get state() {
    return this.animation ? 'show' : 'hide'
  }

  toggleAnim() {
    this.animation = !this.animation
  }
}
