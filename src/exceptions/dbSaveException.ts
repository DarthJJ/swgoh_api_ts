import { BaseException } from "./baseException";

export class DbSaveException extends BaseException {
  constructor(message: string, originalError: unknown) {
    super(message, originalError);
    this.initError();
  }

  initError(): void {
    Object.setPrototypeOf(this, DbSaveException.prototype);
    this.name = DbSaveException.name;
  }
}
