export enum TokenType {
    // Literals
    NUMBER,
    STRING,
}

export interface Token {
    value: string,
    type: TokenType
}

export const Spec: Array<[RegExp, TokenType]> = [
    [/^\d+/, TokenType.NUMBER],
    [/^['"][^'"]*['"]/, TokenType.STRING],
]