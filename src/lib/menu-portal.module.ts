import { NgModule } from '@angular/core';
import { MenuPortalComponent } from './menu-portal.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MenuPortalComponent],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [MenuPortalComponent]
})
export class MenuPortalModule { }
