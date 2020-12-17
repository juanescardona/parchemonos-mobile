import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDetailPageRoutingModule } from './card-detail-routing.module';

import { CardDetailPage } from './card-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [CardDetailPage]
})
export class CardDetailPageModule {}
