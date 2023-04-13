import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.servise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //  Router class is the primary class responsible for handling navigation and routing within an application.
  constructor(private router: Router,
    private authService: AuthService) {}

  ngOnInit() {}

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }
}

// The Router class has a number of properties and methods that can be used to control and manipulate routing behavior, including:
// navigate: A method that allows the application to navigate to a specific route based on a URL path.

// navigateByUrl: A method that allows the application to navigate to a specific route based on a full URL string.

// navigateForward: A method that allows the application to navigate forward in the navigation history.

// navigateBack: A method that allows the application to navigate back in the navigation history.

// events: An observable that allows the application to subscribe to changes in the navigation history.

// isActive: A method that checks whether a given URL is currently active in the application.

// createUrlTree: A method that creates a URL tree based on a given set of route parameters
