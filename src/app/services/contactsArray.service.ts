import {Contact} from "../../types/Contact";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable()
export class ContactsArrayService {
  constructor(private http: HttpClient) {
  }

  getAllContacts() {
    return this.http.get<Contact[]>('http://localhost:3000/contacts')
  }

  addNewContact(newContact: Contact) {
    return this.http.post<Contact>(`http://localhost:3000/contacts`, newContact)
  }

  deleteContact(id: string) {
    return this.http.delete<Contact>(`http://localhost:3000/contacts/${id}`)
  }

  }

