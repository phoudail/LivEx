import type { DefinitionList, Example } from '../language/generated/ast.js';
import { expandToNode, joinToNode, toString } from 'langium/generate';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { extractDestinationAndName } from './cli-util.js';

export function generateJavaScript(model: DefinitionList, filePath: string, destination: string | undefined): string {
    const data = extractDestinationAndName(filePath, destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.js`;

    const fileNode = expandToNode`
        "use strict";

        ${joinToNode(model.defs, def => `console.log('Hello, ${def}!');`, { appendNewLineIfNotEmpty: true })}
    `.appendNewLineIfNotEmpty();

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, toString(fileNode));
    return generatedFilePath;
}

export function generateExample(): string {
    return "Oh wow hi"
}

export function generateExecRequest(defList: DefinitionList): Object {
    const ex = defList.defs[0] as Example;

    const funcName = ex.target.name;
    const strArgs = ex.scenario.args.map(arg => arg.value);
    return {
        "method": funcName,
        "args": strArgs,
    };
}