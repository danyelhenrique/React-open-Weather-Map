import axios from 'axios'

function getGeoLocalization() {
    const defaultLocalizaion = {
        latitude: null,
        longitude: null
    }
    navigator.geolocation.getCurrentPosition(positon => {
        defaultLocalizaion.latitude = positon.coords.latitude
        defaultLocalizaion.longitude = positon.coords.longitude
    })

    return defaultLocalizaion
}

const localization = getGeoLocalization()


const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${localization.latitude}&lon=${localization.longitude}&units=metric&cnt=7&appid=ebf5e5843530b4f8cf4c0bd17b6b6048`
})

export default api