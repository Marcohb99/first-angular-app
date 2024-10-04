import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {ConsoleDetailComponent} from './console-detail/console-detail.component';
import {SingupComponent} from './singup/singup.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Video Game details',
  },
  {
    path: 'create-account',
    component: SingupComponent,
    title: 'Create account',
  },
  {
    path: 'console-details/:id',
    component: ConsoleDetailComponent,
    title: 'Console details',
  },
];
export default routeConfig;