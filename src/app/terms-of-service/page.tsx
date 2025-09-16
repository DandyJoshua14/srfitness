
import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - SR Fitness',
  description: 'Read the SR Fitness Terms of Service. Your use of our services is subject to these terms.',
  robots: 'noindex, nofollow',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-lg max-w-4xl mx-auto text-foreground">
        <p>
          Welcome to SR Fitness! These terms and conditions outline the rules and regulations for the use of SR Fitness's Website, located at [Your Website URL].
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use SR Fitness if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">1. Definitions (Placeholder)</h2>
        <p>
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">2. Use of the Website (Placeholder)</h2>
        <p>
          You are granted a limited license only for purposes of viewing the material contained on this Website. You are specifically restricted from all of the following:
        </p>
        <ul>
          <li>Publishing any Website material in any other media without prior consent.</li>
          <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
          <li>Publicly performing and/or showing any Website material.</li>
          <li>Using this Website in any way that is or may be damaging to this Website.</li>
          <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
        </ul>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">3. AI-Generated Content (Placeholder)</h2>
        <p>
            Features like the Meal Planner and Daily Fitness Tip use Artificial Intelligence (AI) to generate content. This content is provided for informational and inspirational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary changes. SR Fitness assumes no responsibility for any actions taken based on AI-generated content.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">4. User Accounts (Placeholder)</h2>
        <p>
            If user accounts are implemented, you will be responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
        </p>
        
        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">5. Limitation of Liability (Placeholder)</h2>
        <p>
            In no event shall SR Fitness, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. SR Fitness, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">6. Disclaimer (Placeholder)</h2>
        <p>
            The fitness information and AI-generated content on this website is for general informational purposes only. It is not intended as medical advice and should not be relied upon as a substitute for professional consultation with a qualified healthcare provider.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">7. Governing Law & Jurisdiction (Placeholder)</h2>
        <p>
            These Terms will be governed by and interpreted in accordance with the laws of the State/Country of [Your State/Country], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State/Country] for the resolution of any disputes.
        </p>

        <h2 className="font-headline text-2xl text-primary mt-8 mb-3">8. Changes to Terms (Placeholder)</h2>
        <p>
            SR Fitness is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
        </p>
         <p className="mt-6 text-sm text-muted-foreground">
            <em>This is a placeholder terms of service document. In a real-world application, this document would need to be comprehensive, legally reviewed, and accurately reflect all services offered and user obligations.</em>
        </p>
      </div>
    </div>
  );
}
