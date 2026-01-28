export type ProjectType =
    | 'frontend'
    | 'backend'
    | 'mobile'
    | 'fullstack'
    | 'desktop'
    | 'cli'
    | 'extension'
    | 'game'
    | 'monorepo';

export interface AgentMapping {
    required: string[];
    shared: string[];
    excluded: string[];
}

// Shared agents included in ALL project types
const SHARED_AGENTS = [
    'orchestrator',
    'project-planner',
    'debugger',
    'security-auditor',
    'test-engineer',
    'qa-automation-engineer',
    'performance-optimizer',
    'devops-engineer',
    'documentation-writer',
    'code-archaeologist',
    'explorer-agent',
];

export const AGENT_MAPPINGS: Record<ProjectType, AgentMapping> = {
    frontend: {
        required: ['frontend-specialist'],
        shared: [...SHARED_AGENTS, 'seo-specialist'],
        excluded: ['backend-specialist', 'mobile-developer', 'game-developer', 'database-architect'],
    },
    backend: {
        required: ['backend-specialist', 'database-architect'],
        shared: SHARED_AGENTS,
        excluded: ['frontend-specialist', 'mobile-developer', 'game-developer'],
    },
    mobile: {
        required: ['mobile-developer'],
        shared: SHARED_AGENTS,
        excluded: ['frontend-specialist', 'backend-specialist', 'game-developer', 'database-architect'],
    },
    fullstack: {
        required: ['frontend-specialist', 'backend-specialist', 'database-architect'],
        shared: [...SHARED_AGENTS, 'seo-specialist'],
        excluded: ['mobile-developer', 'game-developer'],
    },
    desktop: {
        required: ['frontend-specialist'],
        shared: SHARED_AGENTS,
        excluded: ['backend-specialist', 'mobile-developer', 'game-developer', 'database-architect'],
    },
    cli: {
        required: ['backend-specialist'],
        shared: SHARED_AGENTS,
        excluded: ['frontend-specialist', 'mobile-developer', 'game-developer', 'database-architect'],
    },
    extension: {
        required: ['frontend-specialist'],
        shared: SHARED_AGENTS,
        excluded: ['backend-specialist', 'mobile-developer', 'game-developer', 'database-architect'],
    },
    game: {
        required: ['game-developer'],
        shared: SHARED_AGENTS,
        excluded: ['frontend-specialist', 'backend-specialist', 'mobile-developer', 'database-architect'],
    },
    monorepo: {
        required: ['frontend-specialist', 'backend-specialist', 'database-architect', 'mobile-developer'],
        shared: [...SHARED_AGENTS, 'seo-specialist'],
        excluded: [], // Include everything for monorepo
    },
};

/**
 * Get all agents to include for a project type
 */
export function getAgentsForProject(projectType: ProjectType): string[] {
    const mapping = AGENT_MAPPINGS[projectType];
    return [...mapping.required, ...mapping.shared];
}

/**
 * Check if an agent should be excluded for a project type
 */
export function shouldExcludeAgent(projectType: ProjectType, agentName: string): boolean {
    const mapping = AGENT_MAPPINGS[projectType];
    return mapping.excluded.includes(agentName);
}
