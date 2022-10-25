import request from 'supertest';
import app from '../app';

describe('Server Statrs Normally', () => {
  it('expect app to be defined', () => {
    expect(app).toBeDefined();
  });

  it('server returns status 200 on route "/"', (done) => {
    request(app).get('/').expect(200).end((error) => (error ? done.fail(error) : done()));
  });
});
