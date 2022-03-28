import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Contact} from "../../types/Contact"
import {animate, style, transition, trigger, state} from "@angular/animations";

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
  @Input() contactData: Contact = {name: "", number: 0, date: "", id: ""}
  @Output() contactId = new EventEmitter<string>()

  id(id: string) {
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
