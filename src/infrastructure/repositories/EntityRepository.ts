export default interface EntityRepository<T> {
  create: (entity: T) => Promise<T>;
  findAll: () => Promise<T[]>;
}
