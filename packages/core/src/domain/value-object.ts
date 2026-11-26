export abstract class ValueObject {
  equals(other: ValueObject): boolean {
    if (other === null || other === undefined) {
      return false;
    }
    return JSON.stringify(this) === JSON.stringify(other);
  }
}
