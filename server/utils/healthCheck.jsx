export const checkHealth = async () => {
    try {
        const response = await fetch('/health');
        if (response.ok) {
        } else {
            console.error('Applicatie is niet beschikbaar');
        }
    } catch (error) {
        console.error('Fout bij het controleren van de beschikbaarheid:', error);
    }
};