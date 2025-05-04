import prompt from "prompt"
import creatQRCode from "./services/qr-code/create.js"

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js"
import chalk from "chalk";

import creatPassword from "./services/password/create.js";


async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (err) console.log(err)
        
        if(choose.select == 1) await creatQRCode()
        if(choose.select == 2) await creatPassword()
    });

    prompt.start();
}

main()