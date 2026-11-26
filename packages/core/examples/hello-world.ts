import { 
  BaseEntity, 
  IUseCase, 
  IRepository, 
  DomainError 
} from '../src/index.js';

// 1. Domain Entity
class User extends BaseEntity<string> {
  constructor(id: string, public name: string, public email: string) {
    super(id);
  }
}

// 2. Repository Port
interface IUserRepository extends IRepository<User> {}

// 3. Use Case
class CreateUserUseCase implements IUseCase<{ name: string; email: string }, User> {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: { name: string; email: string }): Promise<User> {
    if (!request.email.includes('@')) {
      throw new DomainError('Invalid email address');
    }

    const id = Math.random().toString(36).substr(2, 9);
    const user = new User(id, request.name, request.email);
    
    await this.userRepository.save(user);
    return user;
  }
}

// 4. Mock Repository Implementation
class MockUserRepository implements IUserRepository {
  private users = new Map<string, User>();

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async save(entity: User): Promise<void> {
    this.users.set(entity.id, entity);
    console.log(`[MockUserRepository] Saved user: ${entity.name}`);
  }

  async delete(id: string): Promise<void> {
    this.users.delete(id);
  }
}

// Execution
async function run() {
  const repo = new MockUserRepository();
  const useCase = new CreateUserUseCase(repo);

  try {
    const user = await useCase.execute({ name: 'John Doe', email: 'john@example.com' });
    console.log('Successfully created user:', user);
  } catch (e) {
    console.error('Error:', e);
  }

  try {
    await useCase.execute({ name: 'Jane Doe', email: 'invalid-email' });
  } catch (e) {
    console.log('Caught expected error:', (e as Error).message);
  }
}

run();
