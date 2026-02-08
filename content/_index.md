---
title: ''
summary: ''
date: 2024-01-01
type: landing

design:
  spacing: '0'

sections:
  # ── Profile (custom HTML) ──
  - block: markdown
    id: about
    content:
      title: ''
      text: |-
        <div class="profile-header">
          <div class="profile-photo">
            <img src="/media/authors/me.png?v=2" alt="Kyungseo Park">
          </div>
          <div class="profile-info">
            <h1>Kyungseo Park</h1>
            <p class="profile-email">erickun0125@snu.ac.kr</p>
            <div class="profile-links">
              <a href="https://github.com/erickun0125">GitHub</a>
              <a href="/uploads/CV_KyungseoPark.pdf">CV (PDF)</a>
            </div>
          </div>
        </div>

        <hr>

        <div class="profile-section">
          <h2>About</h2>
          <p>
            I am an undergraduate student in Mechanical Engineering and Electrical & Computer Engineering at Seoul National University, with a focus on Robotics, Control and Machine Learning. I am currently a research intern at the <a href="https://sites.google.com/robotics.snu.ac.kr/fcp/home">Robotics Lab</a> and a crew member of <a href="https://www.rosota.run/">Rosota</a>.
          </p>
          <p>
            My research objective is to enable robots to perform complex behaviors and exhibit physical intelligence through learning.
          </p>
        </div>

        <hr>

        <div class="profile-section">
          <h2>Education</h2>
          <p>
            Seoul National University<br>
            B.Sc. Mechanical Engineering / B.Sc. Electrical and Computer Engineering (Double Major)<br>
            GPA: 4.14 / 4.3 (138 credits completed) · Mar. 2020 – Present
          </p>
        </div>

        <hr>
    design:
      columns: '1'

  # ── Featured Projects (inline) ──
  - block: markdown
    id: projects
    content:
      title: ''
      text: |-
        <h2 class="projects-heading">Featured Projects</h2>

        <div class="project-entry">
          <h3><a href="https://github.com/erickun0125/SWIVL">SWIVL: Screw-Wrench Informed Impedance Variable Learning</a></h3>
          <p class="project-meta">Robotics Lab, SNU (Prof. Frank C. Park) · Jul – Dec 2025</p>
          <p>SWIVL bridges imitation learning and physical compliance for bimanual articulated-object manipulation. A learned high-level policy generates sparse SE(3) waypoints, which are converted into dense reference twist fields and then executed through a screw-decomposed impedance controller. By factoring each end-effector's twist space into bulk-motion and internal-motion subspaces via G-orthogonal projectors, an RL-trained impedance modulation policy independently tunes compliance per subspace in real time.</p>
          <div class="project-figures">
            <img src="/projects/bimanual-manipulation/architecture_overview.jpg" alt="SWIVL Architecture">
            <img src="/projects/bimanual-manipulation/swivl_inference_snapshots.jpg" alt="SWIVL Inference">
          </div>
        </div>

        <hr>

        <div class="project-entry">
          <h3><a href="https://github.com/erickun0125/LIVerse">LIVerse: Language & Image integrated uniVerse Model</a></h3>
          <p class="project-meta">CORE Lab, SNU (Prof. Insoon Yang) · Jan – Jun 2025</p>
          <p>LIVerse is a World Foundation Model that embeds vision-language semantics directly into the latent dynamics of a DreamerV3-style RSSM, replacing the conventional reward predictor with a LIV image embedding head. This architectural choice allows a single, task-agnostic world model to serve as both a dynamics simulator and a semantic reward source. Built on top of this, a sampling-based MPC agent achieves zero-shot policy execution by simply swapping the goal embedding — no task-specific reward engineering, demonstrations, or policy retraining required.</p>
          <div class="project-figures">
            <img src="/projects/vlm-reward-mbrl/architecture.png" alt="LIVerse Architecture">
            <img src="/projects/vlm-reward-mbrl/mpc_agent.png" alt="LIVerse MPC Agent">
          </div>
        </div>

        <hr>

        <div class="project-entry">
          <h3><a href="https://github.com/erickun0125/isaac-rl-quad-humanoid">Sim2Real Pipeline for Quadruped & Humanoid Robots</a></h3>
          <p class="project-meta">Sequor Robotics (Intern) · Jun – Oct 2025</p>
          <p>Developed RL policy and sim-to-real transfer pipeline for Unitree GO2 and G1 robots. Also explored SOTA dexterous grasping policies and VLA model deployment on the G1 Dex3 humanoid platform.</p>
          <div class="project-figures">
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/recovery_sim.mp4" type="video/mp4"></video>
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/recovery_real.mp4" type="video/mp4"></video>
          </div>
          <div class="project-figures">
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/velocity_sim.mp4" type="video/mp4"></video>
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/velocity_real.mp4" type="video/mp4"></video>
          </div>
          <div class="project-figures">
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/dex_grasping1.mp4" type="video/mp4"></video>
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/dex_grasping2.mp4" type="video/mp4"></video>
          </div>
          <div class="project-figures">
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/vla_1.mp4" type="video/mp4"></video>
            <video autoplay loop muted playsinline><source src="/projects/sim2real-pipeline/vla_2.mp4" type="video/mp4"></video>
          </div>
        </div>

        <hr>

        <div class="project-entry">
          <h3><a href="https://github.com/erickun0125/Auto_Balancing_Case">Auto Balancing Case</a></h3>
          <p class="project-meta">Team Project · 2024</p>
          <p>End-to-end robotics project spanning CAD design, physical suitcase fabrication, RL policy training in Isaac Lab, and successful sim-to-real transfer — all without real-world fine-tuning. The suitcase prevents tipping on uneven terrain by shifting its center of mass via a single hinge joint controlled at 50 Hz, fusing wheel contact forces, handle force, and joint state into a 32-dim observation.</p>
          <div class="project-figures">
            <img src="/projects/auto-balancing/slide0.png" alt="ABC Overview">
            <img src="/projects/auto-balancing/cad_assembly.png" alt="CAD Assembly">
          </div>
          <div class="project-figures">
            <img src="/projects/auto-balancing/demo_simulation.gif" alt="Simulation Demo">
            <img src="/projects/auto-balancing/demo_real.gif" alt="Real Demo">
          </div>
        </div>

        <hr>

        <div class="project-entry">
          <h3><a href="/projects/quadruped-recovery/">Robust Recovery Controller for Quadruped Robot via Deep RL</a></h3>
          <p class="project-meta">RAI Lab, KAIST (Prof. Jemin Hwangbo) · Jun – Aug 2024</p>
          <p>Recovery policy for Raibo2 quadruped robot trained via deep RL in RaiSim. Uses a 4-step reward curriculum with angle-conditioned rewards and log-barrier constraints, enabling robust recovery from arbitrary fallen configurations with successful sim-to-real transfer.</p>
          <div class="project-figures">
            <video autoplay loop muted playsinline><source src="/projects/quadruped-recovery/recovery.mp4" type="video/mp4"></video>
          </div>
        </div>
    design:
      columns: '1'
---
