import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Starts our app module by passing AppModule in argument
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
