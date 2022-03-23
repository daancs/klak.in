import {pass} from '../secrets.js';

export function validateToken(token) {
    return token === pass;
}