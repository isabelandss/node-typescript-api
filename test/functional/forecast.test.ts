import supertest from 'supertest'

describe('Beach forecast functional tests', () => {
  test('should return a forecast with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/forecast')

    expect(status).toEqual(200)
    expect(body).toEqual(
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