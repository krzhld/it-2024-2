import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Input from '../atom/input';
import Button from '../atom/button';
import LoginAndPassForm from '../widget/loginAndPassForm';
import { commonEventManager } from '../utils/eventManager';
import t9n from '../utils/t9n/index';
import my_fetch from '../api/index';

export default class RegForm {
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

    _eventChangeLang = (lang) => {
        this._el_repeat_password.updateLabel(t9n(lang, 'TO_REPEAT_PASSWORD'));
        this._el_button_sign_up.update({'text':t9n(lang, 'TO_SIGN_UP')});
        this._el_button_to_login.update({'text':t9n(lang, 'TO_LOGIN')});
    }

    _onBtnClickSignUp = () => {
        //debugger;
        const email = this._el_form_login.getEmail();
        const password = this._el_form_login.getPassword();
        const passwordRepeat = this._el_repeat_password.getInputText();
        console.log(my_fetch('api/v1/registration', {email, password, passwordRepeat}));
    }

    _onBtnClickLogin = () => {
        window.location.href = './login.html';
    }

    _ui_render = () => {
        const { langId } = this._prop;
        return (
            <div className='d-flex flex-column'>
                <LoginAndPassForm this='_el_form_login' langId={langId}/>
                <Input this='_el_repeat_password' label={t9n(langId, 'TO_REPEAT_PASSWORD')} />
                <Button this='_el_button_sign_up' title={t9n(langId, 'TO_SIGN_UP')} className='btn btn-primary' onClick={this._onBtnClickSignUp} />
                <Button this='_el_button_to_login' title={t9n(langId, 'TO_LOGIN')} className='btn btn-secondary' onClick={this._onBtnClickLogin} />
            </div>
        )
    }
}
