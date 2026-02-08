---
title: "SWIVL: Screw-Wrench Informed Impedance Variable Learning"
summary: "Hierarchical control framework for bimanual manipulation of articulated objects with wrench-adaptive impedance modulation."
date: 2025-12-01
featured: true
---

*ME Bachelor's Thesis Project — Robotics Lab, SNU (Prof. Frank C. Park), Jul–Dec 2025*

## Overview

Bimanual manipulation of articulated objects requires simultaneous satisfaction of kinematic constraints and regulation of inter-arm contact forces. Current imitation-based approaches lack adaptive force modulation, relying on high-stiffness control that generates dangerous fighting forces between arms.

SWIVL addresses this by bridging cognitive planning with physical execution through a four-layer hierarchy. A high-level imitation policy generates sparse SE(3) waypoints, which are smoothed into dense twist fields and executed by a screw-decomposed impedance controller whose parameters are adaptively modulated by an RL policy conditioned on real-time wrench feedback.

## Architecture

SWIVL decomposes the bimanual manipulation problem into four layers, translating high-level planning at 10 Hz into impedance-controlled execution at 100 Hz.

![SWIVL 4-Layer Architecture](architecture_overview.jpg)

- **Layer 1 — High-Level Policy** (ACT / Diffusion / Flow Matching): Generates sparse SE(3) pose action chunks from visual observations
- **Layer 2 — Reference Twist Field Generator**: Smooths sparse waypoints into dense reference twist fields via stable imitation vector fields
- **Layer 3 — Impedance Modulation Policy** (PPO + FiLM): Modulates 7D impedance variables conditioned on wrench feedback and object screw axes
- **Layer 4 — Screw-Decomposed Impedance Controller**: Decomposes twist/wrench space into bulk and internal subspaces via G-orthogonal projectors

## Reference Twist Field

A key challenge is converting sparse pose waypoints into dense, stable reference twists. SWIVL combines feedforward imitation terms with pose-error correction to create a stable vector field ensuring robust tracking even under large deviations.

![Reference Twist Field Generator](reference_twist_field.jpg)

## Key Contributions

- **Twist-driven impedance control** via stable imitation vector fields that bypass nonlinear pose-error Jacobians
- **Screw-axes decomposition** enabling independent compliance tuning for bulk (object transport) and internal (joint articulation) motions
- **Wrench-adaptive impedance variable learning** via RL that suppresses excessive inter-arm fighting forces

## Results — BiarT Benchmark

SWIVL is evaluated on BiarT, an SE(2) planar benchmark for bimanual articulated manipulation with dual 3-DoF end-effectors at 100 Hz.

| Method | Revolute | Prismatic | Avg. Success | Wrench Limit Failures |
|:-------|:--------:|:---------:|:------------:|:---------------------:|
| Position Control | 10% | 30% | 20% | 55% |
| Impedance Control | 10% | 60% | 35% | 10% |
| **SWIVL (Ours)** | **40%** | **80%** | **60%** | **0%** |

SWIVL achieves 3x higher average success rate over position control while **completely eliminating wrench limit violations** — the dangerous inter-arm fighting forces that cause task failure and potential hardware damage.

## Inference

![SWIVL Inference Sequence](swivl_inference_snapshots.jpg)

The full pipeline in action: two end-effectors cooperatively manipulate an articulated object while the RL policy adaptively modulates impedance parameters in real time. Red arrows indicate wrench feedback from force/torque sensors.
