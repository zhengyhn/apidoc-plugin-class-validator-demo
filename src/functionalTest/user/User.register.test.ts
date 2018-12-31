import { requestClient } from "../helper"
import * as should from 'should'

describe('Test Register', async function () {
  it('phone length less than 13, should reject', async function () {
    let {body} = await requestClient.post('/api/v1/user/register').send({
      phone: '111',
      name: 'abc',
      age: 19
    }).expect(200)

    console.log(body)
    should.equal(body.code, 1)
    should.equal(body.msg, 'phone must be longer than or equal to 11 characters')
  })

  it('age less than 18, should reject', async function () {
    let {body} = await requestClient.post('/api/v1/user/register').send({
      phone: '12345678901',
      name: 'abc',
      age: 10
    }).expect(200)

    console.log(body)
    should.equal(body.code, 1)
    should.equal(body.msg, 'age must not be less than 18')
  }) 

  it('parameters ok, should accept and return data', async function () {
    let {body} = await requestClient.post('/api/v1/user/register').send({
      phone: '12345678901',
      name: 'abc',
      age: 24
    }).expect(200)

    console.log(body)
    should.equal(body.code, 0)
    should.equal(body.data.userId, 'abc')
    should.equal(body.data.buttons[0].text, 'aaa')
  }) 
})
