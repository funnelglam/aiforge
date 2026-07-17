# AIForge Architecture

Last Updated:
Version:

---

# Vision

AIForge is an AI Operating System.

The user never chooses AI models.

The user simply describes a goal.

AIForge analyzes the request, builds a plan, executes the plan using specialized Studios, and returns finished work.

---

# Core Pipeline

User
↓

Brain Analysis

↓

Mission Planner

↓

Studio Router

↓

Execution Engine

↓

Provider Layer

↓

Result

---

# Folder Structure

app/
Pages
API Routes

components/
UI Components
Studios
Dashboard

lib/
Brain
Executor
Providers
Mission Planner
Utilities

---

# Current Phases

✅ Phase A
Authentication

✅ Phase B
Dashboard

✅ Phase C
Brain Analysis

🚧 Phase D
Execution Engine

⬜ Phase E
Studios

⬜ Phase F
Provider Layer

⬜ Phase G
Memory

⬜ Phase H
Marketplace

⬜ Phase I
Agents

---

# Naming Rules

Only ONE executor exists.

Correct name:

executeJob()

Never create:

executeMission()
runMission()
startMission()

unless the architecture changes.

---

# Studios

Business Studio

Writing Studio

Coding Studio

Video Studio

Image Studio

General Studio

Each studio owns ONLY its specialty.

Studios NEVER talk directly to AI providers.

They call the Executor.

---

# Executor

Responsibilities

• Run tasks

• Track progress

• Update task status

• Report completion

Executor NEVER decides what to execute.

Brain already decided.

---

# Brain

Responsibilities

Analyze Goal

Detect Mission Type

Estimate Complexity

Choose Provider

Generate Tasks

The Brain never performs execution.

---

# Provider Layer

Future

OpenAI

Gemini

Claude

Mistral

DeepSeek

OpenRouter

Together AI

Replicate

The Provider Layer hides every API behind one interface.

---

# Long-Term Vision

User enters one goal.

AIForge builds an entire company automatically.

Example

Open a ramen restaurant.

↓

Business Plan

↓

Brand

↓

Logo

↓

Menu

↓

Website

↓

Marketing

↓

Ads

↓

Videos

↓

Automation

↓

Launch

One Goal.

Everything Generated.
# Stability Rules (Added during Phase E)

As AIForge grows, stability is more important than rapid refactoring.

## Naming Stability

Once a function, file, or concept becomes part of the architecture, avoid renaming it unless absolutely necessary.

Official terminology:

- Job
- executeJob()
- analyzePrompt()
- chooseProvider()
- generateAI()
- Provider
- Executor
- Mission
- Studio

Complexity Levels:

- simple
- medium
- complex

These terms are the official AIForge vocabulary and should remain consistent throughout the project.

---

## Refactoring Rules

When replacing an implementation:

✔ Replace the old implementation completely.

❌ Never leave two versions of the same feature.

Examples:

❌ missionPlan.ts + createPlan.ts

❌ executeMission() + executeJob()

❌ router.ts + chooseProvider()

Only one source of truth should exist.

---

## Folder Responsibility

brain/
- Analyze goals
- Detect intent
- Create execution plans

executor/
- Execute tasks
- Track progress
- Report status

ai/
- AI Router
- AI Providers
- Gateway
- Prompt Builder

studios/
- User interface
- Display progress
- Display outputs

---

## Architecture First

Before adding a new feature:

1. Check whether the functionality already exists.
2. Reuse existing modules whenever possible.
3. Avoid creating duplicate files.
4. Keep the architecture simple.

# AIForge v2 Core Architecture

## Execution Pipeline

User
    ↓
AIForge Brain
    ↓
Mission Detection
    ↓
Execution Plan
    ↓
Executor
    ↓
Workers
    ↓
AI Router
    ↓
AI Provider
    ↓
Response



## Shared Domain Models

AIForge uses one canonical definition for every core business concept.

lib/
│
├── task/
│     types.ts
│
├── provider/
│     types.ts
│
├── workers/
│     types.ts
│
├── brain/
│
└── executor/

No duplicated Task, Provider or Worker models are allowed.


## Worker Architecture

Each Worker has one responsibility.

Business Worker
Image Worker
Video Worker
Writing Worker
Website Worker
Research Worker

Workers never communicate directly with AI providers.

Workers always call:

AI Router
        ↓
Provider


## Executor

The Executor does not contain business logic.

Responsibilities:

• Execute Tasks sequentially
• Track Task status
• Report progress
• Dispatch Tasks to Workers

The Executor never decides which AI model to use.


## AI Router

The AI Router chooses the provider.

Example:

Business
        ↓
OpenAI

Image
        ↓
Flux

Research
        ↓
Claude

Simple Request
        ↓
Gemini

Workers never choose providers.


## Architecture Rules

✓ One source of truth for every business model

✓ Replace entire files during architecture migrations

✓ Compile after every migration

✓ Commit after every successful phase

✓ No duplicate Provider definitions

✓ No duplicate Task definitions

✓ No circular dependencies

✓ Brain decides

✓ Executor executes

✓ Worker performs

✓ Router routes

✓ Provider generates


## AIForge Migration Rule

Architecture migrations must be completed one layer at a time.

For every migration:

1. Replace the entire file.
2. Run `npx tsc --noEmit`.
3. Fix all compiler errors before continuing.
4. Commit to Git.
5. Only then move to the next layer.

Never leave the project in a half-migrated state.