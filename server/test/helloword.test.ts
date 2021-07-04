import request from 'supertest'
import HelloWord from '../src/routes/hello-word'

describe('GET /api', () => {
    it('should return 200 OK', () => {
        return request(HelloWord).get('/test')
            .expect(200)
    })
})
