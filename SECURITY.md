# Security Policy

## Supported Versions
We currently support and maintain the following smart contract versions:

- ✅ `IOBToken_0.8.24.sol` → Active contract (audited by Cyberscope)  
- ⚠️ `iobeats_0.8.16_legacy.sol` → Legacy contract (not maintained, for reference only)  

## Scope
This security policy applies to:
- Smart contracts within this repository.  
- Deployment scripts and configurations.  
- Related infrastructure that directly affects the IO Beats ecosystem.  

It does **not** cover third-party dependencies (e.g., OpenZeppelin) which are maintained externally.

## Reporting a Vulnerability
We take security very seriously at **iO Beats**.  
If you discover a vulnerability in our contracts or related infrastructure:

1. **Do not disclose it publicly** until it has been reviewed and patched.  
2. Please report it privately via email: **security@iobeats.com**.  
3. Include details (steps to reproduce, potential impact, suggested fix).  
4. Our team will acknowledge your report within **48 hours** and work on a resolution.  

## Severity Levels
- 🔴 **Critical** – Direct loss of funds, permanent contract lock, or governance takeover.  
- 🟠 **High** – Major impact on protocol stability or user balances.  
- 🟡 **Medium** – Limited impact, requires specific conditions.  
- 🟢 **Low** – Minor issue, best practices or gas optimization.  

## Responsible Disclosure
- We follow a **responsible disclosure** process.  
- Critical and High severity bugs may be eligible for **bug bounty rewards** in $IOB tokens.  
- Rewards depend on severity, exploitability, and quality of the report.  
- Once resolved, the issue will be documented in the **CHANGELOG.md**.  

## Transparency
Once a vulnerability has been patched:
- The fix will be noted in the **CHANGELOG.md**.  
- Security advisories may be published using GitHub's advisory system.  
- Contributors will be credited when appropriate.  

---

Thank you for helping us keep the iO Beats ecosystem secure 🔒.  

