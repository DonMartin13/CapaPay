import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-receipt',
  templateUrl: './admin-receipt.page.html',
  styleUrls: ['./admin-receipt.page.scss'],
  imports: [IonApp, IonIcon, IonContent, CommonModule, StatusBarComponent] 
})
export class AdminReceiptPage implements OnInit {
  transaction: any;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private location: Location
  ) {}

  ngOnInit() {
     const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      const transactionId = this.route.snapshot.paramMap.get('id');

      if (transactionId) {
        this.transactionService.getTransaction(transactionId, this.user.id).subscribe({
          next: (data) => {
            this.transaction = data;
          },
          error: (err) => {
            console.error('Failed to fetch transaction', err);
          }
        });
      }
    }
  }
  goBack() {
    this.router.navigate(['/admin-home']);
  }


}
