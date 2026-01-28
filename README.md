# @affanmomin/agent-workspace

> 🤖 **Intelligent AI Agent Framework Distribution**

Distribute customizable AI agent configurations to your projects. Get the right agents, skills, and workflows based on your project type—frontend, backend, mobile, or any of 9 supported types.

[![npm version](https://badge.fury.io/js/%40affanmomin%2Fagent-workspace.svg)](https://www.npmjs.com/package/@affanmomin/agent-workspace)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@affanmomin/agent-workspace.svg)](https://www.npmjs.com/package/@affanmomin/agent-workspace)

---

## 🚀 Quick Start

```bash
npx @affanmomin/agent-workspace init
```

That's it! Interactive prompts will guide you through setup.

---

## ✨ Features

- 🎯 **Interactive CLI** - Vite-style user experience
- 🔧 **9 Project Types** - Frontend, Backend, Mobile, Full-Stack, Desktop, CLI, Extension, Game, Monorepo
- 🎨 **Smart Filtering** - Only relevant agents and skills for your project
- ⚙️ **Custom Rules** - Enforce company standards via `.agent-config.json`
- 🔄 **Easy Updates** - `npx @affanmomin/agent-workspace update`

---

## 🎯 Project Types

| Type | Agents | Skills | Best For |
|------|--------|--------|----------|
| Frontend | 13 | 24 | React, Next.js, Vue |
| Backend | 13 | 22 | Node.js, Python APIs |
| Mobile | 12 | 19 | React Native, Flutter |
| Full-Stack | 15 | 26 | Complete web apps |
| Monorepo | 20 | 36 | Multi-project workspaces |

Plus: Desktop, CLI, Extension, Game

---

## ⚙️ Configuration

Customize via `.agent-config.json`:

```json
{
  "projectType": "backend",
  "customRules": {
    "additionalRules": "Use Express.js. PostgreSQL database. JWT auth."
  },
  "includedSkills": ["python-patterns"]
}
```

**Custom rules are enforced by the AI** - no manual configuration needed.

---

## 💡 Example

```bash
# Initialize frontend project
npx @affanmomin/agent-workspace init --type frontend

# Update existing project
npx @affanmomin/agent-workspace update
```

---

## 📦 What You Get

- **20 Specialist Agents** - Frontend, Backend, Security, Performance, etc.
- **36 Skills** - Next.js optimization, API patterns, mobile design, etc.
- **11 Workflows** - `/create`, `/plan`, `/debug`, `/test`, etc.
- **Validation Scripts** - Security scans, linting, performance audits

All filtered based on your project type.

---

## 🔗 Links

- **GitHub**: [affanmomin/agent-workspace](https://github.com/affanmomin/agent-workspace)
- **Documentation**: [README](https://github.com/affanmomin/agent-workspace#readme)
- **Issues**: [Report bugs](https://github.com/affanmomin/agent-workspace/issues)

---

## 📄 License

MIT © [Affan Momin](https://github.com/affanmomin)

---

<div align="center">

**Made with ❤️ by [Affan Momin](https://github.com/affanmomin)**

Open source and free forever.

---

### ☕ Support This Project

If you find this helpful, consider buying me a coffee!

<a href="https://buymeacoffee.com/affanmomin" target="_blank">
  <img src=".github/bmc-qr.png" alt="Buy Me A Coffee QR Code" width="200"/>
</a>

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support-yellow?style=flat-square&logo=buy-me-a-coffee)](https://buymeacoffee.com/affanmomin)

</div>
