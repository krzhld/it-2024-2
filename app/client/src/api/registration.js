import statusResponse from './status';
import error from './error';

export default function registration(body) {
    const {email, password, passwordRepeat} = body;

    if (email === '') {
        return {
            status: statusResponse.failed,
            body: error.emptyEmail
        }
    }

    if (password === '') {
        return {
            status: statusResponse.failed,
            body: error.emptyPassword
        }
    }

    if (!(password === passwordRepeat)) {
        return {
            status: statusResponse.failed,
            body: error.differentPasswords,
        }
    }

    return {
        status: statusResponse.ok,
        body: 'registration was successful'
    }
}
