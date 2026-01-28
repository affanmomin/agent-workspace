import type { ProjectType } from '../mappings/agents.js';

export interface AgentConfig {
    projectType: ProjectType;
    customRules?: {
        colorBan?: string[];
        additionalRules?: string;
    };
    excludedAgents?: string[];
    includedAgents?: string[];
    excludedSkills?: string[];
    includedSkills?: string[];
    excludedWorkflows?: string[];
    includedWorkflows?: string[];
}

export const DEFAULT_CONFIG: AgentConfig = {
    projectType: 'frontend',
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
};
