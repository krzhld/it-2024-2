import { mount, el } from '../node_modules/redom/dist/redom.es';
import RegForm from './widget/regForm';
import t9n from './utils/t9n/index';
import Button from './atom/button';
import Text from './atom/text';
import { commonEventManager } from './utils/eventManager';

class RegistrationPage {
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
        this._el_text_sign_up.updateLabel(t9n(lang, 'SIGN_UP_PAGE'));
        this._el_button_change_lang.update({'text':t9n(lang, 'INTERFACE_LANGUAGE')});
    }

    _onBtnClick = () => {
        debugger;
        const { langId } = this._prop;
        const newLangId = langId === 'ru' ? 'en' : 'ru';
        commonEventManager.dispatch('changeLang', newLangId);
        this._prop.langId = newLangId;
        commonEventManager.globalLangId = newLangId;
    }

    _ui_render = () => {
        const { langId } = this._prop;
        return (
            <div>
                <h1> <Text this='_el_text_sign_up' label={t9n(langId, 'SIGN_UP_PAGE')} /> </h1>
                <Button this='_el_button_change_lang' title={t9n(langId, 'INTERFACE_LANGUAGE')} className='btn btn-primary' onClick={this._onBtnClick} />
                <RegForm langId={langId}/>
            </div>
        )
    }
}

mount(
    document.getElementById('main'),
    <RegistrationPage />
);
