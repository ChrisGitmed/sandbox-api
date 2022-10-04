var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
export class Template {
}
_a = Template;
Template.get = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('get');
    return 'get';
});
Template.create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('create');
    return 'create';
});
Template.update = (uuid, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('update');
    return 'update';
});
Template.destroy = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('delete');
    return 'delete';
});
