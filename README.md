# Academic Homepage

A React-based academic homepage clone with a clean, professional design. This project provides a customizable template for creating your own academic personal website.

## Features

- **Two-column layout**: Profile sidebar with main content area
- **Responsive design**: Works on desktop, tablet, and mobile devices
- **Easy customization**: All content is stored in a JSON file
- **Modern React**: Built with React 18 and functional components
- **CSS Modules**: Scoped styling for maintainability
- **Semantic HTML**: Accessible and SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Customize your content by editing `src/data/content.json`:
   - Update personal information (name, title, bio)
   - Add your contact links (email, LinkedIn, GitHub, Google Scholar)
   - Update research areas and publications
   - Add your news items
   - Update education and experience sections

3. Add your profile image:
   - Place your profile photo at `public/images/profile.jpg`
   - Recommended size: 200x200px or larger (square aspect ratio)
   - The image will be automatically cropped to a circle

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

## Customization Guide

### Updating Content

All content is stored in `src/data/content.json`. Here's what you can customize:

#### Personal Information
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio text here..."
  }
}
```

#### Contact Links
```json
{
  "contact": {
    "location": "Your Location",
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "googleScholar": "https://scholar.google.com/citations?user=yourid"
  }
}
```

#### Research Areas
```json
{
  "research": [
    {
      "title": "Your Research Area",
      "publications": ["Publication 1", "Publication 2"]
    }
  ]
}
```

#### News Items
```json
{
  "news": [
    {
      "date": "Month Year",
      "content": "Your news content here",
      "links": []
    }
  ]
}
```

#### Publications
```json
{
  "publications": [
    {
      "year": "2025",
      "items": [
        {
          "id": 1,
          "title": "Publication Title",
          "authors": "Author 1, Author 2",
          "venue": "Conference/Journal Name"
        }
      ]
    }
  ]
}
```

#### Education
```json
{
  "education": [
    {
      "degree": "Degree Name",
      "period": "Start - End",
      "institution": "Institution Name",
      "address": "Institution Address",
      "details": "Additional details"
    }
  ]
}
```

#### Experiences
```json
{
  "experiences": [
    {
      "title": "Position Title",
      "period": "Start - End",
      "organization": "Organization Name",
      "location": "Location",
      "details": "Additional details"
    }
  ]
}
```

### Styling

Styles are organized using CSS Modules in the `src/styles/` directory:
- `App.module.css`: Main app layout
- `Header.module.css`: Navigation header
- `Sidebar.module.css`: Profile sidebar
- `MainContent.module.css`: Main content area
- `global.css`: Global styles

You can customize colors, fonts, spacing, and layout by editing these files.

### Adding New Sections

To add a new section:

1. Add the data to `src/data/content.json`
2. Import and use the `Section` component in `MainContent.js`
3. Add corresponding styles in `MainContent.module.css`

## Project Structure

```
home_page/
├── public/
│   ├── index.html
│   └── images/
│       └── profile.jpg (your profile image)
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── MainContent.js
│   │   ├── Section.js
│   │   └── NewsItem.js
│   ├── data/
│   │   └── content.json (all your content)
│   ├── styles/
│   │   ├── App.module.css
│   │   ├── Header.module.css
│   │   ├── Sidebar.module.css
│   │   ├── MainContent.module.css
│   │   └── global.css
│   ├── utils/
│   │   └── icons.js (social media icons)
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/home_page",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and academic use.

## Credits

This homepage template is inspired by academic personal websites and designed to be clean, professional, and easy to customize.

