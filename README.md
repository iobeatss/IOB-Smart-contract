<p align="center">
  <img src="https://raw.githubusercontent.com/iobeatss/iobeats-logo-assets/main/hero1.gif" alt="IO Beats Banner" width="100%" />
</p>

<h1 align="center">🎶 iO Beats — Smart Contracts</h1>

<p align="center">
  <a href="https://docs.soliditylang.org/en/v0.8.24/">
    <img alt="Solidity" src="https://img.shields.io/badge/Solidity-0.8.24-blue.svg?logo=solidity">
  </a>
  <a href="https://docs.openzeppelin.com/contracts">
    <img alt="OpenZeppelin" src="https://img.shields.io/badge/OpenZeppelin-Library-orange.svg">
  </a>
  <a href="./audit.pdf">
    <img alt="Audit" src="https://img.shields.io/badge/Audit-Cyberscope-brightgreen.svg">
  </a>
  <a href="./LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="./MULTICHAIN.md">
    <img alt="Deployment" src="https://img.shields.io/badge/Deployed-MultiChain-purple.svg">
  </a>
  <a href="https://github.com/iobeatss/IOB-Smart-contract/actions/workflows/slither.yml">
    <img alt="Slither Analysis" src="https://github.com/iobeatss/IOB-Smart-contract/actions/workflows/slither.yml/badge.svg">
  </a>
  <a href="./SECURITY.md">
    <img alt="Security Policy" src="https://img.shields.io/badge/Security-Policy-red.svg">
  </a>
  <a href="./CHANGELOG.md">
    <img alt="Changelog" src="https://img.shields.io/badge/Changelog-Maintained-blueviolet.svg">
  </a>
</p>

---

## 📌 About
iO Beats ($IOB) is a **Web3 music ecosystem** that connects **NFTs, DeFi utilities, and community governance**.  
These smart contracts power the $IOB token across multiple blockchains, ensuring **scalability, security, and accessibility**.

✅ Built with **Solidity 0.8.24**  
✅ Powered by **OpenZeppelin**  
✅ Audited by **Cyberscope**  
✅ Deployed on **Ethereum, BNB Chain, Base, Polygon, and Arbitrum**

---

## 📑 Table of Contents
- [Smart Contracts](#-smart-contracts)
- [Audit](#-audit)
- [Multi-Chain Deployment](#-multi-chain-deployment)
- [Roadmap](#-io-beats--smart-contracts-roadmap-2025--2026)
- [Changelog](#-changelog)
- [Contributing](#-contributing)
- [Security Policy](#-security-policy)
- [License](#-license)
- [Credits](#-credits)

---

## 🛠 Smart Contracts

**Current Contracts (Audited by Cyberscope):**

- **Ethereum (ERC20)**  
  `0xCa2f286106e55264f923B838885CCDE6a621d710`  
  🔗 [View on Etherscan](https://etherscan.io/address/0xCa2f286106e55264f923B838885CCDE6a621d710)

- **BNB Chain (BEP20)**  
  `0x83606b765b8e7180ef8e6fc33b93fdcaaa84d447`  
  🔗 [View on BscScan](https://bscscan.com/address/0x83606b765b8e7180ef8e6fc33b93fdcaaa84d447)

- **Base (ERC20)**  
  `0x27df736a873ab5cc08e56e52459061ded1728da8`  
  🔗 [View on BaseScan](https://basescan.org/address/0x27df736a873ab5cc08e56e52459061ded1728da8)

- **Polygon (ERC20)**  
  `0xf49d9d9ad09a25630ffd0fd7ee7b26b7521969c3b`  
  🔗 [View on PolygonScan](https://polygonscan.com/address/0xf49d9d9ad09a25630ffd0fd7ee7b26b7521969c3b)

- **Arbitrum (ERC20)**  
  `0x72803ae15E93742e5cf13f8116C53E99371344d`  
  🔗 [View on Arbiscan](https://arbiscan.io/address/0x72803ae15E93742e5cf13f8116C53E99371344d)

---

## 🔍 Audit
Audited by **Cyberscope**.  
Covers:
- ✅ Smart contract security
- ✅ Admin permissions
- ✅ Resistance to common attacks
- ✅ Recommendations for improvements

📄 [Download Full Audit Report (PDF)](./audit.pdf)

---

## 🌐 Multi-Chain Deployment
The $IOB token is deployed across multiple **EVM-compatible blockchains**, ensuring ecosystem growth and interoperability.

📄 See full details in [MULTICHAIN.md](./MULTICHAIN.md)

---

# 🛠️ IO Beats — Smart Contracts Roadmap (2025 → 2026)

This roadmap outlines the development and deployment of the **IO Beats Smart Contracts** across multiple blockchains.  
All milestones are aligned with transparency, security, and scalability.

### 📌 Status Legend
✅ Done · 🟡 In Progress · ⏳ Planned

---

## 📊 Visual Roadmap (Mermaid)

> ⚠️ **Note:** GitHub ne rend pas encore le diagramme **Gantt** de Mermaid partout.  
> Il s’affichera comme code ici, mais reste 100% compatible avec VSCode/Obsidian.
>
> 💡 Astuce “Home style” : garde ce bloc **pliable** pour que la page reste clean.

<details>
<summary><strong>Afficher / Masquer la timeline</strong></summary>

```mermaid
gantt
    title IO Beats — Smart Contracts Roadmap (2025 → 2026)
    dateFormat  YYYY-MM
    axisFormat  %Q %Y

    section Q3 2025
    ERC20 Optimization (Audit + Deploy)        :done,    q3-erc20, 2025-07, 2025-09

    section Q4 2025
    Presale Contracts (per chain)              :planned, q4-presale, 2025-10, 2025-12
    Safe Multisigs (4-of-7)                    :planned, q4-safe,    2025-10, 2025-12
    Locks & Vestings (UNCX/TeamFinance)        :planned, q4-locks,   2025-10, 2025-12

    section Q1 2026
    Vaults & Staking (Beefy + Gamma)           :planned, q1-vaults,  2026-01, 2026-03
    Rewards Distribution Contracts             :planned, q1-rewards, 2026-01, 2026-03
    Loyalty Perks (tiers & bonuses)            :planned, q1-loyalty, 2026-01, 2026-03

    section Q2 2026
    ERC-721 / NFT Contracts                    :planned, q2-nft,     2026-04, 2026-06
    Cross-chain Royalties (ERC-2981)           :planned, q2-royalty, 2026-04, 2026-06
    Ticketing Contracts (Events)               :planned, q2-tickets, 2026-04, 2026-06

    section Q3 2026
    Snapshot Integration (DAO)                 :planned, q3-snap,    2026-07, 2026-09
    On-chain Proposal Registry                 :planned, q3-prop,    2026-07, 2026-09
    DAO Treasury Automation                    :planned, q3-dao,     2026-07, 2026-09

    section Q4 2026
    Tier 1 CEX Requirements                    :planned, q4-cex,     2026-10, 2026-12
    Additional Cross-chain Vaults              :planned, q4-vaults,  2026-10, 2026-12
