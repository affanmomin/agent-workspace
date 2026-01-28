# @affanmomin/agent-workspace

> 🤖 **Intelligent AI Agent Framework Distribution**

Distribute customizable AI agent configurations to your projects. Get the right agents, skills, and workflows based on your project type—frontend, backend, mobile, or any of 9 supported types.

[![npm version](https://badge.fury.io/js/%40affanmomin%2Fagent-workspace.svg)](https://www.npmjs.com/package/@affanmomin/agent-workspace)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@affanmomin/agent-workspace.svg)](https://www.npmjs.com/package/@affanmomin/agent-workspace)

---

## ✨ Features

- 🎯 **Interactive CLI** - User-friendly prompts like `create-vite`
- 🔧 **9 Project Types** - Frontend, Backend, Mobile, Full-Stack, Desktop, CLI, Extension, Game, Monorepo
- 🎨 **Smart Filtering** - Only includes relevant agents and skills for your project type
- ⚙️ **Configuration System** - Customize via `.agent-config.json` with company rules
- 🔄 **Update Mechanism** - Update configurations while preserving your customizations
- 🤖 **AI Integration** - Custom rules are enforced by the AI system
- 📦 **Zero Config** - Works out of the box with sensible defaults

---

## 🤔 Why Use This?

**Problem**: Setting up AI agent configurations manually is time-consuming and error-prone. You end up with:
- ❌ Irrelevant agents for your project type
- ❌ Bloated configurations with unnecessary skills
- ❌ No way to enforce company coding standards
- ❌ Manual updates when the framework changes

**Solution**: `@affanmomin/agent-workspace` automatically:
- ✅ Installs only the agents and skills you need
- ✅ Filters content based on your project type
- ✅ Enforces your custom rules via AI
- ✅ Updates with a single command while preserving your settings

**Result**: Get AI-powered development assistance tailored to your exact needs in under 30 seconds.

---

## 🚀 Quick Start

```bash
# Initialize in your project
npx @affanmomin/agent-workspace init

# Update existing configuration
npx @affanmomin/agent-workspace update
```

---

## 📦 Installation

No installation required! Use `npx` to run directly:

```bash
npx @affanmomin/agent-workspace init
```

Or install globally:

```bash
npm install -g @affanmomin/agent-workspace
agent-workspace init
```

---

## 🎯 Supported Project Types

| Type | Agents | Skills | Use Case |
|------|--------|--------|----------|
| **Frontend** | 13 | 24 | React, Next.js, Vue apps |
| **Backend** | 13 | 22 | Node.js, Python APIs |
| **Mobile** | 12 | 19 | React Native, Flutter |
| **Full-Stack** | 15 | 26 | Complete web applications |
| **Desktop** | 12 | 19 | Electron apps |
| **CLI** | 12 | 19 | Command-line tools |
| **Extension** | 12 | 19 | Browser extensions |
| **Game** | 12 | 19 | Game development |
| **Monorepo** | 20 | 36 | Multi-project workspaces |

**Shared Agents** (included in all types): `orchestrator`, `project-planner`, `debugger`, `security-auditor`, `test-engineer`, `qa-automation-engineer`, `performance-optimizer`, `devops-engineer`, `documentation-writer`, `code-archaeologist`, `explorer-agent`

---

## 📖 Usage

### Initialize New Project

```bash
# Interactive mode (recommended)
npx @affanmomin/agent-workspace init

# With flags
npx @affanmomin/agent-workspace init --type frontend --yes
```

**Interactive prompts:**
1. 🎯 Select project type
2. 🎨 Customize agent selection (optional)
3. ⚙️ Create configuration file

### Update Existing Project

```bash
# Interactive update
npx @affanmomin/agent-workspace update

# Force update without confirmation
npx @affanmomin/agent-workspace update --force
```

---

## ⚙️ Configuration

After initialization, customize via `.agent-config.json`:

```json
{
  "projectType": "backend",
  "customRules": {
    "colorBan": ["purple", "violet"],
    "additionalRules": "Use Express.js for APIs. PostgreSQL for database. JWT authentication."
  },
  "includedAgents": ["penetration-tester"],
  "excludedAgents": ["seo-specialist"],
  "includedSkills": ["python-patterns"],
  "excludedSkills": []
}
```

### Configuration Options

| Field | Type | Description |
|-------|------|-------------|
| `projectType` | string | Project type (frontend, backend, etc.) |
| `customRules.colorBan` | string[] | Colors to never use in designs |
| `customRules.additionalRules` | string | Company-specific rules (enforced by AI) |
| `includedAgents` | string[] | Additional agents to include |
| `excludedAgents` | string[] | Agents to exclude from defaults |
| `includedSkills` | string[] | Additional skills to include |
| `excludedSkills` | string[] | Skills to exclude from defaults |

---

## 💡 Examples

### E-commerce Frontend

```json
{
  "projectType": "frontend",
  "customRules": {
    "additionalRules": "Use Next.js 14 App Router. Optimize for Core Web Vitals. Implement SEO best practices."
  },
  "includedAgents": ["backend-specialist", "seo-specialist"]
}
```

### Secure Backend API

```json
{
  "projectType": "backend",
  "customRules": {
    "additionalRules": "OWASP Top 10 compliance required. Use Zod for validation. Implement rate limiting."
  },
  "includedAgents": ["penetration-tester"]
}
```

### Mobile App with Backend

```json
{
  "projectType": "mobile",
  "customRules": {
    "additionalRules": "React Native with Expo. Optimize for battery life."
  },
  "includedAgents": ["backend-specialist"],
  "includedSkills": ["api-patterns", "database-design"]
}
```

---

## 🎨 What Gets Installed

```
.agent/
├── ARCHITECTURE.md          # System overview
├── agents/                  # Filtered by project type
│   ├── frontend-specialist.md
│   ├── backend-specialist.md
│   └── ...
├── skills/                  # Filtered by project type
│   ├── nextjs-react-expert/
│   ├── api-patterns/
│   └── ...
├── workflows/               # All workflows included
│   ├── create.md
│   ├── plan.md
│   └── ...
├── rules/
│   └── GEMINI.md           # AI behavior rules
└── scripts/                # Validation scripts
```

---

## 🔗 Links

- **GitHub**: [affanmomin/agent-workspace](https://github.com/affanmomin/agent-workspace)
- **Documentation**: [README](https://github.com/affanmomin/agent-workspace#readme)
- **Issues**: [Report bugs](https://github.com/affanmomin/agent-workspace/issues)

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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

---

[NPM](https://www.npmjs.com/package/@affanmomin/agent-workspace) • [GitHub](https://github.com/affanmomin/agent-workspace) • [Documentation](https://github.com/affanmomin/agent-workspace#readme)

</div>
