// TODO: move this to .env file
const version = '2.2.0';
export const baseUrl = `https://lldev.thespacedevs.com/${version}`

export const apiService = (url: string, init?: RequestInit) => fetch(`${baseUrl}/${url}`, init);