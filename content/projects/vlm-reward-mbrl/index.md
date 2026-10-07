---
title: 'LIVerse'
summary: 'A recurrent world model for text- or image-goal MPC, with vision-language embedding prediction and delta-score rewards for subtask planning.'
date: 2025-06-01
featured: true
draft: true
---

<p class="project-meta">Language & Image integrated uniVerse Model<br>CORE Lab, Seoul National University · Prof. Insoon Yang · Jan 2025 - Jun 2025</p>

<p class="project-overview">LIVerse learns a world model that predicts dynamics and vision-language embeddings, then uses that model to plan toward text or image goals. Changing the target embedding lets the MPC planner reuse the learned model without training a new task-specific policy.</p>

## Approach

Built on a DreamerV3-style recurrent state-space model, LIVerse predicts visual and robot states as well as semantic image embeddings from a pretrained LIV encoder. A CEM-based model predictive controller samples action sequences, imagines their outcomes, and scores them by similarity to the target text or image embedding.

<div class="project-gallery">
  <figure><img src="architecture.png" alt="LIVerse world model architecture" loading="lazy"><figcaption>Latent dynamics with a semantic embedding prediction head.</figcaption></figure>
  <figure><img src="mpc_agent.png" alt="Model predictive controller using the LIVerse world model" loading="lazy"><figcaption>Goal-conditioned planning in the learned world model.</figcaption></figure>
</div>

## Planning Across Subtasks

The **delta-score reward** measures incremental improvement in goal similarity rather than its absolute value. This gives the planner a progress signal across subtasks with different similarity baselines. A step-wise planning mode switches between goal embeddings as progress plateaus, supporting sequential objectives with the same world model.

## Demonstrations & Results

Experiments use Meta-World manipulation tasks, including button pressing, drawer closing, window closing, and lever pulling. The figures below show zero-shot MPC planning with a trained world model and transfer experiments. The project also includes a Dreamer-style actor-critic agent for comparison.

<div class="project-gallery">
  <figure><img src="graph_zero_shot.png" alt="Zero-shot planning experiment results" loading="lazy"><figcaption>Zero-shot planning experiments.</figcaption></figure>
  <figure><img src="graph_transfer_learning.png" alt="Transfer experiment results" loading="lazy"><figcaption>Transfer experiments.</figcaption></figure>
</div>

<!-- Add the presentation poster and demonstration videos here when provided. -->

[Back to Featured Projects](/#projects)
