# SR Fitness - Fitness Industry Excellence Platform

A comprehensive Next.js application for the SR Fitness Awards, featuring voting, nominations, community features, and fitness industry recognition.

## 🏆 Features

### Voting & Awards
- **Interactive Voting System**: Vote for fitness trainers, coaches, and organizations
- **Multiple Award Categories**: 
  - Fitness Trainer/Coach of the Year
  - Fitness Club Coach of the Year
  - Foundation Fitness Award
  - Mental Health & Wellness Advocate
  - Community Fitness Hero of the Year
  - Corporate Wellness Champion
  - And many more...

### Community & Engagement
- **Community Messaging**: Real-time chat functionality
- **Recognition Awards**: Special recognition for professionals in specialized fields
- **Nomination System**: Online nomination forms for new award categories

### E-commerce & Services
- **Marketplace**: Fitness equipment and services
- **Personal Training**: Booking and consultation services
- **Corporate Wellness**: Business wellness programs
- **Equipment Services**: Fitness equipment sales and maintenance

### Content & Media
- **Lifestyle Magazine**: Fitness and wellness content
- **Public Speaking**: Booking speaking engagements
- **Blog Management**: Content creation and management

## 🚀 Technology Stack

- **Framework**: Next.js 14.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **AI Integration**: Google Genkit AI
- **Deployment**: Firebase Hosting

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DandyJoshua14/srfitness.git
   cd srfitness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your Firebase configuration and API keys
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard
│   ├── awards/            # Awards and voting
│   ├── community/         # Community features
│   └── ...
├── components/            # Reusable UI components
│   ├── features/          # Feature-specific components
│   ├── layout/            # Layout components
│   └── ui/                # Base UI components
├── contexts/              # React contexts
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── services/              # API and service functions
└── ai/                    # AI integration with Genkit
```

## 🎯 Key Features

### Voting System
- Secure voting with payment integration
- Multiple vote packages (10, 50, 100, 500, 1000 votes)
- Real-time vote tracking
- Contestant profiles with images and categories

### Admin Dashboard
- Vote management and analytics
- Nomination review system
- Blog and magazine content management
- Store inventory management

### AI Integration
- Voice response generation
- Fitness tip generation
- Exercise form analysis
- Speech audio generation

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Firestore Database
3. Configure Authentication
4. Set up Firebase Hosting
5. Add your configuration to `.env.local`

### Environment Variables
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase config
```

## 🚀 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Vercel
```bash
npm run build
# Deploy to Vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development**: SR Fitness Development Team
- **Design**: SR Fitness Design Team
- **AI Integration**: Google Genkit AI

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**SR Fitness** - Identifying, Recognizing & Celebrating Fitness Industry Excellence