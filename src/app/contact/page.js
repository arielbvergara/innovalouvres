export default function Contact({}) {
    return (
        <div className="p-5">
            <header class="py-8 text-center">
                <h1 class="text-4xl font-bold text-orange">Contact Us</h1>
            </header>

            <section class="mx-4 mb-8">
                <p class="text-lg">
                    We wouldd love to hear from you! Whether you have a question about our services, want to discuss a project, or
                    just want to say hello, feel free to reach out to us.
                </p>
            </section>

            <section class="mx-4 mb-8">
                <h2 class="mb-4 text-2xl font-semibold text-orange">Contact Information</h2>
                <ul class="list-disc pl-6">
                    <li><strong>Address:</strong> [Your Company Address]</li>
                    <li><strong>Email:</strong> [Your Company Email]</li>
                    <li><strong>Phone:</strong> [Your Company Phone Number]</li>
                </ul>
            </section>

            <section class="mx-4 mb-8">
                <h2 class="mb-4 text-2xl font-semibold text-orange">Get in Touch</h2>
                <p class="text-lg">Feel free to use the contact form below or reach out to us via email or phone. We will get back
                    to you as soon as possible!</p>
            </section>

            <section class="mx-4 mb-8">
                <h2 class="mb-4 text-2xl font-semibold text-orange">Contact Form</h2>
                <form action="#" method="post" class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                        <input type="text" id="name" name="name" required
                            class="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                        <input type="email" id="email" name="email" required
                            class="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div class="col-span-2 mb-4">
                        <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
                        <textarea id="message" name="message" rows="4" required
                            class="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"></textarea>
                    </div>
                    <div class="col-span-2">
                        <button type="submit"
                            class="w-full rounded-md bg-orange p-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
                            Send Message
                        </button>
                    </div>
                </form>
            </section>

            <footer class="py-8 text-center text-gray-500">
                <p>Thank you for reaching out to Your Company Name. We look forward to connecting with you!</p>
            </footer>
        </div>
    )
}