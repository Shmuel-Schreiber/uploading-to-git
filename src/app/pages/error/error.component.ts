import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private s:MockService, private r:Router) {}

  ngOnInit() {
  }

}
