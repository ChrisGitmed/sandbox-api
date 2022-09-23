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
router.get(
  '/template',
  async (req, res, next) => {
    const [err, results] = await asCallBack(Template.get());
    if (err) return errHandler(err, next, 'Template.get');
    return res.status(200).json(results);
  },
);

// Create
router.post(
  '/template',
  async (req, res, next) => {
    const payload = pick(req.body, bodyPropertyList);
    const [err, resultUUID] = await asCallBack(Template.create(payload));
    if (err) return errHandler(err, next, `Template.create: ${JSON.stringify(payload)}`);
    return res.status(201).json(resultUUID);
  },
);

// Update
router.put(
  '/template/:uuid',
  async (req, res, next) => {
    const { uuid } = req.params;
    const payload = pick(req.body, bodyPropertyList);
    const [err, results] = await asCallBack(Template.update(uuid, payload));
    if (err) return errHandler(err, next, `Template.update: ${uuid}, ${JSON.stringify(payload)}`);
    return res.status(200).json(results);
  },
);

// Delete
router.delete(
  '/template/:uuid',
  async (req, res, next) => {
    const { uuid } = req.params;
    const [err, results] = await asCallBack(Template.destroy(uuid));
    if (err) return errHandler(err, next, `Template.destroy: ${uuid}`);
    return res.status(200).json(results);
  },
);


export default router;

