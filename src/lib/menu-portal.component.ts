import {
    Component, OnInit, Input, HostListener,
    NgZone, ChangeDetectorRef,
    OnDestroy, AfterViewInit
} from '@angular/core';
import { MenuItem } from './menu-portal-models';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
declare var $: any;

@Component({
    selector: 'jcyl-menu-portal',
    templateUrl: './menu-portal.component.html',
    styleUrls: [
        './menu-portal.component.scss'
    ]
})
export class MenuPortalComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() config: MenuItem[];

    constructor(
        private focusMonitor: FocusMonitor,
        private cdr: ChangeDetectorRef,
        private ngZone: NgZone
    ) { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        document.body.style.width = '100%';
        document.getElementById('main-menu').style.width = '100%';
    }
    ngOnInit() {
        $(document).ready(() => {
            $('#main-menu-sticky-wrapper').sticky(
                {
                    zIndex: 1
                }
            );
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

    ngAfterViewInit() {
        /*this.config.forEach((element, index) => {
            const ele = document.getElementById('submenu' + index);
            if (ele) {
                this.focusMonitor.monitor(ele, false)
                    .subscribe(
                        origin => this.ngZone.run(
                            () => {
                                if (origin) {
                                    if (origin === 'keyboard') {
                                        $('#' + ele.getAttribute('id') + '>a.menu-focus').css('opacity', 1);
                                    }
                                    ele.classList.add('activo');
                                    ele.classList.add('activo-focus');
                                } else {
                                    $('#' + ele.getAttribute('id') + '>a.menu-focus').css('opacity', 0);
                                    ele.classList.remove('activo')
                                    ele.classList.remove('activo-focus');
                                }
                                this.cdr.markForCheck();
                            }
                        )
                    );
            }
        });*/
    }

    showSubmenu(event, element) {
        if (ENTER === event.keyCode) {
            const ele = document.getElementById(element);
            if (ele.classList.contains('activo')) {
                document.getElementById(element).classList.remove('activo');
                document.getElementById(element).classList.add('activo-focus');
            } else {
                document.getElementById(element).classList.remove('activo-focus');
                document.getElementById(element).classList.add('activo');
            }
        }
    }

    ngOnDestroy() {
        this.config.forEach((element, index) => {
            const ele = document.getElementById('submenu' + index);
            this.focusMonitor.stopMonitoring(ele);
        });
    }
}
