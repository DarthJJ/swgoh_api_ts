import { BaseException } from "./baseException";

export class DbSaveException extends BaseException {
  constructor(message: string, originalError: unknown) {
    super(message, originalError);
    if (originalError instanceof Error) {
      this.stack = originalError.stack;
    }
    this.initError();
  }

  initError(): void {
    Object.setPrototypeOf(this, DbSaveException.prototype);
    this.name = DbSaveException.name;
  }
}
