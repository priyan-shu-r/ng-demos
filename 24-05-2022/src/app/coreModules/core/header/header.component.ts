import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authenticationModule/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNavbar = new EventEmitter<any>();

showData: boolean = false;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  showSideNavbar(event:any){
    this.showData=!this.showData;
    console.log("clicked",event);
    this.toggleSideNavbar.emit(this.showData);
    console.log('showdata',this.showData);
    
   }

   logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
