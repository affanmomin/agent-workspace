import inquirer from 'inquirer';
import chalk from 'chalk';
import type { ProjectType } from '../mappings/agents.js';

export interface InitAnswers {
    projectType: ProjectType;
    customize: boolean;
    additionalAgents?: string[];
    createConfig: boolean;
}

const PROJECT_TYPE_CHOICES = [
    {
        name: '🌐 Frontend Web (Next.js, React, Vue)',
        value: 'frontend' as ProjectType,
    },
    {
        name: '⚙️  Backend API (Node.js, Python)',
        value: 'backend' as ProjectType,
    },
    {
        name: '📱 Mobile App (React Native, Flutter)',
        value: 'mobile' as ProjectType,
    },
    {
        name: '🚀 Full-Stack (Frontend + Backend)',
        value: 'fullstack' as ProjectType,
    },
    {
        name: '💻 Desktop App (Electron)',
        value: 'desktop' as ProjectType,
    },
    {
        name: '🔧 CLI Tool',
        value: 'cli' as ProjectType,
    },
    {
        name: '🧩 Browser Extension',
        value: 'extension' as ProjectType,
    },
    {
        name: '🎮 Game Development',
        value: 'game' as ProjectType,
    },
    {
        name: '📦 Monorepo',
        value: 'monorepo' as ProjectType,
    },
];

const ADDITIONAL_AGENTS = [
    { name: 'SEO Specialist', value: 'seo-specialist' },
    { name: 'Penetration Tester', value: 'penetration-tester' },
    { name: 'Product Manager', value: 'product-manager' },
    { name: 'Product Owner', value: 'product-owner' },
];

/**
 * Prompt user for initialization options
 */
export async function promptInit(): Promise<InitAnswers> {
    console.log(chalk.bold.cyan('\n🤖 Agent Kit Initialization\n'));

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'projectType',
            message: 'What type of project are you building?',
            choices: PROJECT_TYPE_CHOICES,
        },
        {
            type: 'confirm',
            name: 'customize',
            message: 'Do you want to customize the agent selection?',
            default: false,
        },
        {
            type: 'checkbox',
            name: 'additionalAgents',
            message: 'Select additional agents to include:',
            choices: ADDITIONAL_AGENTS,
            when: (answers) => answers.customize,
        },
        {
            type: 'confirm',
            name: 'createConfig',
            message: 'Create .agent-config.json for custom overrides?',
            default: true,
        },
    ]);

    return answers as InitAnswers;
}

/**
 * Prompt user for update confirmation
 */
export async function promptUpdate(force: boolean): Promise<boolean> {
    if (force) return true;

    console.log(chalk.yellow('\n⚠️  This will update your .agent directory with the latest version.'));
    console.log(chalk.yellow('Your .agent-config.json will be preserved.\n'));

    const { confirm } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Do you want to proceed?',
            default: false,
        },
    ]);

    return confirm;
}
