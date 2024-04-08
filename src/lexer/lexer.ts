import { Token, TokenType, Spec } from "./token";

class Lexer {

    protected codeStr: string
    protected cursor: number

    constructor(codeStr: string) {
        this.codeStr = codeStr;
        this.cursor = 0;
    }

    // Checks for end of file by comparing cursor value to source code length
    private isEOF(): boolean {
        return this.cursor >= this.codeStr.length
    }

    private match(regex: RegExp, str: string): string | null {
        const matched = regex.exec(str)
        if (matched === null) return null
        // Increase cursor to length of matched token length
        this.cursor += matched[0].length
        return matched[0]
    }

    public getNextToken(): Token | null {
        // If end of file then return null
        if (this.isEOF()) {
            return null
        }
        // Else create token
        const codeStr: string = this.codeStr.slice(this.cursor)
        for (const [regex, type] of Spec) {
            const value = this.match(regex, codeStr)
            if (value === null) continue
            return {
                type: type,
                value: value
            } as Token
        }
        throw new SyntaxError(`Unexpected Token: ${codeStr[0]}`)
    }

}

export default {Lexer}