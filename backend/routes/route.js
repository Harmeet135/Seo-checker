import express from 'express';
import {generatereq , createreq} from '../controllers/seo.js';

const router = express.Router();

router.get('/:id' , generatereq);
router.post('/' , createreq);

export default router;