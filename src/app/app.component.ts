import { Component, OnInit } from '@angular/core';
import { MockService } from './services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mockup';
  isLoading:boolean = true


  constructor(private s:MockService, private r:Router) {}

  ngOnInit(){
    this.s.login().subscribe(isLogin => {
      if (isLogin) {
        this.s.getContacts('').subscribe(_contacts => {
          this.isLoading = false
          this.r.navigateByUrl('/contacts')
        })
      } else {
        //error
        this.isLoading = false
        
        this.s.lastError = 'mooo niet login'
        this.r.navigateByUrl('/error')
      }
    })
  }

}
