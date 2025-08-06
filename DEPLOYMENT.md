# PitchPal Deployment Guide

## Deploying to Vercel

### Prerequisites
1. A Vercel account (sign up at https://vercel.com)
2. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Step 1: Connect Your Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Select the repository containing your PitchPal project

### Step 2: Configure Environment Variables
In your Vercel project settings, add these environment variables:

#### Required Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

### Step 3: Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Step 4: Deploy
1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your app will be live at the provided URL

### Step 5: Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## Environment Setup

### Supabase Setup
1. Create a Supabase project at https://supabase.com
2. Get your project URL and anon key from Settings > API
3. Add them to Vercel environment variables

### Clerk Authentication Setup
1. Create a Clerk application at https://clerk.com
2. Get your publishable and secret keys
3. Add them to Vercel environment variables

### OpenAI API Setup
1. Get an API key from https://platform.openai.com
2. Add it to Vercel environment variables

### ElevenLabs API Setup
1. Get an API key from https://elevenlabs.io
2. Add it to Vercel environment variables

## Post-Deployment Checklist

- [ ] Test all API endpoints
- [ ] Verify authentication works
- [ ] Check that video/audio generation works
- [ ] Test the complete user flow
- [ ] Set up monitoring (optional)

## Troubleshooting

### Common Issues:
1. **Build fails**: Check that all dependencies are in package.json
2. **API errors**: Verify all environment variables are set correctly
3. **Authentication issues**: Ensure Clerk keys are properly configured
4. **CORS errors**: Check that your API routes are properly configured

### Support:
- Check Vercel logs in the dashboard
- Review build logs for specific errors
- Ensure all environment variables are set correctly 