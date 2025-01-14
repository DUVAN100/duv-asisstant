import axios from 'axios';

export async function getCodeSuggestion(url: string, data: any, headers: any = {}) {
    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Error en la solicitud HTTP:', error);
        throw new Error('Error en la comunicación con la API.');
    }
}
