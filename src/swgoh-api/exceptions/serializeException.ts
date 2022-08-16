import { BaseException } from "./baseException.js";

export class SerializeException extends BaseException {
  constructor(message: string, originalError: unknown) {
    super(message, originalError);
  }
  initError(): void {
    Object.setPrototypeOf(this, SerializeException.prototype);
    this.name = SerializeException.name;
  }
}
