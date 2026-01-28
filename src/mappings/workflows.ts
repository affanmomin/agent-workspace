import type { ProjectType } from './agents.js';

/**
 * All workflows are included in all project types
 * They are contextual and will only be used when relevant
 */
export const ALL_WORKFLOWS = [
    'brainstorm',
    'create',
    'debug',
    'deploy',
    'enhance',
    'orchestrate',
    'plan',
    'preview',
    'status',
    'test',
    'ui-ux-pro-max',
];

/**
 * Get workflows for a project type (all workflows for now)
 */
export function getWorkflowsForProject(projectType: ProjectType): string[] {
    return ALL_WORKFLOWS;
}
