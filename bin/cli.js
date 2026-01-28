#!/usr/bin/env node

import { Command } from 'commander';
import { init } from '../dist/cli/init.js';
import { update } from '../dist/cli/update.js';

const program = new Command();

program
    .name('agent-kit')
    .description('AI Agent Framework Distribution CLI')
    .version('1.0.0');

program
    .command('init')
    .description('Initialize .agent configuration for your project')
    .option('-t, --type <type>', 'Project type (frontend, backend, mobile, etc.)')
    .option('-y, --yes', 'Skip prompts and use defaults')
    .action(init);

program
    .command('update')
    .description('Update existing .agent configuration to latest version')
    .option('-f, --force', 'Force update without confirmation')
    .action(update);

program.parse();
