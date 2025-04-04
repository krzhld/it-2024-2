import { mount, el } from '../../node_modules/redom/dist/redom.es';
import LoginAndPassForm from '../widget/loginAndPassForm';
import Button from '../atom/button';
import t9n from '../utils/t9n/index';
import { commonEventManager } from '../utils/eventManager';
import my_fetch from '../api/index';

export default class LoginForm {
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

    _ui_render = () => {
        const { langId } = this._prop;
        return (
            <div className='d-flex flex-column'>
                <LoginAndPassForm this='_el_form_login' langId={langId} />
                <Button this='_el_button_to_login' title={t9n(langId, 'TO_LOGIN')} className='btn btn-primary' onClick={this._onBtnClickLogin} />
                <Button this='_el_button_to_sign_up' title={t9n(langId, 'TO_SIGN_UP')} className='btn btn-secondary' onClick={this._onBtnClickSignUp} />
            </div>
        )
    }

    _eventChangeLang = (lang) => {
        this._el_button_to_login.update({'text':t9n(lang, 'TO_LOGIN')});
        this._el_button_to_sign_up.update({'text':t9n(lang, 'TO_SIGN_UP')});
    }

    _onBtnClickLogin = () => {
        debugger;
        const email = this._el_form_login.getEmail();
        const password = this._el_form_login.getPassword();
        my_fetch('api/v1/login', {email, password});
    }

    _onBtnClickSignUp = () => {
        window.location.href = './registration.html';
    }
}
