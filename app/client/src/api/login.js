import statusResponse from './status';
import error from './error';

export default function login(body) {
    const {email, password} = body;
    if (email === '') {
        return {
            status: statusResponse.failed,
            body: error.emptyEmail,
        }
    }

    if (password === '') {
        return {
            status: statusResponse.failed,
            body: error.emptyPassword,
        }
    }

    return {
        status: statusResponse.ok,
        body: 'authorization was successful',
    }
}
