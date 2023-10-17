import { Request, Response } from 'express';
import NFTModel, { NFT } from '../models/nfts.model';

export const getNFTData = async (req: Request, res: Response) => {
  try {
    const nftData: NFT[] = await NFTModel.find({}, { _id: 0 }).lean();
    const nft = nftData.map((item) => item.nft);
    res.json({nfts: nft});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addNFTData = async (req: Request, res: Response) => {
    try {
      const { newNFTData } = req.body;
  
      const nftData = new NFTModel({ nft: newNFTData });
      await nftData.save();
  
      res.status(201).json({ message: 'Data added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  