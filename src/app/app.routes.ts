import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OldtimerdagComponent} from "./oldtimerdag/oldtimerdag.component";
import {StandhoudersComponent} from "./standhouders/standhouders.component";
import {AdverterenComponent} from "./adverteren/adverteren.component";
import {FotosComponent} from "./fotos/fotos.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'oldtimerdag', component: OldtimerdagComponent},
  {path: 'standhouders', component: StandhoudersComponent},
  {path: 'adverteren', component: AdverterenComponent},
  {path: 'fotos', component: FotosComponent},
  {path: 'contact', component: ContactComponent}
]
