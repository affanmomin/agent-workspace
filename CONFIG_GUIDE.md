# Configuration Guide

This guide explains how to customize your `@affanmomin/agent-workspace` setup via `.agent-config.json`.

## The `.agent-config.json` File

When you run `npx @affanmomin/agent-workspace init`, a `.agent-config.json` file is created in your project root. This file is the source of truth for your AI configuration.

### Default Configuration

```json
{
  "projectType": "frontend",
  "customRules": {
    "colorBan": ["purple", "violet"],
    "additionalRules": ""
  },
  "excludedAgents": [],
  "includedAgents": [],
  "excludedSkills": [],
  "includedSkills": [],
  "excludedWorkflows": [],
  "includedWorkflows": []
}
```

## Fields Explanation

### `projectType`
The type of your project. Valid values are:
- `frontend`
- `backend`
- `mobile`
- `fullstack`
- `desktop`
- `cli`
- `extension`
- `game`
- `monorepo`

### `customRules.colorBan`
An array of color names that the AI should never use in UI designs. Perfect for enforcing brand guidelines.

### `customRules.additionalRules`
Company-specific rules or project-specific instructions that the AI will always follow.
Example: `"Use Tailwind CSS and follow the Atomic Design pattern."`

### `includedAgents` / `excludedAgents`
Manually add or remove specific agents from your installation.
Example: If you are on `backend` but want `seo-specialist`, add it to `includedAgents`.

### `includedSkills` / `excludedSkills`
Manually add or remove specific skills.

---

## AI Implementation

The rules defined in `.agent-config.json` are automatically read and enforced by the global AI rules in `.agent/rules/GEMINI.md`. You don't need to manually tell the AI about these rules; it's built into the system.

## Updating Configuration

If you change `.agent-config.json`, run the update command to refresh your files:

```bash
npx @affanmomin/agent-workspace update
```

This will:
1. Preserve your `.agent-config.json`
2. Update all agent and skill files
3. Re-filter content based on your new settings
