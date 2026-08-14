---
title: "OWL: GMW-FS Post-Quantum Digital Signatures"
description: "Formulated a group action from the Module Lattice Isomorphism Problem (HAWK) within the GMW-FS paradigm, implementing optimized PQC signature variants in Python."
category: "Systems"
tags: ["Cryptography", "Group Actions", "Lattice Cryptography", "C", "Python", "Fiat-Shamir"]
metrics: "Constructed OWL-LITE & OWL-ONE Variants"
github: "https://github.com/fritzadelbertus/owl-gmw-fs"
slug: "owl"
---

## Executive Summary

Bridged the gap between group-action-based cryptography and lattice-based security by formulating the Module Lattice Isomorphism Problem (mLIP) from HAWK into a Goldreich-Micali-Wigderson Fiat-Shamir (GMW-FS) signature framework. Designed, implemented, and optimized the resulting signature protocol into practical variants (OWL-LITE and OWL-ONE), demonstrating significant reductions in memory footprint and computational latency.


## Problem & Motivation

With quantum computing threatening classical public-key cryptography (RSA/ECC), cryptographic primitives are transitioning to algebraic structures like lattices and group actions. While schemes like ALTEQ utilize group actions over tensor-isomorphism problems (ATFE), other hard problems such as the module lattice isomorphism underpinning HAWK lacked an explicit formulation within the flexible GMW-FS identification-to-signature paradigm. This research objective is to unify these domains by deriving a group action from HAWK's lattice structure, building a zero-knowledge identification protocol, applying the Fiat-Shamir transform, and engineering optimized implementations.


## Mathematical & Architectural Approach

### Group Action Construction
Analyzed the secret key structure generated in HAWK to define a natural group action over module lattice objects, creating a direct analog to ALTEQ’s tensor-isomorphism approach.

### Identification to Signature Paradigm
Integrated this group action into the GMW identification framework and transformed it into a non-interactive digital signature scheme using the Fiat-Shamir Transform.

### Engineering Optimizations
* OWL-LITE: Tailored parameter configurations to achieve minimal memory footprint and compact signature sizes at targeted security levels.
* OWL-ONE: Leveraged specialized group-action orbits to eliminate redundant algebraic transformations, drastically improving verification efficiency.

## Performance Result
Performance between ALTEQ, HAWK and OWL
| | ALTEQ | HAWK | OWL |
| :--- | :--- | :--- | :--- |
| Memory (bytes) | | | |
| Public Key | 12095 | 1024 | 65536 |
| Private Key | 32 | 184 | 57344 |
| Signature | 25631 | 555 | 688160 |
| Runtime (seconds) | | | |
| Key Generation | 0.0252 | 2.6096 | 13.2670 |
| Sign | 0.3262 | 0.0350 | 135.2957 |
| Verification | 0.2660 | 1.7677 | 5.0198 |

OWL optimized variation (compared to HAWK)

| | HAWK | OWL-LITE | | OWL-ONE | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Memory (bytes) | | | | |
| Public Key | 1024 | 16384 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1500%</span> | 8192 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+700%</span> |
| Private Key | 184 | 8192 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+4352%</span> | 24 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−86.95%</span> |
| Signature | 555 | 8224 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1381%</span> | 8224 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1381%</span> |
| Runtime (seconds) | | | | |
| Key Generation | 2.6096 | 3.7918 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+45.30%</span> | 2.2483 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−13.85%</span> |
| Sign | 0.0350 | 1.6462 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+4603%</span> | 3.2722 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+9249%</span> |
| Verification | 1.7677 | 0.0603 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−96.58%</span> | 0.0610 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−96.55%</span> |
