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



A Brief Report
In my implementation, I focused on translating the provided Business Domain/Subject Under Discussion (SUD) into a well-defined system structure that aligns with the specified business processes and user requirements. The business domain primarily revolves around managing and organizing services for an online learning platform, which involves handling user roles, course management, and transaction processing.

I began by identifying key business objects such as Users, Courses, Enrollments, and Payments. These objects represent the main entities in the system and were modeled with their attributes and relationships in mind. For instance, Users interact with Courses through Enrollments, and Payments manage financial transactions. The structure adheres closely to the business rules, ensuring that each interaction aligns with real-world workflows.

The implementation includes defining use cases for common business scenarios like user registration, course enrollment, and payment processing. Each use case includes actors, such as Students and Instructors, and describes their interactions with the system in terms of data flow and processing logic.

Additionally, I focused on UML diagrams, such as Class Diagrams and Use Case Diagrams, to visually depict the system’s architecture and interactions between objects. This helps in providing a clear view of the relationships within the domain and ensures that the implementation can evolve with future business needs.

Finally, the implementation also incorporates basic validation rules and security measures to ensure data integrity and protect sensitive user information, such as payment details. This ensures that the system is both functional and secure while remaining aligned with the broader business goals defined in the SUD.
