import mongoose, { Schema, Document } from 'mongoose';

export interface NFT {
  [key: string]: string;
}

export interface NFTDocument extends Document {
  nft: NFT;
}

const NFTSchema: Schema = new Schema({
  nft: { type: Object, required: true },
});

export default mongoose.model<NFTDocument>('NFT', NFTSchema);
