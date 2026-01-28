import chalk from 'chalk';
import path from 'path';
import { promptInit } from './prompts.js';
import { copyAgentFiles, agentDirExists } from '../core/file-copier.js';
import { createDefaultConfig } from '../core/config-manager.js';
import type { ProjectType } from '../mappings/agents.js';

interface InitOptions {
    type?: ProjectType;
    yes?: boolean;
}

/**
 * Initialize .agent configuration in target directory
 */
export async function init(options: InitOptions = {}): Promise<void> {
    try {
        const targetDir = process.cwd();

        // Check if .agent already exists
        if (await agentDirExists(targetDir)) {
            console.log(chalk.red('\n❌ .agent directory already exists!'));
            console.log(chalk.yellow('Use "agent-kit update" to update existing configuration.\n'));
            process.exit(1);
        }

        let projectType: ProjectType;
        let additionalAgents: string[] = [];
        let createConfig = true;

        // Use provided options or prompt
        if (options.yes && options.type) {
            projectType = options.type;
        } else if (options.type) {
            projectType = options.type;
            console.log(chalk.cyan(`\n🤖 Initializing ${projectType} project...\n`));
        } else {
            const answers = await promptInit();
            projectType = answers.projectType;
            additionalAgents = answers.additionalAgents || [];
            createConfig = answers.createConfig;
        }

        // Copy .agent files with filtering
        console.log(chalk.cyan('📦 Copying .agent files...'));
        await copyAgentFiles(targetDir, projectType, {
            projectType,
            includedAgents: additionalAgents,
        });

        // Create config file if requested
        if (createConfig) {
            console.log(chalk.cyan('📝 Creating .agent-config.json...'));
            await createDefaultConfig(targetDir, projectType, {
                includedAgents: additionalAgents,
            });
        }

        // Success message
        console.log(chalk.green.bold('\n✅ Agent Kit initialized successfully!\n'));
        console.log(chalk.white('📁 Created:'));
        console.log(chalk.gray(`   ${path.join(targetDir, '.agent')}/`));
        if (createConfig) {
            console.log(chalk.gray(`   ${path.join(targetDir, '.agent-config.json')}`));
        }

        console.log(chalk.white('\n🚀 Next steps:'));
        console.log(chalk.gray('   1. Review the .agent directory'));
        console.log(chalk.gray('   2. Customize .agent-config.json if needed'));
        console.log(chalk.gray('   3. Start building with AI assistance!\n'));

        console.log(chalk.cyan('💡 Tip: Use workflows like /create, /plan, /debug for guided assistance.\n'));
    } catch (error) {
        console.error(chalk.red('\n❌ Error during initialization:'));
        console.error(error);
        process.exit(1);
    }
}
