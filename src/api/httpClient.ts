import axios, {AxiosInstance} from 'axios'

abstract class HttpClient {
	protected readonly instance: AxiosInstance

	public constructor(baseURL: string) {
		this.instance = axios.create({
			baseURL,
		})
	}
}

export default HttpClient
