"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('server runs', () => {
    it('app is defined', () => {
        expect(app_1.default).toBeDefined();
    });
    it('status 200 on route "/api-rest/images/img1.jpg"', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/api-rest/images/img1.jpg')
            .expect(200)
            .end((error) => (error ? done.fail(error) : done()));
    });
    it('status 404 on route "/any"', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/any')
            .expect(404)
            .end((error) => (error && done.fail(error) || done()));
    });
    it('status 500 on existed image route ', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/api-rest/images/200/200/img1.jpg')
            .expect(500)
            .end((error) => (error ? done.fail(error) : done()));
    });
});
