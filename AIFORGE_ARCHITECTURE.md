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