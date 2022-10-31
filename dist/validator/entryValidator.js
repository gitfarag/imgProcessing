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
Object.defineProperty(exports, "__esModule", { value: true });
const entryValidate = (width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const parsewidth = parseInt(width);
    const parseheight = parseInt(height);
    if (isNaN(parsewidth) || parsewidth < 0)
        return 'invalid width entry';
    else if (isNaN(parseheight) || parseheight < 0) {
        return 'invalid height entry';
    }
    else {
        return 'good entry';
    }
});
exports.default = entryValidate;
