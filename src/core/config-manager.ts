import fs from 'fs-extra';
import path from 'path';
import type { ProjectType } from '../mappings/agents.js';
import type { AgentConfig } from './types.js';

const CONFIG_FILE = '.agent-config.json';

/**
 * Load configuration from .agent-config.json
 */
export async function loadConfig(targetDir: string): Promise<AgentConfig | null> {
    const configPath = path.join(targetDir, CONFIG_FILE);

    if (await fs.pathExists(configPath)) {
        const config = await fs.readJson(configPath);
        return config as AgentConfig;
    }

    return null;
}

/**
 * Save configuration to .agent-config.json
 */
export async function saveConfig(targetDir: string, config: AgentConfig): Promise<void> {
    const configPath = path.join(targetDir, CONFIG_FILE);
    await fs.writeJson(configPath, config, { spaces: 2 });
}

/**
 * Create default configuration file
 */
export async function createDefaultConfig(
    targetDir: string,
    projectType: ProjectType,
    options: Partial<AgentConfig> = {}
): Promise<void> {
    const config: AgentConfig = {
        projectType,
        customRules: {
            colorBan: ['purple', 'violet'],
            additionalRules: '',
        },
        excludedAgents: [],
        includedAgents: [],
        excludedSkills: [],
        includedSkills: [],
        excludedWorkflows: [],
        includedWorkflows: [],
        ...options,
    };

    await saveConfig(targetDir, config);
}

/**
 * Merge user config with defaults
 */
export function mergeConfig(userConfig: Partial<AgentConfig>, defaults: AgentConfig): AgentConfig {
    return {
        ...defaults,
        ...userConfig,
        customRules: {
            ...defaults.customRules,
            ...userConfig.customRules,
        },
    };
}
