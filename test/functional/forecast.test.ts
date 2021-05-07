import supertest from 'supertest'

describe('Beach forecast functional tests', () => {
  test('should return a forecast with just a few times', async () => {
    const { body, status } = await supertest(app).get('/forecast')
    expect(status).toBe(200)
    expect(body).toBe(
      [
        {
          "time": "",
          "forecast": [{}],
        },
        {
          "time": "",
          "forecast": [{}],
        },
      ]
    )
  })
})