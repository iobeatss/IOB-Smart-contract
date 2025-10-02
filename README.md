# 🎶 iO Beats — Smart Contracts  

[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg?logo=solidity)](https://docs.soliditylang.org/en/v0.8.24/)  
[![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-Library-orange.svg)](https://docs.openzeppelin.com/contracts)  
[![Audit](https://img.shields.io/badge/Audit-Cyberscope-brightgreen.svg)](./audit.pdf)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)  
[![Deployment](https://img.shields.io/badge/Deployed-MultiChain-purple.svg)](./MULTICHAIN.md)  

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

## 📜 Changelog  

### [v1.0.1] - 2025-10-02  
#### ✅ Added  
- ERC20 unit tests: `transfer`, `approve`, `allowance`, chained transfers (`owner → addr1 → addr2`).  

#### 🔧 Fixed  
- `package.json` updated to correctly include **@openzeppelin/contracts** dependency.  

#### ⚡ Improved  
- **Hardhat config** simplified and more robust.  
- CI/CD: added **coverage** and **Slither static analysis**.  
- GitHub Actions pipeline now includes compilation, tests, and automated deployments.  

#### 📜 Contracts  
- `contracts/IOBToken_0.8.24.sol` — optimized ERC20 main contract.  
- `legacy/IOBToken_0.8.16_legacy.sol` — archived reference version.  
- `flattened/IOBToken_0.8.24_flat.sol` — flattened version for Etherscan verification.  

#### 🔒 Security  
- Slither integrated into CI.  
- Hardhat deployment tests included.  
- ✅ No critical vulnerabilities found.  
- Cyberscope audit remains valid for core contract logic.  

---

### [v1.0.0] - 2025-09-25  
#### 🎉 Initial Release  
- First official release of **IO Beats ($IOB) smart contracts**.  
- Main ERC20 contract deployed with **Cyberscope audit**.  
- Multi-chain deployment: Ethereum, BNB Chain, Polygon, Base, Arbitrum.  
- Documentation added: `README.md`, `SECURITY.md`, `CONTRIBUTING.md`, `MULTICHAIN.md`.  

---

## 🤝 Contributing  
We welcome contributions!  
Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to propose changes, submit PRs, or report issues.  

---

## 🔐 Security Policy  
📄 See [SECURITY.md](./SECURITY.md) for security practices, responsible disclosure, and contacts.  

---

## ⚖ License  
This project is licensed under the [MIT License](./LICENSE).  

---

## 💡 Credits  
Built with ❤️ by **iO Beats Team**  

🌐 Website: [iobeats.com](https://iobeats.com)  
🎶 Music Player: [open.iobeats.com](https://open.iobeats.com)  
💬 Community: [Telegram](https://t.me/iobeatscommunity) | [X/Twitter](https://x.com/iobeatsofficial) | [Discord](https://discord.com/invite/...)  
