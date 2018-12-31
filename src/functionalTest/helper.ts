import * as supertest from 'supertest'
import {server} from '../app'

const requestClient = supertest.agent(server)

export {requestClient}