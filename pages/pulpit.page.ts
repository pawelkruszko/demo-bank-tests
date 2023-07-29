import { Page } from '@playwright/test';

export class PulpitPage {
  constructor(private page: Page) {}

  receiverId = this.page.locator('#widget_1_transfer_receiver');
  transferAmount = this.page.locator('#widget_1_transfer_amount');
  transferTitle = this.page.locator('#widget_1_transfer_title');

  clickButton = this.page.getByRole('button', { name: 'wykonaj' });
  closeButton = this.page.getByTestId('close-button');

  userNameText = this.page.getByTestId('user-name');

  topUpReceiver = this.page.locator('#widget_1_topup_receiver');
  topUpAmount = this.page.locator('#widget_1_topup_amount');
  topUpAgreement = this.page.locator('#uniform-widget_1_topup_agreement span');

  clickNextButton = this.page.getByRole('button', { name: 'doładuj telefon' });
}
