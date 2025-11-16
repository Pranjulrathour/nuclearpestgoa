import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, email, service, message } = body

    // Validate required fields
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically send an email using nodemailer or a service like SendGrid
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // If you want to send emails, uncomment and configure this section:
    /*
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@nuclearpestgoa.in',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    */

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
