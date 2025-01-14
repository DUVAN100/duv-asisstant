import * as vscode from 'vscode';

export class SnippetCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(): vscode.CompletionItem[] {
        const snippets = [
            {
                label: 'for-loop',
                kind: vscode.CompletionItemKind.Snippet,
                documentation: 'Bucle for básico.',
                insertText: new vscode.SnippetString(
                    `for (let ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t${3:console.log(${2:array}[${1:i}])}\n}`
                ),
            },
            {
                label: 'console-log',
                kind: vscode.CompletionItemKind.Snippet,
                documentation: 'Imprime un mensaje en la consola.',
                insertText: new vscode.SnippetString(`console.log(${1:mensaje});`),
            },
        ];

        if (snippets.length === 0) {
            return [];
        }

        return snippets.map(
            snippet => {
                const completionItem = new vscode.CompletionItem(snippet.label, snippet.kind);
                completionItem.documentation = new vscode.MarkdownString(snippet.documentation);
                completionItem.insertText = snippet.insertText;
                return completionItem;
            }
        );
    }
}
