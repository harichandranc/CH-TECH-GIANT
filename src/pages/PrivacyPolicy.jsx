import PageBanner from "../components/PageBanner";
import SectionWrapper from "../components/SectionWrapper";

const sections = [
  {
    title: "Company Information",
    content: `
CH TECH GIANT (OPC) PRIVATE LIMITED is a technology company based in Davanagere, Karnataka, India.

We specialize in:
• App Development
• Web Development
• Software Development
• Game Development
• IT Solutions & Digital Services

Website: https://chtechgiant.com
Email: info@chtechgiant.com
Phone: +91 9980785020
    `,
  },
  {
    title: "Information We Collect",
    content: `
We may collect personal and technical information when you interact with our website or services.

This may include:
• Name
• Email address
• Phone number
• Business details
• Project requirements
• IP address
• Browser information
• Device information
• Website analytics
    `,
  },
  {
    title: "How We Use Your Information",
    content: `
We use collected information to:
• Provide and improve our services
• Respond to inquiries and support requests
• Deliver project updates
• Improve website performance
• Maintain website security
• Prevent unauthorized activities

We do not sell or rent your personal information to third parties.
    `,
  },
  {
    title: "Third-Party Services",
    content: `
Our website may include embedded content or integrations from third-party platforms such as:
• YouTube
• Google Services
• Social Media Platforms
• Analytics Providers

These services may collect data independently according to their own privacy policies.
    `,
  },
  {
    title: "Data Security",
    content: `
CH TECH GIANT uses industry-standard security measures to protect user data from unauthorized access, misuse, disclosure, or destruction.

However, no online platform can guarantee complete security.
    `,
  },
  {
    title: "Data Retention",
    content: `
We retain user information only as long as necessary for:
• Service delivery
• Legal compliance
• Business records
• Security purposes

Users may request deletion of their data by contacting us.
    `,
  },
  {
    title: "Your Rights",
    content: `
You may have the right to:
• Access your personal data
• Correct inaccurate information
• Request deletion of data
• Withdraw consent
• Request a copy of stored data

To exercise these rights, contact us at:
info@chtechgiant.com
    `,
  },
  {
    title: "External Links",
    content: `
Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites.
    `,
  },
  {
    title: "Children's Privacy",
    content: `
Our services are not directed toward children under the age of 13. We do not knowingly collect personal information from children.
    `,
  },
  {
    title: "Policy Updates",
    content: `
We may update this Privacy Policy periodically to reflect:
• Legal changes
• Service updates
• Security improvements
• Business changes

Updated versions will be posted on this page.
    `,
  },
];

function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen">
      <PageBanner
        title="Privacy Policy"
        subtitle="Your privacy and data security are important to us."
      />

      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm tracking-wide uppercase">
              Last Updated • May 23, 2026
            </p>
          </div>

          <div className="space-y-5">
            {sections.map((section) => (
              <div
                key={section.title}
                className="
                  rounded-2xl
                  border border-zinc-800
                  bg-zinc-900/70
                  p-6 md:p-8
                  transition duration-300
                  hover:border-cyan-500/30
                "
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {section.title}
                </h2>

                <p className="text-gray-300 leading-7 whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-8
              rounded-2xl
              border border-cyan-500/20
              bg-cyan-500/5
              p-8
              text-center
            "
          >
            <h2 className="text-3xl font-bold mb-5 text-white">
              Contact Us
            </h2>

            <div className="space-y-2 text-gray-300">
              <p>CH TECH GIANT (OPC) PRIVATE LIMITED</p>
              <p>Davanagere, Karnataka - 577001</p>
              <p>+91 9980785020</p>
              <p>info@chtechgiant.com</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default PrivacyPolicy;