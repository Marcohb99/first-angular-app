import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
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
];
export default routeConfig;