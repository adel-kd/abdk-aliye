import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-amber-600 text-white py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <ShieldCheck className="mx-auto w-14 h-14 mb-5" />
                    <h1 className="text-4xl md:text-5xl font-black">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-amber-100">
                        Last updated: July 2026
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-16">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            1. Introduction
                        </h2>
                        <p className="text-gray-600 leading-8">
                            ABDK Music School & Serenad values your privacy. This
                            Privacy Policy explains how we collect, use, and protect
                            your personal information when you use our website,
                            book performances, or enroll in our music programs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            2. Information We Collect
                        </h2>

                        <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Event booking information</li>
                            <li>Music academy registration details</li>
                            <li>Messages you send through our contact forms</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            3. How We Use Your Information
                        </h2>

                        <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                            <li>Process event bookings.</li>
                            <li>Manage music academy registrations.</li>
                            <li>Respond to inquiries.</li>
                            <li>Improve our services.</li>
                            <li>Communicate important booking updates.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            4. Data Protection
                        </h2>

                        <p className="text-gray-600 leading-8">
                            We use reasonable administrative and technical measures to
                            protect your personal information from unauthorized access,
                            disclosure, or misuse.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            5. Information Sharing
                        </h2>

                        <p className="text-gray-600 leading-8">
                            We do not sell, rent, or trade your personal information.
                            Your information is only used to provide our services unless
                            disclosure is required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            6. Cookies
                        </h2>

                        <p className="text-gray-600 leading-8">
                            Our website may use cookies or similar technologies to
                            improve user experience and website performance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            7. Your Rights
                        </h2>

                        <p className="text-gray-600 leading-8">
                            You may request access, correction, or deletion of your
                            personal information by contacting us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            8. Contact Us
                        </h2>

                        <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
                            <p className="text-gray-700">
                                <strong>ABDK Music School & Serenad</strong>
                            </p>

                            <p className="mt-2 text-gray-600">
                                Phone: +251 92 311 8288
                            </p>

                            <p className="text-gray-600">
                                Phone: +251 98 742 8747
                            </p>

                            <p className="text-gray-600">
                                Telegram: @abdkmusic
                            </p>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    );
}