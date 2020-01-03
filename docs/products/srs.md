---
id: specimen-request-system
title: Specimen Request System
sidebar_label: Specimen Request System
---

**Slack: #specimen-request-system**

## About

D3b is responsible for coordinating a multitude of biobanking projects that
aim to provide researchers with valuable biospecimens and data for rare
diseases.
The Specimen Request System (SRS) aims to assist coordinating these projects
through providing tools for researchers to make requests and research
coordinators fulfill them.

## Goals

- Improve specimen request process across all D3b bio-banking projects
- Increase discoverability of bio-banked and data resources
- Increase data and specimen request volume and throughput
- Increase and track impactful results and data

## Organization

### [Sprint Log](https://docs.google.com/document/d/12vRYsAr50XdLrdJ5F1zBvpSrWGnREHS_ZWzH1HNLFow/edit?usp=sharing)

The is kept on Google Docs and updated in preparation for the bi-weekly
planning meeting.

The Sprint Log tracks the objectives set for each sprint and their status at
the end of the sprint.
Each sprint entry is divided into four components:

- The title and overall theme of the sprint
- The specific goals commited to
- The completion status of each goal at the end of the sprint
- Any additional work done that was not originally planned for

### [Milestones](https://github.com/d3b-center/specimen-requests/milestones)

GitHub milestones are used to track issues connected to goals within a sprint.
They are one-to-one with sprints and sprint objectives listed in the Sprint Log.

### [Issues](https://github.com/d3b-center/specimen-requests/issues)

GitHub issues are used to track individual tasks to be completed and may be
related to milestones and sprint goals. [Story labels](https://github.com/d3b-center/specimen-requests/issues?utf8=%E2%9C%93&q=label%3AStory+)
are used to track larger, end-user features where as other issues will track
a technical task which may address part of, or an entire, story.

## Repositories

The project is organized into three GitHub repositories. New bug reports and
feature requests should be filed into the appropriate GitHub issue backlog.
If it's unclear which backlog to file an issue in, opt for the general
[GitHub](https://github.com/d3b-center/specimen-requests/issues) repository and
it will be moved to a more fitting backlog, if necessary.

### [Specimen Requests](https://github.com/d3b-center/specimen-requests)

**Live Endpoint:** [specimen-requests.d3b.io](http://specimen-requests.d3b.io/)

**Issue Backlog:** [GitHub](https://github.com/d3b-center/specimen-requests/issues)

The catch-all repository for issues. Contains submodules for the below
repositories as well as any data ETL code and one-off scripts.

### [Specimen Portal](https://github.com/d3b-center/specimen-portal)

**Live Application:** [specimen-portal.d3b.io](https://specimen-portal.d3b.io)

**Issue Backlog:** [GitHub](https://github.com/d3b-center/specimen-portal/issues)

The requester-facing, public interface used to browse specimens and data and
make requests.


### [Specimen Admin](https://github.com/d3b-center/specimen-admin)

**Live Application:** [specimen-admin.d3b.io](https://specimen-admin.d3b.io)

**Issue Backlog:** [GitHub](https://github.com/d3b-center/specimen-admin/issues)

The internal, coordinator-facing interface used to manage specimens and review
requests.
