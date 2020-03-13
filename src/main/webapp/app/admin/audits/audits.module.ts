import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlFiscalOperacionesApplicationSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [ControlFiscalOperacionesApplicationSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
