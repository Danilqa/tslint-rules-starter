import { lint } from '../helpers/linter';
import { Rule } from './noMultilineTernaryRule';

const rule = Rule.metadata.ruleName;

describe('noMultilineTernaryRule', () => {

    it('should return an error if a ternary expression wrote in more than one line', () => {
        const source = `
            return true
              ? 1
              : 2;
        `;
        const failure = lint(rule, source).failures[0].getFailure();
        expect(failure).toBe(Rule.FAILURE_STRING);
    });

    it('should not return an error if ternary expression wrote in single line', () => {
        const source = `
            const a = true ? 1 : 2;
        `;
        const { errorCount } = lint(rule, source);
        expect(errorCount).toBe(0);
    });
});
