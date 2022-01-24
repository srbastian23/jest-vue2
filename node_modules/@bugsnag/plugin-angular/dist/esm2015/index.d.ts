import { ErrorHandler } from '@angular/core';
import { Client, Plugin } from '@bugsnag/js';
export declare class BugsnagErrorHandler extends ErrorHandler {
    bugsnagClient: Client;
    constructor(client?: Client);
    handleError(error: any): void;
}
declare const plugin: Plugin;
export default plugin;
