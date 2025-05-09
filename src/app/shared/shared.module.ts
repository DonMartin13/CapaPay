import { NgModule } from '@angular/core';
import { EmployeeNavbarComponent } from '../Components/employee-navbar/employee-navbar.component';
import { AdminNavbarComponent } from '../Components/admin-navbar/admin-navbar.component';
import { KioskNavbarComponent } from '../Components/kiosk-navbar/kiosk-navbar.component';
import { NotificationComponent } from '../Components/notification/notification.component';
import { TransactionHistoryComponent } from '../Components/transaction-history/transaction-history.component';
import { WalletMethodComponent } from '../Components/wallet-method/wallet-method.component';
import { InstantSendComponent } from '../Components/instant-send/instant-send.component';
import { QrComponent } from '../Components/qr/qr.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { BalanceContainerComponent } from '../Components/balance-container/balance-container.component';
import { ReceiptComponent } from '../Components/receipt/receipt.component';
import { PaymentConfirmationComponent } from '../Components/payment-confirmation/payment-confirmation.component';
import { ScanPaymentComponent } from '../Components/scan-payment/scan-payment.component';

@NgModule({
  imports: [
    EmployeeNavbarComponent,
    AdminNavbarComponent,
    KioskNavbarComponent,
    NotificationComponent,
    TransactionHistoryComponent,
    WalletMethodComponent,
    InstantSendComponent,
    QrComponent,
    ProfileComponent,
    BalanceContainerComponent,
    ReceiptComponent,
    PaymentConfirmationComponent,
    ScanPaymentComponent,
  ],  // Import here
  exports: [
    EmployeeNavbarComponent,
    AdminNavbarComponent,
    KioskNavbarComponent,
    NotificationComponent,
    TransactionHistoryComponent,
    WalletMethodComponent,
    InstantSendComponent,
    QrComponent,
    ProfileComponent,
    BalanceContainerComponent,
    ReceiptComponent,
    PaymentConfirmationComponent,
    ScanPaymentComponent,
  ],  // Export it for reuse
})
export class SharedModule {}
