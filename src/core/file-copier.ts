import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ProjectType } from '../mappings/agents.js';
import { getAgentsForProject, shouldExcludeAgent } from '../mappings/agents.js';
import { getSkillsForProject, shouldExcludeSkill } from '../mappings/skills.js';
import { getWorkflowsForProject } from '../mappings/workflows.js';
import type { AgentConfig } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Get the source .agent directory from the package
 */
function getSourceAgentDir(): string {
    // In development: agent-kit/src/core/file-copier.ts -> agent-kit/.agent
    // In production: agent-kit/dist/core/file-copier.js -> agent-kit/.agent
    const packageRoot = path.resolve(__dirname, '../..');
    return path.join(packageRoot, '.agent');
}

/**
 * Copy .agent directory to target with filtering
 */
export async function copyAgentFiles(
    targetDir: string,
    projectType: ProjectType,
    config?: AgentConfig
): Promise<void> {
    const sourceDir = getSourceAgentDir();
    const targetAgentDir = path.join(targetDir, '.agent');

    // Ensure target directory exists
    await fs.ensureDir(targetAgentDir);

    // Get lists of what to include
    const includedAgents = getAgentsForProject(projectType);
    const includedSkills = getSkillsForProject(projectType);
    const includedWorkflows = getWorkflowsForProject(projectType);

    // Apply config overrides
    if (config) {
        // Add manually included agents
        if (config.includedAgents) {
            includedAgents.push(...config.includedAgents);
        }
        // Remove manually excluded agents
        if (config.excludedAgents) {
            config.excludedAgents.forEach(agent => {
                const index = includedAgents.indexOf(agent);
                if (index > -1) includedAgents.splice(index, 1);
            });
        }

        // Same for skills
        if (config.includedSkills) {
            includedSkills.push(...config.includedSkills);
        }
        if (config.excludedSkills) {
            config.excludedSkills.forEach(skill => {
                const index = includedSkills.indexOf(skill);
                if (index > -1) includedSkills.splice(index, 1);
            });
        }

        // Same for workflows
        if (config.includedWorkflows) {
            includedWorkflows.push(...config.includedWorkflows);
        }
        if (config.excludedWorkflows) {
            config.excludedWorkflows.forEach(workflow => {
                const index = includedWorkflows.indexOf(workflow);
                if (index > -1) includedWorkflows.splice(index, 1);
            });
        }
    }

    // Copy ARCHITECTURE.md and rules/
    await fs.copy(
        path.join(sourceDir, 'ARCHITECTURE.md'),
        path.join(targetAgentDir, 'ARCHITECTURE.md')
    );

    if (await fs.pathExists(path.join(sourceDir, 'rules'))) {
        await fs.copy(
            path.join(sourceDir, 'rules'),
            path.join(targetAgentDir, 'rules')
        );
    }

    // Copy scripts/
    if (await fs.pathExists(path.join(sourceDir, 'scripts'))) {
        await fs.copy(
            path.join(sourceDir, 'scripts'),
            path.join(targetAgentDir, 'scripts')
        );
    }

    // Copy .shared/ if exists
    if (await fs.pathExists(path.join(sourceDir, '.shared'))) {
        await fs.copy(
            path.join(sourceDir, '.shared'),
            path.join(targetAgentDir, '.shared')
        );
    }

    // Copy filtered agents
    const agentsSourceDir = path.join(sourceDir, 'agents');
    const agentsTargetDir = path.join(targetAgentDir, 'agents');
    await fs.ensureDir(agentsTargetDir);

    const allAgentFiles = await fs.readdir(agentsSourceDir);
    for (const agentFile of allAgentFiles) {
        const agentName = path.basename(agentFile, '.md');
        if (includedAgents.includes(agentName)) {
            await fs.copy(
                path.join(agentsSourceDir, agentFile),
                path.join(agentsTargetDir, agentFile)
            );
        }
    }

    // Copy filtered skills
    const skillsSourceDir = path.join(sourceDir, 'skills');
    const skillsTargetDir = path.join(targetAgentDir, 'skills');
    await fs.ensureDir(skillsTargetDir);

    const allSkillDirs = await fs.readdir(skillsSourceDir);
    for (const skillDir of allSkillDirs) {
        const skillPath = path.join(skillsSourceDir, skillDir);
        const stat = await fs.stat(skillPath);

        if (stat.isDirectory() && includedSkills.includes(skillDir)) {
            await fs.copy(skillPath, path.join(skillsTargetDir, skillDir));
        }
    }

    // Copy filtered workflows
    const workflowsSourceDir = path.join(sourceDir, 'workflows');
    const workflowsTargetDir = path.join(targetAgentDir, 'workflows');
    await fs.ensureDir(workflowsTargetDir);

    const allWorkflowFiles = await fs.readdir(workflowsSourceDir);
    for (const workflowFile of allWorkflowFiles) {
        const workflowName = path.basename(workflowFile, '.md');
        if (includedWorkflows.includes(workflowName)) {
            await fs.copy(
                path.join(workflowsSourceDir, workflowFile),
                path.join(workflowsTargetDir, workflowFile)
            );
        }
    }
}

/**
 * Update existing .agent directory
 */
export async function updateAgentFiles(
    targetDir: string,
    config: AgentConfig
): Promise<void> {
    // For updates, we re-copy everything based on the existing config
    await copyAgentFiles(targetDir, config.projectType, config);
}

/**
 * Check if .agent directory exists in target
 */
export async function agentDirExists(targetDir: string): Promise<boolean> {
    return fs.pathExists(path.join(targetDir, '.agent'));
}
