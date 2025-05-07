# Netflix GPT

Netflix GPT is an AI-powered movie recommendation platform built with React + Vite, inspired by Netflix's user interface. This application combines the TMDB API for movie data with Google's Gemini AI API to provide personalized movie recommendations.

🔗 **Live Demo**: [Netflix GPT App](https://netflixgpt-6e513.web.app)

## 🚀 Features

- **User Authentication**: Secure login and signup functionality via Firebase Authentication
- **Movie Browsing**: Browse movies by categories (Now Playing, Popular, Top Rated, etc.)
- **AI Recommendations**: Get personalized movie suggestions using Google's Gemini AI
- **Responsive Design**: Fully responsive UI that works across devices
- **Dynamic Content**: Real-time movie data from TMDB API

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **APIs**: 
  - TMDB API (The Movie Database)
  - Google Gemini API
- **Hosting**: Firebase Hosting


## 📋 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/devansh6012/netflix-ai.git
   cd netflix-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_TMDB_KEY=your_tmdb_api_key
   VITE_FIREBASE_KEY=your_firebase_api_key
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```
   
   > Note: Vite uses the `VITE_` prefix for environment variables instead of `REACT_APP_`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔥 Firebase Deployment

This app is configured for Firebase deployment. To deploy:

1. **Install Firebase CLI** (if not already installed)
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase** (if not already initialized)
   ```bash
   firebase init
   ```
   - Select Hosting
   - Choose your project
   - Set public directory to "dist" (Vite uses "dist" instead of "build")
   - Configure as a single-page app: "Yes"

4. **Deploy**
   ```bash
   firebase deploy
   ```

## 🧠 How AI Integration Works

Netflix GPT uses Google's Gemini API to generate movie recommendations based on user inputs. When a user enters a genre, mood, or specific criteria, the application:

1. Processes the user's query
2. Sends a formatted prompt to the Gemini API
3. Receives AI-generated movie suggestions
4. Fetches detailed information about these movies from TMDB
5. Displays the personalized recommendations to the user


## 👨‍💻 Author

**Devansh Gupta**
- GitHub: [@devansh6012](https://github.com/devansh6012)
- LinkedIn: [devansh-g](https://linkedin.com/in/devansh-g)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [TMDB API](https://www.themoviedb.org/documentation/api) for providing movie data
- [Google Gemini AI](https://ai.google.dev/) for AI capabilities
- [Netflix](https://www.netflix.com) for the UI inspiration
