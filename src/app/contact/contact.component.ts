import {Component, Input} from '@angular/core';
import {ItemsArrayService} from "../services/itemsArray.service";
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
  constructor(private service: ItemsArrayService) {}


  @Input() contactData: Contact = {name: "", number: "", date: "", id: ""}

  deleteContact(id: string) {
    this.service.deleteContact(id)
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
