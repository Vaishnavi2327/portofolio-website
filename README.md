# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern UI with TailwindCSS
- 📱 Fully responsive design
- ⚡ Smooth animations with Framer Motion
- 🌙 Dark/light mode support
- 📧 Contact form
- 🔗 Social links
- 📊 Skills showcase
- 🚀 Project portfolio

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx` - Update title and metadata
- `components/Hero.tsx` - Update name, tagline, and social links
- `components/About.tsx` - Update about section content
- `components/Skills.tsx` - Update skills and proficiency levels
- `components/Projects.tsx` - Update projects with your work
- `components/Contact.tsx` - Update contact information
- `components/Footer.tsx` - Update footer information

### Adding Projects

To add new projects, edit the `projects` array in `components/Projects.tsx`:

```typescript
{
  title: 'Your Project',
  description: 'Project description',
  tech: ['React', 'Node.js', 'MongoDB'],
  image: '/path/to/image',
  github: 'https://github.com/username/repo',
  live: 'https://project-demo.com',
  featured: true
}
```

### Skills Configuration

Update the `skills` array in `components/Skills.tsx` with your skills and proficiency levels.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be deployed on various platforms:

- Vercel (Recommended)
- Netlify
- GitHub Pages
- Any platform that supports Next.js

## License

MIT License - feel free to use this template for your own portfolio!
