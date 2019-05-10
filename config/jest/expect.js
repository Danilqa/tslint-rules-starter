const { lint } = require('../../helpers/linter');
const expect = require('expect');

expect.extend({
    toBePassed({ source, rule }) {
        const [result] = lint(rule, source).failures;

        if (!result) {
            return { pass: true };
        }

        return {
            pass: false,
            message: () => `Expected to be passed, but got "${result.getFailure()}"`
        };
    },
    toBeFailedWith({ source, rule }, message) {
        const [result] = lint(rule, source).failures;

        if (!result) {
            return {
                pass: false,
                message: () => 'Rule has been passed, but failed expected'
            };
        }

        if (result && result.getFailure() !== message) {
            return {
                pass: false,
                message: () => `Error "${result.getFailure()}" is not "${message}"`
            };
        }

        return { pass: true };
    }
});
