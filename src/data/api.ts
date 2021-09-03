// TODO: move this to .env file
const version = '2.2.0';
export const baseUrl = `https://lldev.thespacedevs.com/${version}`;

// TODO: add global error checking
export const apiService = async (url: string, init?: RequestInit) => {
    const response = await fetch(`${baseUrl}/${url}`, init);
    return response.json();
};