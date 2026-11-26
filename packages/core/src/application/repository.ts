import { BaseEntity } from '../domain/base-entity.js';

export interface IRepository<TEntity extends BaseEntity<any>> {
  findById(id: TEntity['id']): Promise<TEntity | null>;
  save(entity: TEntity): Promise<void>;
  delete(id: TEntity['id']): Promise<void>;
}
