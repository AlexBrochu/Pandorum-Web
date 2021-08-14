import supertest from 'supertest'
import app from 'Root/app'
const request = supertest(app)

describe('GET /api/v1/news', () => {
    it('should return 200 OK with french news when header language=fr is set', async () => {
      const res = await request.get('/api/v1/news')
      expect(res.status).toBe(200)
    })

    it('should return 404 Not found when url is not valid', async () => {
      const res = await request.get('/api/v1/newstests')
      expect(res.status).toBe(404)
    })
})
