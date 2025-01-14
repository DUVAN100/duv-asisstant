import * as vscode from 'vscode';
import { AICompletionProvider } from './commands/aiProvider';
import { SnippetCompletionProvider } from './commands/snippetProvider';
import { settings } from './config/settings';

export function activate(context: vscode.ExtensionContext) {
    settings.supportedLanguages.forEach(language => {
        const aiProvider = vscode.languages.registerCompletionItemProvider(
            { scheme: 'file', language },
            new AICompletionProvider()
        );

        const snippetProvider = vscode.languages.registerCompletionItemProvider(  
            { scheme: 'file', language },
            new SnippetCompletionProvider()
        );

        context.subscriptions.push(aiProvider, snippetProvider);
    });

    vscode.window.showInformationMessage('Extensión de autocompletado activada.');
}

export function deactivate() {
    vscode.window.showInformationMessage('Extensión de autocompletado desactivada.');
}
