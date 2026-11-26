export abstract class BaseEntity<TId> {
  constructor(public readonly id: TId) {}

  equals(other: BaseEntity<TId>): boolean {
    if (other === null || other === undefined) {
      return false;
    }
    return this.id === other.id;
  }
}
