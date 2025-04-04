import status from './status';
import login from './login';
import registration from './registration';

export default function my_fetch(url, body) {
    switch(url) {
        case 'api/v1/login':
            return login(body);
        case 'api/v1/registration':
            return registration(body);
        default:
            return {
                status: status.sys_error,
                body: "system error has occured"
            }
    }
}
