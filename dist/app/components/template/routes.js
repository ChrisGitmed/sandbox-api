var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { asCallBack, pick } from '../../lib/helpers.js';
import { errHandler } from '../../lib/error.js';
import router from '../../router/index.js';
import { Template } from './index.js';
const bodyPropertyList = [
    'prop1',
    'prop2',
    'prop3',
];
// Get
router.get('/template', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const [err, results] = yield asCallBack(Template.get());
    if (err)
        return errHandler(err, next, 'Template.get');
    return res.status(200).json(results);
}));
// Create
router.post('/template', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = pick(req.body, bodyPropertyList);
    const [err, resultUUID] = yield asCallBack(Template.create(payload));
    if (err)
        return errHandler(err, next, `Template.create: ${JSON.stringify(payload)}`);
    return res.status(201).json(resultUUID);
}));
// Update
router.put('/template/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { uuid } = req.params;
    const payload = pick(req.body, bodyPropertyList);
    const [err, results] = yield asCallBack(Template.update(uuid, payload));
    if (err)
        return errHandler(err, next, `Template.update: ${uuid}, ${JSON.stringify(payload)}`);
    return res.status(200).json(results);
}));
// Delete
router.delete('/template/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { uuid } = req.params;
    const [err, results] = yield asCallBack(Template.destroy(uuid));
    if (err)
        return errHandler(err, next, `Template.destroy: ${uuid}`);
    return res.status(200).json(results);
}));
export default router;
