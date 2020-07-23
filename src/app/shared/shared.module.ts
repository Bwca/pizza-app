import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CallToActionButtonComponent } from './components/call-to-action-button/call-to-action-button.component';
import { CartItemViewComponent } from './components/cart-item-view/cart-item-view.component';
import { ItemAmountComponent } from './components/item-amount/item-amount.component';
import { ItemPriceComponent } from './components/item-price/item-price.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemPriceComponent, ItemAmountComponent, CallToActionButtonComponent, CartItemViewComponent],
  exports: [ItemPriceComponent, ItemAmountComponent, CallToActionButtonComponent, CartItemViewComponent],
})
export class SharedModule {}
