#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const meow = require('meow')
const prompts = require('prompts')
const chalk = require('chalk')
const ora = require('ora')
const initit = require('initit')

const templates = [
  {
    name: 'Next.js',
    path: 'jxnblk/create-docs/templates/next'
  },
]

const cli = meow(`
  Usage

    $ npm init docs

    $ npx create-docs

  Options

    --name  Directory name for docs

    -y      Create docs without confirmation step

`, {
  flags: {
    help: {
      type: 'boolean',
      alias: 'h'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    name: {
      type: 'string'
    },
    confirm: {
      type: 'boolean',
      alias: 'y'
    }
  }
})

const form = [
  {
    type: 'select',
    name: 'template',
    message: 'Choose a base template',
    choices: templates.map(({ name }, i) => ({ title: name, value: i }))
  },
  {
    type: 'text',
    name: 'name',
    message: 'Choose a name for the docs folder',
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: (prev, values) => `Create docs in ${values.name}?`,
    initial: true
  }
]

const run = async opts => {
  prompts.inject(opts)
  const response = await prompts(form)

  if (!response.confirm) {
    console.log('aborted')
    process.exit(0)
  }
  const { name } = response
  const template = templates[response.template]

  const spinner = ora('creating docs...').start()

  if (!name) {
    spinner.fail('name is required')
    // todo: prompt again
    process.exit(1)
  }

  if (!template) {
    // this should never happen
    spinner.fail('template not found')
    process.exit(1)
  }

  // todo: ensure directory doesn't exist

  initit({ name, template: template.path })
    .then(res => {
      spinner.succeed('created docs')
      process.exit(0)
    })
    .catch(err => {
      spinner.fail('failed to create docs')
      console.log(chalk.red('ERR'), err)
      process.exit(1)
    })
}

run(cli.flags)
