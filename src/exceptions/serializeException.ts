import { BaseException } from "./baseException";

export class SerializeException extends BaseException {
  constructor(message: string, originalError: unknown) {
    super(message, originalError);
    this.initError();
  }
  initError(): void {
    Object.setPrototypeOf(this, SerializeException.prototype);
    this.name = SerializeException.name;
  }
}
