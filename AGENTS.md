# AGENTS.md - pi_catalyst

## Project Overview
`pi_catalyst` is a project designed to assist in the self-improvement of the pi agent harness. It serves as a workspace for developing tools, skills, and agents that can enhance the capabilities of the pi coding agent.

## Operational Commands

### Setup
```bash
pnpm install
```

### Build
```bash
npm run build
```

### Development
```bash
npm run dev
```

### Linting
```bash
npm run lint
```

### Testing
```bash
npm run test
```

## Coding Conventions
- **Language**: TypeScript
- **Structure**: Monorepo managed by Turbo.
- **Paths**: Uses `@catalyst/*` alias for packages in `packages/*/src`.
- **Style**: Follow the project's `tsconfig.json` and `tsconfig.base.json` strictness settings.

## Verification Steps
Before submitting changes, ensure that:
1. The code is linted: `npm run lint`.
2. All tests pass: `npm run test`.
3. The project builds successfully: `npm run build`.

## Boundaries & Safety
- Avoid modifying `.pi/settings.json` unless specifically tasked to do so.
- Be cautious when modifying `.pi/skills/` and `.pi/agents/` as these define the core behavior of agents in this project.
- Be cautious when adding new dependencies to the root `package.json`; prefer adding them to specific packages in `packages/` or `apps/`.
