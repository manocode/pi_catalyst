import { CatalystError } from './catalyst-error.js';

export class InfrastructureError extends CatalystError {
  constructor(message: string, code?: string, public readonly originalError?: any) {
    super(message, code);
  }
}
