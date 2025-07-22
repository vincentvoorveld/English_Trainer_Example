# Business English Coach - Sarah Mitchell

A professional static website for Business English coaching services.

## Features

- **Modern Landing Page**: Clean, professional design with clear call-to-action
- **About Section**: Coach credentials and experience showcase
- **Benefits Section**: Why Business English matters for professionals
- **Training Details**: How the coaching works and program options
- **Client Testimonials**: Success stories from previous clients
- **Contact Form**: Easy booking for free consultations
- **Responsive Design**: Works perfectly on desktop and mobile devices

## GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. **Enable GitHub Pages**: 
   - Go to repository Settings > Pages
   - Set Source to "GitHub Actions"

2. **Automatic Deployment**: 
   - The site automatically builds and deploys when you push to the main branch
   - Uses GitHub Actions workflow in `.github/workflows/deploy.yml`

3. **Custom Domain** (Optional):
   - Add your domain to the `CNAME` file
   - Configure DNS settings with your domain provider

### Local Development:

```bash
npm install
npm run dev
```

### Building for Production:

```bash
npm run build
```

The built static files will be in the `dist/public` directory.

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for building and development
- **Shadcn/ui** component library
- **React Hook Form** with Zod validation
- **Responsive design** with mobile-first approach

## Contact

For questions about the coaching services, visit the contact form on the website or reach out directly.

---

Built with ❤️ for professional communication excellence.