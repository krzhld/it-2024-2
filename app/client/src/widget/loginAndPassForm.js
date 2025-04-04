import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Input from '../atom/input';
import t9n from '../utils/t9n/index';
import { commonEventManager } from '../utils/eventManager';

export default class LoginAndPassForm {
    constructor(settings = {}) {
        const {
            langId = commonEventManager.globalLangId,
        } = settings;

        this._prop = {
            langId,
        };

        this.el = this._ui_render();

        commonEventManager.subscribe('changeLang', this._eventChangeLang);
    }

    getEmail = () => {
        this._el_login.getInputText();
    }

    getPassword = () => {
        this._el_password.getInputText();
    }

    _eventChangeLang = (lang) => {
        this._el_login.updateLabel(t9n(lang, 'LOGIN'));
        this._el_password.updateLabel(t9n(lang, 'PASSWORD'));
    }

    _ui_render = () => {
        const { langId } = this._prop;

        return (
            <div className='d-flex flex-column'>
                <Input this='_el_login' label={t9n(langId, 'LOGIN')} />
                <Input this='_el_password' label={t9n(langId, 'PASSWORD')} />
            </div>
        )
    }
}
