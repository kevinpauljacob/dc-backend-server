import { Router } from 'express';
import { addNFTData, getNFTData } from './controllers/nfts.controller';

const router = Router();

router.get('/api/nfts', getNFTData);
router.post('/api/nfts', addNFTData); 

export default router;
