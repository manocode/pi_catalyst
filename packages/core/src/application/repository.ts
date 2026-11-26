import { BaseEntity } from '../domain/base-entity.js';

export interface IRepository<TEntity extends BaseEntity<any>> {
  findById(id: any): Promise<TEntity | null>;
  save(entity: TEntity): Promise<void>;
  delete(id: any): Promise<void>;
}
