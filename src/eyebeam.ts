import { readFileSync } from "fs";
import { join } from "path";
import { IncomingMessage, ServerResponse } from "http";
import { EyebeamSettings } from "./eyebeam-settings.interface";

const DEBUG = process.env.NODE_ENV !== 'production';

export function handler(settings: EyebeamSettings) {
    let template = readFileSync(join(__dirname, "eyebeam.html")).toString();

    for (const name in settings) {
        template = template.replace(new RegExp(`\\$\\{${name}\\\}`, "g"), `${settings[name]}`);
    }

    return (req: IncomingMessage, res: ServerResponse) => {
        if (DEBUG) res.setHeader('Cache-Control', 'no-cache');
        res.end(template);
    }
}
