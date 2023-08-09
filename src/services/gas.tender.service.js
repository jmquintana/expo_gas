import { gasTenderRepository } from "../repositories/index.js";
import axios from "axios";
import config from "../config/config.js";

class GasTenderService {
	async getGasTenders() {
		const gasTenders = await gasTenderRepository.getGasTenders();
		return gasTenders;
	}

	async getGasTender(id) {
		const gasTender = await gasTenderRepository.getGasTender(id);
		return gasTender;
	}

	async getGasTenderByDate(date) {
		const gasTender = await gasTenderRepository.getGasTenderByDate(date);
		return gasTender;
	}

	async createGasTender(gasTender) {
		const createdGasTender = await gasTenderRepository.createGasTender(
			gasTender
		);
		return createdGasTender;
	}

	async updateGasTender(id, gasTender) {
		const updatedGasTender = await gasTenderRepository.updateGasTender(
			id,
			gasTender
		);
		return updatedGasTender;
	}

	async deleteGasTender(id) {
		const deletedGasTender = await gasTenderRepository.deleteGasTender(id);
		return deletedGasTender;
	}

	async getLatestGasTenders() {
		const endpoint = config.GAS_TENDER_ENDPOINT;
		const response = await axios.get(endpoint);
		const latestGasTenders = response.data;
		return latestGasTenders;
	}
}

export default GasTenderService;
