import { CatalystError } from './catalyst-error.js';

export class DomainError extends CatalystError {
  constructor(message: string, code?: string) {
    super(message, code);
  }
}
