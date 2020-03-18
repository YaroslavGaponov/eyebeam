import { readFileSync } from "fs";
import { join } from "path";
import { IncomingMessage, ServerResponse } from "http";

export function handler(url: string) {
    const html = readFileSync(join(__dirname, "eyebeam.html")).toString().replace("${url}", url);
    return (req: IncomingMessage, res: ServerResponse) => res.end(html);
}
