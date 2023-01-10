# Application tech stack

Let's suppose we have an web application utilising Java Spring Boot for the backend. A proper CI/CD pipeline would adress *linting*, *testing* and *building*. A Java Spring Boot application could use the following tools for each of these:

- Linting
	- SonarLint, or in extension SonarQube
- Building
	- Spring Boot support exists for both Maven and Gradle.
- Testing
	- Cucumber for BDD formatted e2e tests
	- JUnit for unit testing

CI pipeline tools are abundant, with various pricing models and options with regard to version management, deployment and so forth. For instance [AWS CodePipeLine](https://aws.amazon.com/codepipeline/) offers seamless integration into the AWS ecosystem with a pay for what you use kind of model, whereas [Travis CI](https://www.travis-ci.com/) is free of cost for open source projects. Integration with the total tech stack needs to be considered. Is the project development enviroment run in Docker? Does the developer team use GitHub? The chosen CI tool needs to adress these questions Integration with the total tech stack needs to be considered. Is the project development enviroment run in Docker? Does the developer team use GitHub? The chosen CI tool needs to adress these questions.

The choice between prorietary / open source / self-made CI tools is a complex question (that is, if the project has a limited budget...). Open source tools could be found lacking in updates, whereas proprietary models offer good support at a cost. 

Hosting the CI/CD tools comes with caveats of its own: SaaS tools might be costly, but so is developing on-site server infrastructure. Security and data storage might be relevant; and perhaps, on a large scale, the juridistiction of the country where the servers are situated.
