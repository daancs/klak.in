import {PASS} from '../secrets.js';

export function validateToken(token) {
    return token === PASS;
}