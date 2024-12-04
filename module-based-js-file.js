import {readdir} from 'fs/promises';

export async function run() {
    return  await readdir('./');
}