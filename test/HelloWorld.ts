import '@nomiclabs/hardhat-ethers'
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('HelloWorld', function () {
  it('should say hi', async function () {
    // 1. setup
    // 2. deploy our contract
    // 3. call our function to test

    // 2.
    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    const hello = await HelloWorld.deploy()
    await hello.deployed()

    expect(await hello.hello()).to.equal('Hello, World!')
  })
})
