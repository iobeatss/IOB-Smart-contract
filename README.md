# IO Beats Smart Contracts

Official repository for the $IOB token smart contracts.  
IO Beats is a Web3 music ecosystem deployed on multiple EVM chains, combining NFTs, DeFi utilities, and community governance.

---

## 🔹 Smart Contracts

### Current Active Version
- **[IOBToken_0.8.24.sol](./IOBToken_0.8.24.sol)** → Optimized Solidity contract (latest stable build).  
  - [✅ Cyberscope Audit Report](https://github.com/cyberscope-io/audits/blob/main/iob/audit.pdf)  
  - Actively deployed and maintained across multiple chains.  
  - Submitted for verification on Etherscan (2025-09-02).  

### Legacy Versions
- **[iobeats_0.8.16_legacy.sol](./legacy/iobeats_0.8.16_legacy.sol)**  
  - First deployed version of the IOB token (archived for historical purposes).  
  - Replaced by `IOBToken_0.8.24.sol` for better gas efficiency and maintainability.

### Flattened Sources
- **[IOBToken_0.8.24_flat.sol](./flattened/IOBToken_0.8.24_flat.sol)**  
  - Flattened version of the active contract.  
  - Used for **Etherscan verification** (includes all OpenZeppelin dependencies).  
  - Not intended for development (use the modular `IOBToken_0.8.24.sol` instead).  

---

## 🔹 Deployment Networks

The $IOB token is deployed on multiple chains for accessibility and scalability:

- **Ethereum (ERC20)** → `0xDaD68778f0a0732E232f27dc296e3602E12d108A`  
- **BNB Chain (BEP20)** → `0x13ed5aC0a6AbE5bbB1881d75ad05Fe9e22478238`  
- **Polygon (ERC20)** → `0xee09fc58439f3bd514dd5cfb3b3e383e4788ecca`  
- **Base (ERC20)** → `0x80a23f168831d6e1f0a1353dbf3a75cae16cb709`  
- **Arbitrum (ERC20)** → `0x461db9ac7eca7955a1f87e300dde8b32cc0eaac0`

---

## 🔹 Audit

- **Security Audit by [Cyberscope](https://github.com/cyberscope-io/audits/blob/main/iob/audit.pdf)**  
  - ✅ Smart contract security  
  - ✅ Admin permissions  
  - ✅ Resistance to common attacks  
  - ✅ Recommendations implemented  

---

## 🔹 License
This project is licensed under the **MIT License**.
