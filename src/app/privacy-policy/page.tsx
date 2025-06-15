
import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - SR Fitness',
  description: 'Read the SR Fitness Privacy Policy to understand how we collect, use, and protect your personal information.',
  robots: 'noindex, nofollow', // Often good for legal pages if not primary content
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-lg max-w-4xl mx-auto text-foreground">
        <p>
          Welcome to SR Fitness. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">1. Information We Collect (Placeholder)</h2>
        <p>
          As a placeholder, we currently do not collect extensive personal information through this website. If you use features like the contact form or AI meal planner:
        </p>
        <ul>
          <li>Contact Form: We may collect your name, email address, and message content.</li>
          <li>Meal Planner: Information you provide for plan generation is processed by our AI and may be temporarily stored to display your plan but is not persistently linked to an identifiable user account on our servers for this placeholder version.</li>
        </ul>
        <p>
          In a full application with user accounts, we would collect information necessary for account creation, management, and service provision (e.g., email, password, fitness data you choose to share).
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">2. How We Use Your Information (Placeholder)</h2>
        <p>
          Placeholder information is used as follows:
        </p>
        <ul>
          <li>To respond to your inquiries via the contact form.</li>
          <li>To generate and display your meal plan.</li>
          <li>To operate and maintain the website.</li>
        </ul>
        <p>
          In a full application, information would be used to personalize your experience, provide services, communicate with you, and improve our offerings.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">3. Will Your Information Be Shared? (Placeholder)</h2>
        <p>
          We do not sell or share your personal information with third parties for marketing purposes in this placeholder version. AI-generated content (like meal plans) is processed through AI service providers (e.g., Google AI via Genkit), subject to their terms and privacy policies.
        </p>
        <p>
          In a full application, sharing would be limited to essential service providers under strict confidentiality agreements, or as required by law.
        </p>
        
        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">4. Data Security (Placeholder)</h2>
        <p>
          We aim to protect your personal information through a system of organizational and technical security measures. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">5. Your Privacy Rights (Placeholder)</h2>
        <p>
            Depending on your location, you may have certain rights regarding your personal information. In a full application, you would typically be able to access, update, or delete your account information.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">6. Updates to This Policy (Placeholder)</h2>
        <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">7. Contact Us (Placeholder)</h2>
        <p>
            If you have questions or comments about this policy, you may email us at [Placeholder Email: privacy@srfitness.com] or by post to:
        </p>
        <p>
            SR Fitness<br />
            [Placeholder Address Line 1]<br />
            [Placeholder Address Line 2]<br />
            [Placeholder City, State, Zip]
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
            <em>This is a placeholder privacy policy. In a real-world application, this document would need to be comprehensive, legally reviewed, and accurately reflect all data processing activities.</em>
        </p>
      </div>
    </div>
  );
}
