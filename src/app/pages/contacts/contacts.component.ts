import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public s:MockService, private r:Router) {}

  ngOnInit() {

    //if not login goto login page
  }

}
