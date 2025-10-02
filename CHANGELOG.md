# Changelog

All notable changes to this repository will be documented in this file.  
This project adheres to **Semantic Versioning** when applicable.

---

## [1.0.1] – 2025-10-02
### Added
- ERC20 unit tests: `transfer`, `approve`, `allowance`, chained transfers (`owner → addr1 → addr2`).

### Fixed
- `package.json` updated to correctly include **@openzeppelin/contracts** dependency.

### Improved
- **Hardhat config** simplified and more robust.  
- CI/CD: added **coverage** and **Slither static analysis**.  
- GitHub Actions pipeline now includes compilation, tests, and automated deployments.

### Security
- Slither integrated into CI.  
- Hardhat deployment tests included.  
- ✅ No critical vulnerabilities found.  
- Cyberscope audit remains valid for core contract logic.

---

## [1.0.0] – 2025-09-22
### Added
- **IOBToken_0.8.24.sol**: active ERC20 token contract (Solidity `0.8.24`).  
- **Multi-chain deployments** listed in README (Ethereum, BNB Chain, Base, Polygon, Arbitrum).  
- **Docs**: `MULTICHAIN.md`, README badges (Docs, Multi-Chain, MIT).  
- **Governance/Docs links**: whitepaper, pitch deck, governance plan, token distribution.  
- **Security policy** (`SECURITY.md`).  
- **Contributing guide** (`CONTRIBUTING.md`).  
- **License**: MIT (`LICENSE`).  

### Changed
- Repo structure cleaned; legacy contract moved/renamed.  

### Security
- Public security contact set (**security@iobeats.com**).  
- Responsible disclosure and bug bounty process documented.  

---

## [0.9.0] – 2025-09-22
### Deprecated
- Legacy contract `iobeats_0.8.16_legacy.sol` archived (kept for reference).  
- Marked as **not maintained**; audited previously by Cyberscope.  

---

## [Unreleased]
### Planned
- Staking/Vaults (research & design).  
- Governance modules (on-chain/off-chain).  
- Additional chain deployments and L2 integrations.  
