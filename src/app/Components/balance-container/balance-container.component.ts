import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-container',
  templateUrl: './balance-container.component.html',
  styleUrls: ['./balance-container.component.scss'],
})
export class BalanceContainerComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreditDetials() {
    // IF EMPLOYEE - IF AFMIN - IF KIOSK
    this.router.navigate(['/admin-credit-details']);
  }

}
