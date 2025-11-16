# Deployment Guide - Nuclear Pest Control Goa

## 🚀 Quick Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier works)

### Step-by-Step Deployment

#### 1. Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Nuclear Pest Control website"

# Add remote repository
git remote add origin <your-github-repo-url>

# Push to GitHub
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

**Option B: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

#### 3. Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `nuclearpestgoa.in`
4. Follow DNS configuration instructions
5. Add these DNS records at your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 4. Environment Variables (Optional)

If using email functionality:

1. Go to project "Settings" → "Environment Variables"
2. Add:
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASS` = your-app-password

#### 5. SSL Certificate

Vercel automatically provisions SSL certificates for all domains.
Your site will be available on HTTPS within minutes.

## 📊 Post-Deployment Checklist

### SEO Setup

- [ ] Submit sitemap to Google Search Console
  - URL: `https://nuclearpestgoa.in/sitemap.xml`
  
- [ ] Verify domain ownership in Google Search Console

- [ ] Set up Google Analytics
  - Add GA4 tag to `app/layout.js`

- [ ] Test mobile responsiveness
  - Use Google Mobile-Friendly Test

- [ ] Check page speed
  - Run Lighthouse audit
  - Target score: 90+

### Google Business Profile

- [ ] Create/claim Google Business listing
- [ ] Add business information:
  - Name: Nuclear Pest Control
  - Address: Goa, India
  - Phone: +91 98765 43210
  - Website: https://nuclearpestgoa.in
  - Categories: Pest Control Service

### Local SEO

- [ ] Submit to local directories:
  - JustDial
  - Sulekha
  - IndiaMART
  - Yellow Pages

- [ ] Create social media profiles:
  - Facebook Business Page
  - Instagram Business
  - LinkedIn Company Page

### Testing

- [ ] Test contact form submission
- [ ] Test WhatsApp links
- [ ] Test all navigation links
- [ ] Test on multiple devices:
  - Desktop (Windows/Mac)
  - Mobile (iOS/Android)
  - Tablet
- [ ] Test different browsers:
  - Chrome
  - Firefox
  - Safari
  - Edge

### Performance Optimization

- [ ] Enable Vercel Analytics
- [ ] Monitor Core Web Vitals
- [ ] Check image optimization
- [ ] Verify caching is working

## 🔧 Updating the Website

### Method 1: Git Push (Recommended)

```bash
# Make your changes
# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push

# Vercel will automatically deploy
```

### Method 2: Vercel CLI

```bash
# Make changes
# Deploy directly
vercel --prod
```

## 📱 WhatsApp Configuration

Update these files with actual WhatsApp number:
- `app/components/Navbar.js` - Line 71
- `app/components/Hero.js` - Line 44
- `app/components/Services.js` - Line 106
- `app/components/FAQ.js` - Line 94
- `app/components/Contact.js` - Line 109

Replace `919876543210` with format: `91XXXXXXXXXX` (country code + number)

## 📧 Email Configuration

To enable contact form emails:

1. Uncomment email code in `app/api/contact/route.js`
2. Set up Gmail App Password:
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Generate App Password
3. Add to Vercel Environment Variables
4. Redeploy

## 🔍 SEO Optimization Tasks (30 Days)

### Week 1-2: On-Page SEO
- [x] Meta tags implemented
- [x] Sitemap created
- [x] Robots.txt configured
- [ ] Schema markup (add LocalBusiness schema)
- [ ] Alt tags for all images
- [ ] Internal linking structure

### Week 3-4: Off-Page SEO
- [ ] Create 10+ local backlinks
- [ ] Submit to 20+ directories
- [ ] Create blog content (3-5 articles)
- [ ] Start social media posting
- [ ] Monitor Google Analytics
- [ ] Track keyword rankings

### Ongoing
- [ ] Weekly blog posts
- [ ] Social media updates
- [ ] Review management
- [ ] Performance monitoring
- [ ] Competitor analysis

## 📞 Support

For deployment issues or questions:
- Email: pranjulrathour@gmail.com
- Check Vercel documentation: https://vercel.com/docs

---

**Deployment prepared by:** Pranjul Rathour  
**Date:** November 2024
