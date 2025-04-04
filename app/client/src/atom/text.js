import { mount, el } from '../../node_modules/redom/dist/redom.es';

export default class Text {
    constructor(settings = {}) {
        const {
            label = '',
        } = settings;

        this._prop = {
            label,
        }
        this.el = this._ui_render();
    }

    updateLabel = (label) => {
        this._el_label.innerText = label;
    }

    _ui_render = () => {
        const { label } = this._prop;
        return (
            <span this='_el_label'>{label}</span>
        )
    }
}
