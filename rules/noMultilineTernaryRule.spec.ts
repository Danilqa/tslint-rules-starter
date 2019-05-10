import { Rule } from './noMultilineTernaryRule';

describe('noMultilineTernaryRule', () => {
    const rule = Rule.metadata.ruleName;

    it('should return an error if a ternary expression wrote in more than one line', () => {
        const source = `
            return true
              ? 1
              : 2;
        `;

        expect({ rule, source }).toBeFailedWith(Rule.FAILURE_STRING);
    });

    it('should not return an error if ternary expression wrote in single line', () => {
        const source = `
            const a = true ? 1 : 2;
        `;

        expect({ rule, source }).toBePassed();
    });
});
