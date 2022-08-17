import { BaseException } from "./baseException";

export class RetrieveException extends BaseException {
  constructor(message: string, originalError?: unknown) {
    super(message, originalError);
  }

  initError(): void {
    Object.setPrototypeOf(this, RetrieveException.prototype);
    this.name = RetrieveException.name;
  }
}
