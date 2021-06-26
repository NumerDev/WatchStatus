import { PanelComponent } from './panel/panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPositionComponent } from './add-position/add-position.component';

const routes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'addPosition', component: AddPositionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
