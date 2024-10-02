# Assignment1-DevOpps

# Branching Strategy

- `main`: The production branch where stable code is merged and deployed.
- `develop`: The branch for active development. CI pipeline runs for testing and builds.
- Feature branches: Feature-specific development branches that are merged into `develop` via pull requests.

# TypeScript Application CI/CD Pipeline

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm test
   ```

## CI/CD Pipeline Workflow

The CI/CD pipeline is set up using GitHub Actions and follows this workflow:
- On every push to the `develop` branch, the following steps are executed:
  1. Install dependencies.
  2. Run linter and tests.
  3. Build the application.
  4. Build and push the Docker image to DockerHub.
  5. (Production only) Deploy the app to AWS ECS.

## DevOps Principles Applied
- Continuous Integration: Automating the build and testing process to ensure code quality.
- Continuous Deployment: Automatically pushing updates to production upon merging to the main branch.
- Secret Management: Sensitive credentials are stored securely in GitHub Secrets.

