import { gasTenderService } from "./index.js";

class MainService {
	constructor() {}

	async getNewGasTenders() {
		const previous = await gasTenderService.getGasTenders();
		const latest = await gasTenderService.getLatestGasTenders();
		let newGasTenders = [];
		console.log({ previous });
		console.log(latest[0]);

		if (true) {
			const previousGasTenders = previous;
			const latestGasTenders = latest;

			if (previousGasTenders.length === 0) {
				newGasTenders = latestGasTenders;
			} else {
				latestGasTenders.forEach((latestGasTender) => {
					const found = previousGasTenders.find(
						(previousGasTender) =>
							previousGasTender.date === latestGasTender.date
					);
					if (!found) {
						newGasTenders.push(latestGasTender);
					}
				});
			}
		}

		return newGasTenders;
	}
}

export default MainService;
