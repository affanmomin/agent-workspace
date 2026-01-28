import type { ProjectType } from './agents.js';

export interface SkillMapping {
    required: string[];
    shared: string[];
    excluded: string[];
}

// Shared skills included in ALL project types
const SHARED_SKILLS = [
    'clean-code',
    'brainstorming',
    'plan-writing',
    'architecture',
    'testing-patterns',
    'tdd-workflow',
    'behavioral-modes',
    'intelligent-routing',
    'parallel-agents',
    'systematic-debugging',
    'code-review-checklist',
    'documentation-templates',
    'deployment-procedures',
    'performance-profiling',
    'vulnerability-scanner',
    'bash-linux',
    'i18n-localization',
];

export const SKILL_MAPPINGS: Record<ProjectType, SkillMapping> = {
    frontend: {
        required: [
            'nextjs-react-expert',
            'frontend-design',
            'tailwind-patterns',
            'web-design-guidelines',
            'webapp-testing',
        ],
        shared: [...SHARED_SKILLS, 'seo-fundamentals', 'geo-fundamentals'],
        excluded: [
            'api-patterns',
            'nodejs-best-practices',
            'python-patterns',
            'database-design',
            'mobile-design',
            'game-development',
        ],
    },
    backend: {
        required: [
            'api-patterns',
            'nodejs-best-practices',
            'database-design',
            'server-management',
        ],
        shared: SHARED_SKILLS,
        excluded: [
            'nextjs-react-expert',
            'frontend-design',
            'tailwind-patterns',
            'web-design-guidelines',
            'mobile-design',
            'game-development',
            'webapp-testing',
        ],
    },
    mobile: {
        required: ['mobile-design'],
        shared: SHARED_SKILLS,
        excluded: [
            'nextjs-react-expert',
            'frontend-design',
            'tailwind-patterns',
            'web-design-guidelines',
            'api-patterns',
            'nodejs-best-practices',
            'database-design',
            'game-development',
            'webapp-testing',
        ],
    },
    fullstack: {
        required: [
            'nextjs-react-expert',
            'frontend-design',
            'tailwind-patterns',
            'web-design-guidelines',
            'api-patterns',
            'nodejs-best-practices',
            'database-design',
            'webapp-testing',
        ],
        shared: [...SHARED_SKILLS, 'seo-fundamentals', 'geo-fundamentals', 'server-management'],
        excluded: ['mobile-design', 'game-development'],
    },
    desktop: {
        required: ['nextjs-react-expert', 'frontend-design'],
        shared: SHARED_SKILLS,
        excluded: [
            'api-patterns',
            'nodejs-best-practices',
            'database-design',
            'mobile-design',
            'game-development',
            'webapp-testing',
            'seo-fundamentals',
            'geo-fundamentals',
        ],
    },
    cli: {
        required: ['nodejs-best-practices', 'bash-linux'],
        shared: SHARED_SKILLS,
        excluded: [
            'nextjs-react-expert',
            'frontend-design',
            'tailwind-patterns',
            'web-design-guidelines',
            'mobile-design',
            'game-development',
            'webapp-testing',
            'seo-fundamentals',
            'geo-fundamentals',
        ],
    },
    extension: {
        required: ['nextjs-react-expert', 'frontend-design'],
        shared: SHARED_SKILLS,
        excluded: [
            'api-patterns',
            'nodejs-best-practices',
            'database-design',
            'mobile-design',
            'game-development',
            'webapp-testing',
            'seo-fundamentals',
            'geo-fundamentals',
        ],
    },
    game: {
        required: ['game-development'],
        shared: SHARED_SKILLS,
        excluded: [
            'nextjs-react-expert',
            'frontend-design',
            'tailwind-patterns',
            'web-design-guidelines',
            'api-patterns',
            'nodejs-best-practices',
            'database-design',
            'mobile-design',
            'webapp-testing',
            'seo-fundamentals',
            'geo-fundamentals',
        ],
    },
    monorepo: {
        required: [
            'nextjs-react-expert',
            'frontend-design',
            'tailwind-patterns',
            'web-design-guidelines',
            'api-patterns',
            'nodejs-best-practices',
            'database-design',
            'mobile-design',
            'webapp-testing',
        ],
        shared: [...SHARED_SKILLS, 'seo-fundamentals', 'geo-fundamentals', 'server-management'],
        excluded: [], // Include everything for monorepo
    },
};

/**
 * Get all skills to include for a project type
 */
export function getSkillsForProject(projectType: ProjectType): string[] {
    const mapping = SKILL_MAPPINGS[projectType];
    return [...mapping.required, ...mapping.shared];
}

/**
 * Check if a skill should be excluded for a project type
 */
export function shouldExcludeSkill(projectType: ProjectType, skillName: string): boolean {
    const mapping = SKILL_MAPPINGS[projectType];
    return mapping.excluded.includes(skillName);
}
