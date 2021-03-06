import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuPortalComponent } from './menu-portal.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MenuPortalComponent],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [MenuPortalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuPortalModule { }
