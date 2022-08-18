import { BaseException } from "./baseException";

export class DbRetrieveException extends BaseException {
  constructor(message: string, originalError: unknown) {
    super(message, originalError);
    if (originalError instanceof Error) {
      this.stack = originalError.stack;
    }
    this.initError();
  }

  initError(): void {
    Object.setPrototypeOf(this, DbRetrieveException.prototype);
    this.name = DbRetrieveException.name;
  }
}
