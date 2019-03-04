export class MenuItem {
    etiqueta: string;
    enlace: string;
    esExterno: boolean;
    icono: string;
    hijos: SubMenuItem[];

    constructor(props) {
        Object.assign(this, props);
    }
}
export class SubMenuItem {
    etiqueta: string;
    enlace: string;
    esExterno: boolean;
    icono: string;

    constructor(props) {
        Object.assign(this, props);
    }
}