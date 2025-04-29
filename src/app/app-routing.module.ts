import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Authentication/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-option',
    loadChildren: () => import('./Authentication/register-option/register-option.module').then( m => m.RegisterOptionPageModule)
  },
  {
    path: 'employee-home',
    loadChildren: () => import('./Employee/employee-home/employee-home.module').then( m => m.EmployeeHomePageModule)
  },
  {
    path: 'employee-notification',
    loadChildren: () => import('./Employee/employee-notification/employee-notification.module').then( m => m.EmployeeNotificationPageModule)
  },
  {
    path: 'employee-receipt',
    loadChildren: () => import('./Employee/employee-receipt/employee-receipt.module').then( m => m.EmployeeReceiptPageModule)
  },
  {
    path: 'employee-transaction-history',
    loadChildren: () => import('./Employee/employee-transaction-history/employee-transaction-history.module').then( m => m.EmployeeTransactionHistoryPageModule)
  },
  {
    path: 'admin-balance-management',
    loadChildren: () => import('./Admin/admin-balance-management/admin-balance-management.module').then( m => m.AdminBalanceManagementPageModule)
  },
  {
    path: 'admin-employee-transaction-report',
    loadChildren: () => import('./Admin/admin-employee-transaction-report/admin-employee-transaction-report.module').then( m => m.AdminEmployeeTransactionReportPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./Admin/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'admin-kiosk-management',
    loadChildren: () => import('./Admin/admin-kiosk-management/admin-kiosk-management.module').then( m => m.AdminKioskManagementPageModule)
  },
  {
    path: 'admin-notification',
    loadChildren: () => import('./Admin/admin-notification/admin-notification.module').then( m => m.AdminNotificationPageModule)
  },
  {
    path: 'admin-receipt',
    loadChildren: () => import('./Admin/admin-receipt/admin-receipt.module').then( m => m.AdminReceiptPageModule)
  },
  {
    path: 'admin-transaction-history',
    loadChildren: () => import('./Admin/admin-transaction-history/admin-transaction-history.module').then( m => m.AdminTransactionHistoryPageModule)
  },
  {
    path: 'kiosk-home',
    loadChildren: () => import('./Kiosk/kiosk-home/kiosk-home.module').then( m => m.KioskHomePageModule)
  },
  {
    path: 'kiosk-notification',
    loadChildren: () => import('./Kiosk/kiosk-notification/kiosk-notification.module').then( m => m.KioskNotificationPageModule)
  },
  {
    path: 'kiosk-receipt',
    loadChildren: () => import('./Kiosk/kiosk-receipt/kiosk-receipt.module').then( m => m.KioskReceiptPageModule)
  },
  {
    path: 'kiosk-transaction-history',
    loadChildren: () => import('./Kiosk/kiosk-transaction-history/kiosk-transaction-history.module').then( m => m.KioskTransactionHistoryPageModule)
  },
  {
    path: 'admin-qr-generator',
    loadChildren: () => import('./Admin/admin-qr-generator/admin-qr-generator.module').then( m => m.AdminQrGeneratorPageModule)
  },
  {
    path: 'employee-qr-generator',
    loadChildren: () => import('./Employee/employee-qr-generator/employee-qr-generator.module').then( m => m.EmployeeQrGeneratorPageModule)
  },
  {
    path: 'company-details',
    loadChildren: () => import('./Authentication/company-details/company-details.module').then( m => m.CompanyDetailsPageModule)
  },
  {
    path: 'admin-profile',
    loadChildren: () => import('./Admin/admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  },
  {
    path: 'employee-profile',
    loadChildren: () => import('./Employee/employee-profile/employee-profile.module').then( m => m.EmployeeProfilePageModule)
  },
  {
    path: 'kiosk-profile',
    loadChildren: () => import('./Kiosk/kiosk-profile/kiosk-profile.module').then( m => m.KioskProfilePageModule)
  },
  {
    path: 'kiosk-scanner',
    loadChildren: () => import('./Kiosk/kiosk-scanner/kiosk-scanner.module').then( m => m.KioskScannerPageModule)
  },
  {
    path: 'admin-employee-management',
    loadChildren: () => import('./Admin/admin-employee-management/admin-employee-management.module').then( m => m.AdminEmployeeManagementPageModule)
  },
  {
    path: 'admin-credit-details',
    loadChildren: () => import('./Admin/admin-credit-details/admin-credit-details.module').then( m => m.AdminCreditDetailsPageModule)
  },
  {
    path: 'employee-wallet-method',
    loadChildren: () => import('./Employee/employee-wallet-method/employee-wallet-method.module').then( m => m.EmployeeWalletMethodPageModule)
  },
  {
    path: 'employee-instant-send',
    loadChildren: () => import('./Employee/employee-instant-send/employee-instant-send.module').then( m => m.EmployeeInstantSendPageModule)
  },
  {
    path: 'employee-scanner',
    loadChildren: () => import('./Employee/employee-scanner/employee-scanner.module').then( m => m.EmployeeScannerPageModule)
  },
  {
    path: 'employee-payment-confirmation',
    loadChildren: () => import('./Employee/employee-payment-confirmation/employee-payment-confirmation.module').then( m => m.EmployeePaymentConfirmationPageModule)
  },
  {
    path: 'admin-kiosk-transaction-report',
    loadChildren: () => import('./Admin/admin-kiosk-transaction-report/admin-kiosk-transaction-report.module').then( m => m.AdminKioskTransactionReportPageModule)
  },
  {
    path: 'admin-employee-detailed-transaction',
    loadChildren: () => import('./Admin/admin-employee-detailed-transaction/admin-employee-detailed-transaction.module').then( m => m.AdminEmployeeDetailedTransactionPageModule)
  },
  {
    path: 'admin-kiosk-detailed-transaction',
    loadChildren: () => import('./Admin/admin-kiosk-detailed-transaction/admin-kiosk-detailed-transaction.module').then( m => m.AdminKioskDetailedTransactionPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./Authentication/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'kiosk-register',
    loadChildren: () => import('./Authentication/kiosk-register/kiosk-register.module').then( m => m.KioskRegisterPageModule)
  },
  {
    path: 'admin-wallet-method',
    loadChildren: () => import('./Admin/admin-wallet-method/admin-wallet-method.module').then( m => m.AdminWalletMethodPageModule)
  },
  {
    path: 'admin-instant-send',
    loadChildren: () => import('./Admin/admin-instant-send/admin-instant-send.module').then( m => m.AdminInstantSendPageModule)
  },
  {
    path: 'admin-scanner',
    loadChildren: () => import('./Admin/admin-scanner/admin-scanner.module').then( m => m.AdminScannerPageModule)
  },
  {
    path: 'employee-credit-details',
    loadChildren: () => import('./Employee/employee-credit-details/employee-credit-details.module').then( m => m.EmployeeCreditDetailsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./Authentication/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verification-password',
    loadChildren: () => import('./Authentication/verification-password/verification-password.module').then( m => m.VerificationPasswordPageModule)
  },
  {
    path: 'set-new-password',
    loadChildren: () => import('./Authentication/set-new-password/set-new-password.module').then( m => m.SetNewPasswordPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./Authentication/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
