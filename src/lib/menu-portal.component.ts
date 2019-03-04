import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MenuItem } from './menu-portal-models';
declare var $: any;

@Component({
    selector: 'jcyl-menu-portal',
    templateUrl: './menu-portal.component.html',
    styleUrls: [
        './menu-portal.component.scss'
    ]
})
export class MenuPortalComponent implements OnInit {
    @Input() config: MenuItem[];

    constructor() { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        document.body.style.width = '100%';
        document.getElementById('main-menu').style.width = '100%';
    }
    ngOnInit() {
        console.log('Items: ', this.config);
        $('document').ready(() => {
            console.log('Cargado');
            // $('#main-menu').sidr();
        });
        $(document).ready(() => {
            $('#main-menu-sticky-wrapper').sticky();
        });
    }

    isSticky(): boolean {
        let res: boolean;
        res = false;
        const element = document.getElementById('main-menu-sticky-wrapper-sticky-wrapper');
        if (element) {
            if (element.classList.contains('is-sticky')) {
                res = true;
            }
        }
        return res;
    }
}
