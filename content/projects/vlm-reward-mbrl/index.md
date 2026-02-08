---
title: "LIVerse: Language & Image integrated uniVerse Model"
summary: "World Foundation Model unifying VLM semantics and forward dynamics for zero-shot robotic policy via model predictive control."
date: 2025-06-01
featured: true
---

*ECE Bachelor's Thesis Project — CORE Lab, SNU (Prof. Insoon Yang), Jan–Jun 2025*

## Overview

LIVerse is a World Foundation Model that unifies vision-language semantics and forward dynamics in a single latent space. By extending DreamerV3 with VLM-based reward signals from LIV/CLIP, the trained world model can be converted into a zero-shot policy via sampling-based model predictive control (CEM) — requiring no additional task-specific training.

A key challenge in VLM-based reward is that absolute cosine similarity scores vary dramatically across subtasks, making multi-step optimization unstable. LIVerse introduces a **delta-score reward** that measures incremental similarity improvement, resolving reward scale mismatch and enabling consistent optimization.

![LIVerse Architecture](architecture.png)

## Sampling-based MPC Agent

At test time, the Cross-Entropy Method (CEM) optimizes action sequences by rolling out candidate trajectories through the learned world model and selecting those that maximize similarity to the goal embedding.

![Sampling-based MPC Agent](mpc_agent.png)

## Key Contributions

- **World Foundation Model** — Unifies vision-language semantics (LIV/CLIP) with forward dynamics (RSSM) in a single latent space
- **Zero-Shot MPC Policy** — Converts the trained world model into a zero-shot policy via CEM, requiring no task-specific training
- **Delta-Score Reward** — Measures incremental similarity improvement (`sim_t - sim_{t-1}`) to resolve reward scale mismatch across subtasks
- **Step-wise Planning** — Adaptive multi-subtask decomposition with automatic goal switching via plateau detection

## Results

### Zero-Shot Policy Execution
![Zero-Shot Policy Performance](graph_zero_shot.png)

### Transfer Learning Across Tasks
![Transfer Learning Results](graph_transfer_learning.png)

### Step-wise Planning
<p align="center">
  <img src="stepwise_cycle.png" width="48%" alt="Step-wise Planning Cycle"/>
  <img src="stepwise_curve.png" width="48%" alt="Step-wise Planning Curve"/>
</p>

### World Model Image Reconstruction
![Image Reconstruction](image_reconstruction.png)
