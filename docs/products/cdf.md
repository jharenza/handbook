---
id: clinical-data-flow
title: Clinical Data Flow
sidebar_label: Clinical Data Flow
---

**Slack: #kf-model-fhir, #fhir-impl** 

## About

D3b is responsible for coordinating a multitude of biobanking projects that
aim to provide researchers with valuable biospecimens and data for rare
diseases.

Each of these projects has both common and unique requirements for
clinical data collection, quality control, modeling, sharing, and search.
It is possible but inefficient to create a new data model, services, and tooling
for each project. Additionally, it hinders interoperability between different
projects.

This is a prototyping effort that will determine if implementation of the
[HL7 FHIR](http://hl7.org/fhir/) data interoperability standard
can provide a common data model and RESTful API that can be easily adapted for
different research projects.

Secondarily, this effort will also explore ways to streamline the
clinical data ingestion pipeline so that it is easier for analysts to explore
cleaned source data, automate reporting of quality control issues, and
transform data for loading into target data services
(e.g. FHIR clinical data services).  

## Goals

- Determine whether the FHIR standard can meet the modeling and search needs of D3b
- Evaluate [Phenopackets on FHIR](https://aehrc.github.io/fhir-phenopackets-ig/)
  as a base model for research use cases and track changes needed
- Provide centralized view of cleaned source data to better support analysts'
  needs and standardize transformations to target services (e.g. FHIR data services)
- Explore more standard data collection methods such as REDcap or FHIR Questionnaires
  to reduce number of unique source data transformations

## Organization

### [Sprint Log](https://docs.google.com/document/d/1bkSWAT7BbLYdAgu_xyykALRJrdERIAn-9ae8t3HpQGI/edit?usp=sharing)

The Sprint Log is kept on Google Docs and updated in preparation for the bi-weekly
planning meeting.

The Sprint Log tracks the objectives set for each sprint and their status at
the end of the sprint.
Each sprint entry is divided into four components:

- The title and overall theme of the sprint
- The specific goals committed to
- The completion status of each goal at the end of the sprint
- Any additional work done that was not originally planned for

### [Milestones](https://github.com/d3b-center/clinical-data-flow/milestones)

GitHub milestones are used to track issues connected to goals within a sprint.
They are one-to-one with sprints and sprint objectives listed in the Sprint Log.

### [Issues](https://github.com/d3b-center/clinical-data-flow/issues)

GitHub issues are used to track individual tasks to be completed and may be
related to milestones and sprint goals. [Story labels](https://github.com/d3b-center/clinical-data-flow/issues?q=is%3Aopen+is%3Aissue+label%3Astory)
are used to track larger, end-user features where as other issues will track
a technical task which may address part of, or an entire, story.

## Repositories

### [Clinical Data Flow](https://github.com/d3b-center/clinical-data-flow)
The Clinical Data Flow (CDF) product has one Github repository for tracking
of milestones, user stories, and design artifacts.

The other GitHub repositories listed below contain code for tools, services,
or applications in support of the CDF. New bug reports and
feature requests should be filed into the appropriate GitHub issue backlog.

If it's unclear which backlog to file an issue in, opt for the general
[GitHub](https://github.com/d3b-center/clinical-data-flow/issues)
repository and it will be moved to a more fitting backlog, if necessary.

### [D3b Data Warehouse](https://github.com/d3b-center/d3b-warehouse-eigdwh)

**Issue Backlog:** [GitHub](https://github.com/d3b-center/d3b-warehouse-eigdwh/issues)

A D3b level data warehouse used to store clean source data outputted from the
[Kids First Data Ingest Library](https://github.com/kids-first/kf-lib-data-ingest).
Analysts and curators may use this warehouse to explore data, automate quality
control reports, and configure ETLs into the FHIR Data Service.

### [FHIR Model](https://github.com/kids-first/kf-model-fhir)

**Issue Backlog:** [GitHub](https://github.com/kids-first/kf-model-fhir/issues)

The repository containing the files for the Kids First FHIR data model along
with CI and tooling for model validation and documentation.

### [FHIR Data Service](https://github.com/kids-first/kf-api-fhir-service)

**Issue Backlog:** [GitHub](https://github.com/kids-first/kf-api-fhir-service/issues)

The user facing FHIR data service deployed as a [Smile CDR](https://smilecdr.com/docs/)

**Note**
The services and applications for this effort are currently only available on
the CHOP network within the Kids First AWS Dev VPC.
