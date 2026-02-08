---
title: "Robust Recovery Controller for Quadruped Robot via Deep RL"
summary: "Recovery policy for Raibo2 quadruped using deep RL with curriculum-based reward design."
date: 2024-06-01
featured: true
---

*Undergraduate Research Intern — RAI Lab, KAIST (Prof. Jemin Hwangbo), Jun–Aug 2024*

## Overview

This project trains a recovery policy via Deep RL that enables the Raibo2 quadruped robot to autonomously recover from fallen or unstable poses. The policy is trained in RaiSim with domain randomization and deployed on real hardware through sim-to-real transfer.

A key challenge in fall recovery is that the robot encounters highly diverse fallen configurations, requiring a policy that generalizes across orientations and contact states. The approach uses angle-conditioned rewards with a structured curriculum to progressively build robust recovery behaviors.

## Demo

<video autoplay loop muted playsinline style="width:100%;max-width:640px">
  <source src="recovery.mp4" type="video/mp4">
</video>

## 4-Step Reward Curriculum

Training follows a structured curriculum that progressively introduces reward terms:

| Step | Terms | Role |
|------|-------|------|
| **1** | Orientation, Joint position, Foot position | Guidance (pre-training) |
| **2** | Final configuration (one-time reward) | Objective reward |
| **3** | Joint speed limit (log barrier curriculum) | Constraint reward |
| **4** | Body impulse, slippage, angular velocity, self-contact + torque, action diff, joint accel | Safety & Smoothness |

## Key Design Choices

- **Angle-conditioned reward**: Different reward terms and weights are applied depending on the degree of fall, enabling the policy to handle diverse fallen configurations
- **Curriculum-based training**: Pre-train with guidance rewards, then progressively introduce objective → constraint → sub rewards for stable learning
- **Log barrier function**: Joint speed limits are enforced softly by annealing the barrier parameter *t*, gradually tightening the constraint without hard discontinuities

## Sim-to-Real Transfer

The trained policy was deployed on real Raibo2 hardware through a sim-to-real pipeline using **RaiSim**. The sim-to-real process involved domain randomization of physical parameters (friction, mass, motor dynamics) to bridge the reality gap, enabling the learned recovery behavior to transfer successfully to the physical robot.
