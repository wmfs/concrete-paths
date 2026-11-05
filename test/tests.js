/* eslint-env mocha */
'use strict'

const chai = require('chai')
const expect = chai.expect
const concretePaths = require('./../lib')
const path = require('path')

describe('Run some basic path-discovery things', function () {
  it('Should test simple glob-pattern string usage', async () => {
    const result = await concretePaths(path.resolve(__dirname, './fixtures/stuff/**/*.js').replace(/\\/g, '/'))
    expect(result.map(p => path.relative(path.resolve(__dirname, 'fixtures/stuff'), p).replace(/\\/g, '/')).sort()).to.eql([
      'lib/file1.js',
      'lib/file2.js',
      'test/test1.js',
      'test/test2.js'
    ])
  })

  it('Should split delimited patterns', async () => {
    const root = path.resolve(__dirname, './fixtures/stuff').replace(/\\/g, '/')
    const result = await concretePaths(`${root}/lib/*.js;${root}/test/test1.js`)
    expect(result.map(p => path.basename(p)).sort()).to.eql(['file1.js', 'file2.js', 'test1.js'])
  })

  it('Should return an empty array for no patterns', async () => {
    expect(await concretePaths(undefined)).to.eql([])
  })
})
