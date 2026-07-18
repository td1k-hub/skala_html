export async function getLiveWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("서버 응답 불안정");
        
        const data = await response.json();
        
        return {
            temp: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m
        };
    } catch (error) {
        console.error("API 모듈 에러:", error);
        return null;
    }
}