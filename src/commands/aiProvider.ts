import * as vscode from 'vscode';
import { getCodeSuggestion } from '../utils/httpClient';

export class AICompletionProvider implements vscode.CompletionItemProvider {
    async provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): Promise<vscode.CompletionItem[]> {
        const textBeforeCursor = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        const prompt = `Completa el siguiente código:\n\n${textBeforeCursor}`;

        try {
            const suggestion = await getCodeSuggestion(prompt, undefined, { method: 'POST' });

            const item = new vscode.CompletionItem('Sugerencia de IA', vscode.CompletionItemKind.Snippet);
            item.insertText = suggestion.trim();
            item.documentation = new vscode.MarkdownString('Sugerencia generada por OpenAI.');
            return [item];
        } catch (error) {
            console.error('Error al generar sugerencia de IA:', error);
            return [];
        }
    }
}
