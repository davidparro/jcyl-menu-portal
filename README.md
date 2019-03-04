# MenuPortal

Debemos descargar desde el [Repositorio de la junta de Castilla y León](https://github.com/juntadecastillayleon) las carpetas de la guía de estilos, para poder importar los css, js, fuentes, etc.

Copiar todo dentro de assets, dejando la estructura así:
```
assets
    css
    js
    fonts
    img
```

##NPM
```shell
npm install jcyl-menu-portal
```

##Importación de dependencias

Importar en angular.json:
```js
"styles": [
    "src/assets/css/normalize.css",
    "src/assets/css/fonts.css",
    "src/assets/css/jquery.sidr.light.css",
    "src/assets/css/jquery-ui.min.css",
    "src/assets/css/prism.css",
    "src/assets/css/general.css",
    "src/assets/css/componentes.css",
    "src/assets/css/menu-portal.css",
    "src/assets/css/guia-estilos.css",
    "src/styles.scss"
],
"scripts": [
    "src/assets/js/jquery-1.12.4.min.js",
    "src/assets/js/jquery-ui.min.js",
    "src/assets/js/jquery.sidr.min.js",
    "src/assets/js/jquery.sticky.js",
    "src/assets/js/datepicker-es.js",
    "src/assets/js/prism.js",
    "src/assets/js/menu.js",
    "src/assets/js/portal.js"
],
```
Importar el módulo en app.module.ts

```js

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPortalModule } from 'jcyl-menu-portal';

@NgModule({
  declarations: [AppComponent],
  imports: [
        BrowserModule,
        AppRoutingModule,
        MenuPortalModule
        ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

##Ejemplo de objeto que debemos pasar
```js
items: MenuItem[] = [
        new MenuItem({
            etiqueta: 'Inicio',
            enlace: '/',
            esExterno: false,
            icono: 'home'
        }),
        new MenuItem({
            etiqueta: 'Menu 1',
            enlace: '/siguiente',
            esExterno: false,
            hijos: [
                new SubMenuItem({
                    etiqueta: 'Submenu 1',
                    enlace: '/siguiente',
                    esExterno: false
                }),
                new SubMenuItem({
                    etiqueta: 'Google',
                    enlace: 'http://www.google.es',
                    esExterno: true
                })
            ]
        })
    ];
```
