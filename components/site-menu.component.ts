import { Page } from '@playwright/test';

export class SiteMenuComponent {
  constructor(private page: Page) {}

  paymentButton = this.page.getByRole('link', { name: 'płatności' });
}
