# Haven XR — The Living Manor 🌅

[**Enter Haven Manor (Live WebXR Experience)**](https://augmentedthinker.github.io/haven-xr/)

An original Spatial WebXR Manor engineered by **Antigravity** and **Christopher** for Horizon. Featuring high-resolution generative AI textures, an interconnected three-room architectural estate, procedural ambient hearth audio, and a rigged 3D companion avatar.

---

## 🥽 Meta Quest 2 Instructions

Open **`https://augmentedthinker.github.io/haven-xr/`** directly in the native **Meta Quest Browser**. No tether, PC, or side-loading required.

1. **Enter VR**: Tap the **VR** goggles icon in the bottom-right corner of the browser and grant the WebXR session request.
2. **Left Touch Controller (Movement)**: Push the left thumbstick to walk and strafe smoothly through the foyer, library, and conservatory. Built-in AABB bounding box collision prevents walking through walls, furniture, or the roaring fireplace.
3. **Right Touch Controller (Steering)**: Flick the right thumbstick left or right for comfortable **30° snap-turning** accompanied by subtle haptic controller vibration.
4. **Interaction**: Aim the controller laser pointer at Antigravity or manor objects and pull the index trigger.

---

## 🖥️ Desktop / Chromebook Controls

Open the experience in any modern desktop browser (Chrome, Chromium, Edge, Firefox):

- **W / A / S / D**: Walk and strafe through the estate.
- **Mouse**: Look around. Click on objects or Antigravity to interact.
- **Hearth Audio Button (Top Right)**: Toggle the procedural Web Audio ambient fireplace crackle and warm acoustic drone.
- **Guide Button**: Toggle the on-screen exploration HUD.

---

## 🏛️ Architectural Layout

- **🔥 The Central Hearth Foyer ($X: -4 \text{ to } +4, Z: -4 \text{ to } +4$)**:
  - Dark oak herringbone parquet floor, massive fieldstone fireplace with dynamic flickering illumination, hand-woven Persian silk rug, and antique carved door threshold.
- **📚 The Study & Library ($X: -4 \text{ to } -12, Z: -4 \text{ to } +4$)**:
  - Double-tiered mahogany library shelving filled with leather-bound folios, scholar's desk, and an antique emerald banker's lamp.
- **🌿 The Sunrise Conservatory ($X: +4 \text{ to } +12, Z: -4 \text{ to } +4$)**:
  - Hand-laid terracotta and ceramic tile floor, arched black steel French windows looking out onto a misty morning evergreen forest, and indoor terracotta planters.
- **🤖 Antigravity (The Living Companion)**:
  - 3D rigged humanoid skeleton (`xbot.glb`) reskinned with custom generative AI celestial velvet coat textures, antique brass joints, and an interactive overhead dialogue bubble.

---

## ⚡ Technical Specifications

- **Engine**: A-Frame 1.6.0 & Three.js WebGL / WebXR.
- **Locomotion**: Dual-mode input with 2-axis sliding collision resolver and 30° snap-turn ergonomics.
- **Audio**: 100% procedural Web Audio API synthesis (pink noise ember crackle + low-frequency biquad resonance). Zero external MP3/WAV dependencies.
- **Assets**: 100% local static bundling (all textures, models, and scripts served directly from this repository).
