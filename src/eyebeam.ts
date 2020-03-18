import { readFileSync } from "fs";
import { join } from "path";
import { IncomingMessage, ServerResponse } from "http";

const DEBUG = process.env.NODE_ENV !== 'production';

/**
 * http(s) handler
 * @param url  - metrics server url
 * @param interval  - interval
 */
export function handler(url: string, interval: number = 1000) {
    const html = readFileSync(join(__dirname, "eyebeam.html")).toString()
        .replace(/\$\{url\}/g, url)
        .replace(/\$\{interval\}/g, interval.toString())
        ;

    return (req: IncomingMessage, res: ServerResponse) => {
        if (DEBUG) res.setHeader('Cache-Control', 'no-cache');
        res.end(html);
    }
}
