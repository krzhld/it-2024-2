import status from './status';
import error from './error';

export default function registration(body) {
    const {email, password, passwordRepeat} = body;

    if (email === '') {
        return {
            status: status.failed,
            body: error.emptyEmail
        }
    }

    if (password === '') {
        return {
            status: status.failed,
            body: error.emptyPassword
        }
    }

    if (!(password === passwordRepeat)) {
        return {
            status: status.failed,
            body: error.differentPasswords,
        }
    }

    return {
        status: status.ok,
        body: 'registration was successful'
    }
}
