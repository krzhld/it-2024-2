import status from './status';
import error from './error';

export default function login(body) {
    const {email, password} = body;

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

    return {
        status: status.ok,
        body: 'authorization was successful'
    }
}
