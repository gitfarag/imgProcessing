import request from 'supertest';
import app from '../app';
import entryValidator from './../validator/entryValidator';

describe('server runs', () => {
  it('app is defined', () => {
    expect(app).toBeDefined();
  });

  it('status 200 on route "/api-rest/images/img1.jpg"', (done) => {
    request(app)
      .get('/api-rest/images/img1.jpg')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });

  it('status 404 on route "/any"', (done) => {
    request(app)
      .get('/any')
      .expect(404)
      .end((error) => (error && done.fail(error)) || done());
  });

  it('status 200 on existed image route ', (done) => {
    request(app)
      .get('/api-rest/images/imageName.jpg')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });

  // imgProcessing test

  it('validating my scale entry', async () => {
    const validated = await entryValidator('100', '100');
    expect(validated).toBe('good entry');
  });
});
