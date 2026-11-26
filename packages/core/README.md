# @catalyst/core

Foundational package implementing Onion Architecture for the `pi_catalyst` ecosystem.

## Architecture

The package follows the Onion Architecture, ensuring strict decoupling between business logic and external concerns.

### Layers

- **Domain**: Core business entities and value objects. Zero dependencies.
- **Application**: Business orchestration (Use Cases) and ports (Interfaces). Depends only on Domain.
- **Infrastructure**: Implementation of ports and cross-cutting concerns. Depends on Application and Domain.

## Core Abstractions

### Domain
- `BaseEntity<TId>`: Base class for entities with identity-based equality.
- `ValueObject`: Base class for value objects with attribute-based equality.

### Application
- `IUseCase<TRequest, TResponse>`: Interface for all business use cases.
- `IRepository<TEntity>`: Generic port for data access.

### Infrastructure
- `ILogger`: Structured logging interface.
- `ITelemetry`: Event and metric tracking interface.

### Errors
- `CatalystError` $\rightarrow$ `DomainError` & `InfrastructureError`

## Usage

See `examples/hello-world.ts` for a complete demonstration of the architecture.

## Development

- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`
