import { describe, it, expect } from 'vitest';
import { BaseEntity, ValueObject } from '../src/index.js';

class TestEntity extends BaseEntity<string> {
  constructor(id: string, public name: string) {
    super(id);
  }
}

class TestValueObject extends ValueObject {
  constructor(public readonly value: string) {
    super();
  }
}

describe('BaseEntity', () => {
  it('should identify entities with same ID as equal', () => {
    const entity1 = new TestEntity('1', 'A');
    const entity2 = new TestEntity('1', 'B');
    expect(entity1.equals(entity2)).toBe(true);
  });

  it('should identify entities with different IDs as not equal', () => {
    const entity1 = new TestEntity('1', 'A');
    const entity2 = new TestEntity('2', 'A');
    expect(entity1.equals(entity2)).toBe(false);
  });

  it('should return false when comparing with null/undefined', () => {
    const entity = new TestEntity('1', 'A');
    expect(entity.equals(null as any)).toBe(false);
    expect(entity.equals(undefined as any)).toBe(false);
  });
});

describe('ValueObject', () => {
  it('should identify value objects with same attributes as equal', () => {
    const vo1 = new TestValueObject('test');
    const vo2 = new TestValueObject('test');
    expect(vo1.equals(vo2)).toBe(true);
  });

  it('should identify value objects with different attributes as not equal', () => {
    const vo1 = new TestValueObject('test1');
    const vo2 = new TestValueObject('test2');
    expect(vo1.equals(vo2)).toBe(false);
  });

  it('should return false when comparing with null/undefined', () => {
    const vo = new TestValueObject('test');
    expect(vo.equals(null as any)).toBe(false);
    expect(vo.equals(undefined as any)).toBe(false);
  });
});
