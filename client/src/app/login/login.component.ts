import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageText: any;
  messageTextStyle: string;

  login :Login= {
    username: "test",
    password: '*********', 
  };

  constructor(private loginservise : LoginService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login);
    this.loginservise.onLoginServise(this.login).subscribe(data => {
     
      if (!data.success) {
        this.messageTextStyle = "alert alert-denger";
        this.messageText = data.message;
      } else {
        this.messageTextStyle = "alert alert-success";
        console.log("sucess");
        console.log(data.user);
        this.loginservise.storeUserData(data.token,data.user)
        this.messageText = data.message;
        // this.router.navigate(['/login']);
        this.router.navigate(['/dashbord']);

      }
    });
  }
}
