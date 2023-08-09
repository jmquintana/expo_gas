import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const gasTenderCollection = "gasTender";

const gasTenderSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
	},
	tender: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	volume: {
		type: Number,
		required: true,
	},
	total: {
		type: Number,
		required: true,
	},
});

gasTenderSchema.plugin(mongoosePaginate);

export const gasTenderModel = mongoose.model(
	gasTenderCollection,
	gasTenderSchema
);
