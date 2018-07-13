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
    template: 'jxnblk/create-docs/templates/next'
  },
]

const cli = meow(`
  Usage

    $ npm init docs

    $ npx create-docs

  Options

`, {
  flags: {
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
  const response = await prompts(form)

  if (!response.confirm) {
    console.log('aborted')
    process.exit(0)
  }

  if (!response.name) {
    console.error('name is required')
    // todo: prompt again
    process.exit(1)
  }
  // todo: ensure directory doesn't exist

  console.log('creating docs', response)
}

run({})
