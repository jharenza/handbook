# The Anatomy of a Repository

Keeping code repositories consistent is important to allow developers and
interested users to navigate and contribute to projects within D3b.
Here, we lay out the fundamental components that each repository under the
[D3b Organization](http://github.com/d3b-center/) should include.

## Naming Conventions

Repositories should be named in _kebab-case_, that is, using hyphens, `-`, as
opposed to underscores, `_`, or capitalization to delimit words in the titles
of repositories.
This makes repository listings easy to browse through for the reader and
removes the need to ponder a naming scheme when creating new repositories.

## Description

The repository description should contain an emoji to characterize the
repository along with a brief description of what the codebase is.

## Link

The repository link should ideally link to the production application where the
code is running. If that does not make sense for the codebase, a public facing
documentation or endpoint is also a good choice.

## Wikis and Projects

_Wikis_ and _Projects_ features in GitHub have been disabled by default for new
repositories.
Their use should be restricted for most common scenarios as D3b uses other
tooling for documentation and project management.

## Tags

Tags should be attached to describe the codebase and make it easier to discover
when searching by, eg: _python_.

## Required Files

A handfull of common files should be included in all repositories to keep them
clean and well-organized.

### .gitignore

An appropriate `.gitignore` is important to prevent against committing of
files that do not need to be tracked. This file's contents will be determined
by the codebase. There are are a number of precompiled `.gitignore` files
available on [GitHub](https://github.com/github/gitignore) for easy
reference.

### Dockerfile

All codebases that are to be deployed should contain a `Dockerfile` that will
run the service in a container.
The Dockerfile should be included at the root of the repository and any
overriding Dockerfiles should be named as `Dockerfile.{override name}`.

### LICENSE

A copy of the Apache 2.0 license should be included under the `LICENSE` file in
the root of all public repositories. This file can automatically be added with
the GitHub interface by clicking `Create new file`, then entering `LICENSE` as
the file name. A button prompting to choose the type of license will be
displayed which will offer Apache 2.0 as one of the options.

### README.md

The `README.md` file is important for providing more detailed information about
the codebase.

# The README

The README is important for introducing users and developers alike to a
codebase.
It's often the first thing that a user will see, so it is important to provide
a clear description of the repository's purpose and links to where to find
more information.


## Badges {docsify-ignore}

Status badges for any `Status Checks`\_ that provide them should be listed
directly under the repository's branding image.

## Title {docsify-ignore}

The title should be included as a heading directly after the badges and be
followed by a brief description of the codebase.

## Content {docsify-ignore}

The rest of the README should provide some basic documentation that is unique
to the codebase itself. This should, at a minimum, explain how to use and
develop the code or links to pages that do.

# Status Checks

Status Checks are automated checks that test various aspects of the code to
help ensure quality.
Having relevant checks is a low-cost method of improving reliability of a
code base.
Whether to use status checks and what status checks to employ will depend on
the type of code being distributed in the repository.
It's suggested that any code bases that are under continuous development or
being deployed to production like environments should try to utilize some
status checking tools.

## Pull Request Reviews {docsify-ignore}

At least one review should be required from another developer for a pull
request. This setting can be configured under branch protection settings in a
repository.

## CircleCI {docsify-ignore}

CircleCI can be used to run automated testing such as linting checks for style
and unit tests for functionality. It is a good idea to require CircleCI for at
least one of these checks.

## Jenkins {docsify-ignore}

The Jenkins check will report on the deployment status of the branch. If it
fails, it may indicate that there is a problem with the integration pipeline
which may mean that a later deployment could fail if not resolved.

## Netlify {docsify-ignore}

If a codebase is being deployed with netlify, a number of checks indicating the
health of the deployment can be enabled. Netlifiy can also be configured to
post review comments with links to the deployed branches.
