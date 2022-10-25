import request from 'supertest';
import app from '../app';

describe('server runs', () => {
  it('app is defined', () => {
    expect(app).toBeDefined();
  });

  it('status 200 on route "/api-rest/images/img1.jpg"', (done) => {
    request(app).get('/api-rest/images/img1.jpg').expect(200).end((error) => (error ? done.fail(error) : done()));
  });

  it('status 404 on route "/any"', (done) => {
    request(app).get('/any').expect(404).end((error) => (error ? done.fail(error) : done()));
  });

  it('status 500 on existed image route ', (done) => {
    request(app).get('/api-rest/images/200/200/img1.jpg').expect(500).end((error) => (error ? done.fail(error) : done()));
  });
});
