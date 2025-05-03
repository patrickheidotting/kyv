import {Component} from '@angular/core';
import {SiFacebookIcon, SiInstagramIcon} from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-footer',
  imports: [SiFacebookIcon, SiInstagramIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
