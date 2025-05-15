import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-receipt',
  templateUrl: './employee-receipt.page.html',
  styleUrls: ['./employee-receipt.page.scss'],
  
 imports: [CommonModule, IonApp, IonIcon, IonContent] 
})
export class EmployeeReceiptPage implements OnInit {

  transaction: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private location: Location
  ) {}

  ngOnInit() {

  }
  goBack() {
    this.location.back();
  }

}
