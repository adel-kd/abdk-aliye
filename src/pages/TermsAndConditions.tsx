import { FileText } from "lucide-react";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-amber-600 text-white py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <FileText className="mx-auto w-14 h-14 mb-5" />

                    <h1 className="text-4xl md:text-5xl font-black">
                        Terms & Conditions
                    </h1>

                    <p className="mt-4 text-amber-100">
                        Last updated: July 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            1. Acceptance of Terms
                        </h2>

                        <p className="text-gray-600 leading-8">
                            By accessing or using the ABDK Music School & Serenad
                            website, booking an event, or enrolling in our music
                            academy, you agree to these Terms & Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            2. Services
                        </h2>

                        <p className="text-gray-600 leading-8">
                            We provide professional music education, live acoustic
                            performances, surprise serenades, private events, and
                            entertainment services. Availability of services depends
                            on scheduling and confirmation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            3. Bookings
                        </h2>

                        <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                            <li>Submitting a booking request does not guarantee availability.</li>
                            <li>Bookings become confirmed only after approval by our team.</li>
                            <li>Clients are responsible for providing accurate event information.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            4. Payments
                        </h2>

                        <p className="text-gray-600 leading-8">
                            Where applicable, payment details and schedules will be
                            communicated during the booking process. Some services may
                            require advance payment or a deposit before confirmation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            5. Cancellations & Rescheduling
                        </h2>

                        <p className="text-gray-600 leading-8">
                            If you need to cancel or reschedule an event or lesson,
                            please contact us as early as possible. We will make every
                            reasonable effort to accommodate changes, subject to
                            availability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            6. Music Academy
                        </h2>

                        <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                            <li>Students are expected to attend lessons on time.</li>
                            <li>Respectful behavior is required during classes.</li>
                            <li>Lesson schedules may occasionally change due to unforeseen circumstances.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            7. Intellectual Property
                        </h2>

                        <p className="text-gray-600 leading-8">
                            All website content, photographs, videos, branding,
                            original music, and educational materials belong to
                            ABDK Music School & Serenad unless otherwise stated.
                            They may not be copied, reproduced, or distributed without
                            prior written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            8. Limitation of Liability
                        </h2>

                        <p className="text-gray-600 leading-8">
                            While we strive to provide exceptional service, ABDK Music
                            School & Serenad shall not be liable for indirect,
                            incidental, or consequential damages arising from the use
                            of our services or website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            9. Changes to These Terms
                        </h2>

                        <p className="text-gray-600 leading-8">
                            We may update these Terms & Conditions from time to time.
                            Continued use of our services after updates constitutes
                            acceptance of the revised terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            10. Contact
                        </h2>

                        <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
                            <p className="font-semibold text-gray-900">
                                ABDK Music School & Serenad
                            </p>

                            <p className="mt-3 text-gray-600">
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