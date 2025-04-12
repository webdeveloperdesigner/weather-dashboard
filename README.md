# Weather Dashboard (WD V1.0.5)

The Weather Dashboard (WD V1.0.5) is a web application that provides users with real-time weather updates and forecasts for cities worldwide. It is designed with a user-friendly interface and responsive design to ensure accessibility across devices.

---

## Features

- **Search Functionality**: Users can search for any city to view its current weather and forecast.
- **Current Weather**: Displays temperature, humidity, wind speed, and weather conditions.
- **5-Day Forecast**: Provides a detailed forecast for the next five days.
- **Search History**: Saves previously searched cities for quick access.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

---

## Technologies Used

### Client-Side
- **HTML5**: For structuring the application.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6+)**: For dynamic content and API integration.
- **React.js**: For building the user interface and managing components.

### Server-Side
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for handling API requests.
- **OpenWeatherMap API**: Integration for real-time weather data.

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/webdeveloperdesigner/weather-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-dashboard
   ```
    ```bash
   cd  client 
    
   cd server
   ```
3. Install dependencies in both:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000` in your browser to access the application.


---

## 🧪 Test the Weather API

You can test the backend API directly in your browser or using tools like Postman.

### Example API Endpoint:
```
http://localhost:5000/weather?city=CityName 
```
- Replace `CityName` with any city name to get the current weather data.
- The API uses the OpenWeatherMap service to fetch real-time weather information.

### Sample Response:
```json
{
  "city": "Hello",
  "temperature": "15°C",
  "description": "Cloudy",
  "humidity": "72%",
  "wind": "10 km/h"
}
```

> Make sure your backend server is running locally on port 5000 before testing.

---

## Usage

1. **Search for a City**: Enter the name of a city in the search bar and click the search button.
2. **View Weather Data**: The current weather and 5-day forecast will be displayed.
3. **Access Search History**: Click on a previously searched city to view its weather again.

---

## Project Structure

```
weather-dashboard/
├── client/
│   ├── public/
│   │   ├── index.html        # Main HTML file
│   │   └── favicon.ico       # Favicon
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.js            # Main React app file
│   │   ├── index.js          # React entry point
│   │   └── styles.css        # CSS for styling
│   └── assets/               # Images and other assets
├── server/
│   ├── app.js                # Express server setup
│   ├── routes/               # API routes
│   └── config/               # Configuration files
├── package.json              # Node.js dependencies
├── README.md                 # Project documentation
└── LICENSE                   # License file
```

---

## Working Details

1. **Client-Side**:
   - The user interacts with the UI to search for a city.
   - JavaScript fetches weather data from the server using API calls.

2. **Server-Side**:
   - The server receives requests from the client.
   - It fetches data from the OpenWeatherMap API and sends it back to the client.

3. **Data Flow**:
   - User Input → Client → Server → Weather API → Server → Client → Display on UI

---

## UI Instructions

- **Search Bar**: Enter a city name and press "Search".
- **Weather Display**: View current weather and forecast below the search bar.
- **History Section**: Click on a city name to reload its weather data.

---

## Version

- **Current Version**: WD V1.0.5

---
### 📊 Version Status Table

| Version       | GitHub Code | Live Website | Key Changes                                                                 |
|---------------|-------------|---------------|------------------------------------------------------------------------------|
| WD V1.0.0     | ✅ Updated  | ✅ Updated    | Initial release with basic weather dashboard, search, forecast, and UI     |
| WD V1.0.1     | ✅ Updated  | ✅ Updated    | Documented Express error handling in `Error.md`                             |
| WD V1.0.2     | ✅ Updated  | ✅ Updated    | Added more error handling (port conflict, API fetch failure)               |
| WD V1.0.3     | ✅ Updated  | ✅ Updated    | Created `Error.md`, improved server-side API error handling                |
| WD V1.0.4     | ✅ Updated  | ✅ Updated    | Integrated React.js, updated project structure, noted React loading error  |
| WD V1.0.5     | ✅ Updated  | ✅ Updated    | Improved docs, React usage in README, UI instructions, error tracking      |
| WD V1.0.6     | ❌ Not Updated | ✅ Updated | Offline/online status, geolocation fetch, mobile UI fixes, error handling  |
| WD V1.0.7     | ❌ Not Updated | 🔜 Coming Soon | Minor improvements and bug fixes (planned)                                  |
| WD V1.0.8     | ❌ Not Updated | 🔜 Coming Soon | New features and UI enhancements (planned)                                  |
| WD V1.0.9     | ❌ Not Updated | 🔜 Coming Soon | Final performance optimizations and pre-stable testing                      |
| WD V1.2.0 (Stable) | 🔜 Coming Soon | 🔜 Coming Soon | Final stable release with all planned features                              |

----

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- Inspiration from modern weather applications.
