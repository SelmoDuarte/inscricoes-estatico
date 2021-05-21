import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private authService: AuthService, private route: ActivatedRoute) {

  }

  ngOnInit(){

       console.log(this.route.url);
    
  }
}
