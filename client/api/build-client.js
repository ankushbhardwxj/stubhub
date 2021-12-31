import axios from 'axios';

export default ({req}) => {
	if (typeof window === 'undefined') {
		// We are on the server
		let request = axios.create({
			baseURL:
				'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
			headers: req.headers,
		});
		return request;
	} else {
		// We must be on the browser
		return axios.create({
			baseUrl: '/',
		});
	}
};

