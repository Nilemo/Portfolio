import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials/angular-materials.module';


@NgModule({
  declarations: [SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    AngularMaterialsModule
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent
  ]
})
export class UiModule { }
