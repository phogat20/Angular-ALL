import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.servise';
import { AuthGuard } from './auth-guard.service';
import { CanDeactiveGuard } from './servers/edit-server/can-deactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
// //appRoutes holds all the routes of the application.
// //
// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   {
//     path: 'users',
//     component: UsersComponent,
//     children: [{ path: 'users/:id/:name', component: UserComponent }],
//   },

//   {
//     path: 'servers',
//     component: ServersComponent,
//     children: [
//       { path: ':id', component: ServerComponent },
//       { path: ':id/edit', component: EditServerComponent },
//     ],
//   },
//   { path: 'not-found', component: PageNotFoundComponent },
//   //Sould be the last route in the routes
//   // ** is wildcard which we take care of all the invalid URL which does not exist
//   //The pathMatch property is used to define the path matching strategy for a route. It has four possible values:'full': Matches the full URL including any trailing slashes.
//   { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    // RouterModule should be imported and pass value of paths
  ],
  providers: [
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactiveGuard,
    ServerResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
