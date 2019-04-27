import * as TS from 'typescript';
import * as Lint from 'tslint';

export class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING = 'Ternary operators must be written in one line';

    static metadata: Lint.IRuleMetadata = {
        ruleName: 'no-multiline-ternary',
        description: 'Warns about using ternary operator on multiple lines.',
        optionsDescription: '',
        options: {},
        optionExamples: [],
        type: 'style',
        typescriptOnly: true,
        requiresTypeInfo: false
    };

    apply(sourceFile: TS.SourceFile): Lint.RuleFailure[] {
        const walker = new NoMultilineTernaryWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    }
}

class NoMultilineTernaryWalker extends Lint.RuleWalker {

    protected visitNode(node: TS.ConditionalExpression): void {
        if (node.kind === TS.SyntaxKind.ConditionalExpression) {
            const startLinePosition = this.getLinePosition(node, node.getStart());
            const endLinePosition = this.getLinePosition(node, node.getEnd());

            if (startLinePosition !== endLinePosition) {
                this.addFailureAtNode(node, Rule.FAILURE_STRING);
            }
        }

        super.visitNode(node);
    }

    private getLinePosition(node: TS.ConditionalExpression, position: number): number {
        const { line } = node.getSourceFile().getLineAndCharacterOfPosition(position);
        return line;
    }
}
