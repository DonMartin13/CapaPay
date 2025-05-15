import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonTextarea, IonNote, IonButtons, IonModal } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";
@Component({
  selector: 'app-admin-instant-send',
  templateUrl: './admin-instant-send.page.html',
  styleUrls: ['./admin-instant-send.page.scss'],
  imports: [FormsModule, IonNote, IonTextarea, IonCard, IonItem, IonButton, IonApp, IonIcon, IonLabel, IonContent, IonInput, StatusBarComponent] 

})
export class AdminInstantSendPage implements OnInit {

  user: any = null;
  constructor(private router: Router ) { }

  showTransferFrom = false;

  selectedAccount = {
    number: '',
    amount: ''
  };
  

  ngOnInit() {
      const navigation = this.router.getCurrentNavigation();
  const state = navigation?.extras?.state as { userNumber: string };

  if (state?.userNumber) {
    this.selectedAccount.number = state.userNumber;
  }
  }
  goBackHome() {
    this.router.navigate(['/admin-wallet-method']);
  }
  goToConfirmationPayment() {
  this.router.navigate(['/admin-payment-confirmation'], {
    state: { 
      userNumber: this.selectedAccount.number,
      amount: this.selectedAccount.amount
    }
  });
}

}
