import chalk from 'chalk';
import { promptUpdate } from './prompts.js';
import { updateAgentFiles, agentDirExists } from '../core/file-copier.js';
import { loadConfig } from '../core/config-manager.js';

interface UpdateOptions {
    force?: boolean;
}

/**
 * Update existing .agent configuration
 */
export async function update(options: UpdateOptions = {}): Promise<void> {
    try {
        const targetDir = process.cwd();

        // Check if .agent exists
        if (!(await agentDirExists(targetDir))) {
            console.log(chalk.red('\n❌ No .agent directory found!'));
            console.log(chalk.yellow('Use "agent-kit init" to initialize first.\n'));
            process.exit(1);
        }

        // Load existing config
        const config = await loadConfig(targetDir);
        if (!config) {
            console.log(chalk.red('\n❌ No .agent-config.json found!'));
            console.log(chalk.yellow('Cannot update without configuration file.\n'));
            process.exit(1);
        }

        // Confirm update
        const confirmed = await promptUpdate(options.force || false);
        if (!confirmed) {
            console.log(chalk.yellow('\n⚠️  Update cancelled.\n'));
            process.exit(0);
        }

        // Update files
        console.log(chalk.cyan('\n📦 Updating .agent files...'));
        await updateAgentFiles(targetDir, config);

        // Success message
        console.log(chalk.green.bold('\n✅ Agent Kit updated successfully!\n'));
        console.log(chalk.white('📁 Updated:'));
        console.log(chalk.gray(`   ${targetDir}/.agent/`));
        console.log(chalk.white('\n🔒 Preserved:'));
        console.log(chalk.gray(`   ${targetDir}/.agent-config.json\n`));

        console.log(chalk.cyan('💡 Your custom configuration has been preserved.\n'));
    } catch (error) {
        console.error(chalk.red('\n❌ Error during update:'));
        console.error(error);
        process.exit(1);
    }
}
