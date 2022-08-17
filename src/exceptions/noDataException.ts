import { BaseException } from "./baseException";

export class NoDataException extends BaseException {
  constructor(message: string) {
    super(message);
  }
  initError(): void {
    Object.setPrototypeOf(this, NoDataException.prototype);
    this.name = NoDataException.name;
  }
}
