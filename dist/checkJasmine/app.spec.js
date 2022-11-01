"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const entryValidator_1 = __importDefault(require("./../validator/entryValidator"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
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
            .end((error) => (error && done.fail(error)) || done());
    });
    it('status 200 on existed image route ', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/api-rest/images/imageName.jpg')
            .expect(200)
            .end((error) => (error ? done.fail(error) : done()));
    });
    // imgProcessing test
    it('validating my scale entry', () => __awaiter(void 0, void 0, void 0, function* () {
        const validated = yield (0, entryValidator_1.default)('100', '100');
        expect(validated).toBe('good entry');
    }));
    // sharp test 
    it('image processing using sharp', () => __awaiter(void 0, void 0, void 0, function* () {
        const basePath = path_1.default.join(__dirname, '..', '..', 'assets', 'images', `oops.jpg`);
        const croppedpath = path_1.default.join(__dirname, '..', '..', 'assets', 'cropped', `resized.jpg`);
        yield (0, sharp_1.default)(basePath)
            .resize(100, 100)
            .toFile('./assets/cropped/resized.jpg');
        const exist = fs_1.default.existsSync(croppedpath);
        expect(exist).toBeTrue();
    }));
});
