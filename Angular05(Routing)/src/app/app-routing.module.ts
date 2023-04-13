import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactiveGuard } from './servers/edit-server/can-deactivate.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

//appRoutes holds all the routes of the application.
//
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: 'users/:id/:name', component: UserComponent }],
  },

  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactiveGuard],
      },
    ],
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page Not Found!!!' },
  },
  //Sould be the last route in the routes
  // ** is wildcard which we take care of all the invalid URL which does not exist
  //The pathMatch property is used to define the path matching strategy for a route. It has four possible values:'full': Matches the full URL including any trailing slashes.
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  // Hash mode routing
  // inform web server before hash part only will be used and after hash part will be ignored.

  // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//Hash mode routing is a client-side routing technique used in web development, particularly in single-page applications (SPAs). It involves using the URL fragment identifier (the part of the URL that comes after the # symbol) to manage application state and render different views or components.
//The advantage of hash mode routing is that it allows for a seamless user experience, as the page does not have to reload every time the user navigates to a different view or component. It also allows for better performance and scalability, as the server does not have to handle as many requests.
