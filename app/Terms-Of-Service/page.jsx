import React from 'react';
import TermsOfService from '@components/TermsOfService';

const TermsOfServicePage = () => {
  return (
    <div>   
      <TermsOfService
        title="Terms of Service"
        content={`
        Last Updated: 9.18.2023
    
        Welcome to the Whir ("Platform"). These Terms of Service ("Terms") govern your use of the Platform. By accessing or using the Platform, you agree to comply with these Terms. If you do not agree with these Terms, please do not use the Platform.
    
        1. Acceptance of Terms
    
        1.1. These Terms constitute a legally binding agreement between you and Whir ("Company"). You must be at least 18 years old or have reached the legal age of majority in your jurisdiction to use the Platform.
    
        2. User Registration
    
        2.1. To access certain features of the Platform, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to keep your account information up to date.
    
        2.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
    
        3. User Conduct
    
        3.1. You agree to use the Platform in accordance with all applicable laws and regulations.
    
        3.2. You agree not to:
    
        - Violate the rights of others or infringe on intellectual property rights.
        - Harass, threaten, or discriminate against others.
        - Post harmful, offensive, or illegal content.
        - Attempt to gain unauthorized access to the Platform or its users' data.
        - Engage in spamming, phishing, or any other malicious activity.
    
        4. Content
    
        4.1. Users are solely responsible for the content they post on the Platform. Company does not endorse or assume responsibility for any user-generated content.
    
        4.2. Company reserves the right to remove or restrict access to any content that violates these Terms or is deemed inappropriate.
    
        5. Privacy
    
        5.1. Your use of the Platform is subject to our Privacy Policy, which can be found [link to Privacy Policy]. By using the Platform, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
    
        6. Termination
    
        6.1. Company reserves the right to terminate or suspend your access to the Platform at its discretion, with or without cause, and without prior notice.
    
        7. Disclaimers
    
        7.1. The Platform is provided "as is" and without warranties of any kind, either express or implied.
    
        7.2. Company does not guarantee the accuracy, reliability, or completeness of any content on the Platform.
    
        8. Limitation of Liability
    
        8.1. To the fullest extent permitted by law, Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of the Platform.
    
        9. Changes to Terms
    
        9.1. Company may update these Terms from time to time. Any changes will be posted on the Platform, and your continued use of the Platform constitutes acceptance of the updated Terms.
    
        10. Governing Law
    
        10.1. These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles.
    
        11. Contact Information
    
        11.1. For questions or concerns regarding these Terms, please contact us at [Contact Email].
      `}
      />

      {/* Other content on your page */}
    </div>
  );
};

export default TermsOfServicePage;
