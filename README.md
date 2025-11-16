# Nuclear Pest Control Goa - Website

Professional pest control services website built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern, Responsive Design** - Mobile-first approach with beautiful animations
- **Fast Performance** - Optimized with Next.js 14 and App Router
- **SEO Optimized** - Complete meta tags, structured data, and sitemap
- **Contact Form** - Integrated form with validation
- **WhatsApp Integration** - Direct WhatsApp contact buttons
- **Smooth Animations** - Framer Motion for engaging user experience

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NULCEAR PEST GOA
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional, for email functionality):
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Email Setup (Optional)

To enable email notifications from the contact form:

1. Uncomment the email code in `app/api/contact/route.js`
2. Set up your email credentials in `.env.local`
3. For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833)

### WhatsApp Number

Update the WhatsApp number in:
- `app/components/Navbar.js`
- `app/components/Hero.js`
- `app/components/FAQ.js`
- `app/components/Contact.js`

Replace `919876543210` with your actual WhatsApp number (include country code).

## 📱 Sections

1. **Hero** - Full-screen hero with CTA buttons
2. **About** - Company information and features
3. **Services** - Pest control services in grid layout
4. **Statistics** - Key metrics and achievements
5. **Certifications** - Licenses and compliance
6. **Testimonials** - Customer reviews
7. **FAQ** - Frequently asked questions with accordion
8. **Contact** - Contact form and information
9. **Footer** - Links and company details

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:
- Primary color: Green (#22c55e)
- Dark color: Navy/Black (#0f172a)

### Content

All content is in the respective component files in `app/components/`.

### Images

Replace placeholder images in:
- `app/components/Hero.js` - Hero background image

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click
4. Add environment variables if using email

### Manual Build

```bash
npm run build
npm run start
```

## 📊 Performance

- Lighthouse Score Target: 90+
- Mobile-first responsive design
- Optimized images and lazy loading
- Minimal JavaScript bundle

## 📝 SEO

- Meta tags configured in `app/layout.js`
- Semantic HTML structure
- Alt tags on images
- Structured data ready

## 🔒 Security

- Form validation on client and server
- Environment variables for sensitive data
- No hardcoded credentials

## 📄 License

© 2024 Nuclear Pest Control – Proprietor: Monali Jadhav – Goa, India

## 🤝 Support

For support, contact:
- Email: info@nuclearpestgoa.in
- Phone: +91 98765 43210
- WhatsApp: +91 98765 43210

---

**Built with ❤️ using Next.js and Tailwind CSS**
