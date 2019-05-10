export {};

declare global {

    namespace jest {

        // noinspection JSUnusedGlobalSymbols
        export interface Matchers<R> {
            toBePassed(): R;
            toBeFailedWith(message: string): R;
        }
    }
}
