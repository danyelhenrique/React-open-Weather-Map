import axios from 'axios';

// const api = axios.create({
//     baseURL: `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=7&appid=ebf5e5843530b4f8cf4c0bd17b6b6048`
// })

export const geoLocalization = (latitude, longitude) => {
    const api = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=7&appid=ebf5e5843530b4f8cf4c0bd17b6b6048`,
    });
    return api.get();
};

export const Search = input => {
    const api = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/forecast/daily?q=${input}&units=metric&cnt=7&appid=ebf5e5843530b4f8cf4c0bd17b6b6048`,
    });
    return api.get();
};

// export default api
