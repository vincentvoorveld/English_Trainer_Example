# Business English Coach Landing Page

## Overview

This is a modern landing page application for Sarah Mitchell, a Business English coach offering professional language training services. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase coaching services and capture leads through a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives for accessibility and consistency
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling and deployment

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (via Neon serverless)
- **Schema**: Type-safe database schema with Zod integration
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling to sections
- **Hero Section**: Main call-to-action with consultation booking
- **About Section**: Coach biography and credentials
- **Benefits Section**: Value proposition for business English training
- **Training Section**: Service descriptions and learning options
- **Testimonials**: Client success stories and reviews
- **Contact Form**: Lead capture with form validation
- **Footer**: Additional navigation and social links

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route setup for API endpoints
- **Error Handling**: Centralized error middleware
- **Development Tools**: Vite integration for hot reloading

### UI Component Library
- Comprehensive shadcn/ui component library
- Form components (Input, Textarea, Select, Button)
- Layout components (Card, Dialog, Sheet)
- Navigation components (Dropdown, Navigation Menu)
- Feedback components (Toast, Alert)

## Data Flow

### Client-Side Data Flow
1. User interactions trigger form submissions or navigation
2. React Hook Form handles form validation using Zod schemas
3. TanStack Query manages API calls and caching
4. Toast notifications provide user feedback

### Server-Side Data Flow
1. Express middleware handles request logging and JSON parsing
2. Routes process API requests (currently minimal implementation)
3. Storage interface provides data persistence abstraction
4. Error middleware handles exceptions and responses

### Database Schema
- **Users Table**: Basic user model with username and password
- **Type Safety**: Drizzle generates TypeScript types from schema
- **Validation**: Zod schemas for insert operations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Tailwind CSS
- **Utilities**: clsx for conditional classes, date-fns for date handling
- **Development**: Vite, TypeScript, PostCSS

### Backend Dependencies
- **Server**: Express.js, HTTP server creation
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Build Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Backend bundling for production
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with auto-restart on file changes
- **Database**: PostgreSQL connection via environment variables
- **Integration**: Vite proxy setup for API calls

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend from `dist/public`
- **Environment**: Production configuration via NODE_ENV

### GitHub Pages Deployment
- **Static Build**: Static files copied to project root for GitHub Pages
- **GitHub Actions**: Automated deployment workflow configured
- **Build Command**: `npm run build` creates production-ready static site
- **Deployment Files**: `index.html`, `assets/` folder, and static resources in root

### Database Management
- **Schema Changes**: Drizzle Kit push command for schema updates
- **Migrations**: Generated migration files in `./migrations`
- **Connection**: Environment variable configuration for database URL

### Configuration Files
- **TypeScript**: Shared config for client, server, and shared code
- **Tailwind**: Configured for client source files
- **Vite**: Custom configuration with path aliases and plugins
- **Package.json**: Scripts for development, building, and deployment