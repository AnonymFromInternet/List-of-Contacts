import {Component, OnInit} from '@angular/core';
import {ItemsArrayService} from "../services/itemsArray.service";
import {Contact} from "../../types/Contact";

// Types Imports

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit{
  constructor(private service: ItemsArrayService) {}
  contacts: Contact[] = []

  ngOnInit() {
    this.contacts = this.service.contacts
  }

}
