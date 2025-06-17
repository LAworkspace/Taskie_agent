# Railway Deployment Guide for Taskie Landing Page

## Quick Deploy Steps

### 1. Prepare Your Code
Your project is already configured for Railway with:
- ✅ `railway.json` configuration
- ✅ `Dockerfile` for containerization
- ✅ Production build scripts in `package.json`
- ✅ Port configuration for Railway

### 2. Deploy to Railway

**Option A: GitHub Integration (Recommended)**
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Taskie landing page"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [railway.app](https://railway.app) and sign in
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will automatically detect the configuration and deploy

**Option B: Railway CLI**
1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login and deploy:
   ```bash
   railway login
   railway init
   railway up
   ```

### 3. Environment Configuration
Railway automatically sets:
- `PORT` - Your app will run on Railway's assigned port
- `NODE_ENV=production` - Enables production optimizations

### 4. Custom Domain (Optional)
- In Railway dashboard, go to your project → Settings → Domains
- Add your custom domain or use the provided `.railway.app` subdomain

## Important Notes

### Email Storage
Currently using in-memory storage (emails reset on deployment). For production:

1. **Add PostgreSQL Database:**
   - In Railway dashboard: Add → Database → PostgreSQL
   - Railway will provide `DATABASE_URL` environment variable
   - Update your code to use persistent database storage

2. **Alternative: External Database**
   - Use services like Supabase, PlanetScale, or Neon
   - Add the connection string as environment variable in Railway

### Monitoring
- Railway provides automatic monitoring and logs
- View logs in Railway dashboard → Your Project → Deployments
- Monitor email signups in real-time through the logs

### Scaling
- Railway handles automatic scaling based on traffic
- No manual configuration needed for basic use cases

## Your App URLs After Deployment
- Landing Page: `https://your-app-name.railway.app`
- Waitlist API: `https://your-app-name.railway.app/api/waitlist`
- View Emails: `https://your-app-name.railway.app/api/waitlist` (GET request)

## Support
- Railway Documentation: https://docs.railway.app
- Railway Discord: https://discord.gg/railway