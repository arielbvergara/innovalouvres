export default function Contact({}) {
    return (
        <div className="container mx-auto min-h-[--body-min-height]">
            <header className="py-8 text-center">
                <h1 className="text-4xl">Contact Us</h1>
            </header>

            <section className="mx-4 mb-8">
                <p className="text-lg">
                    We wouldd love to hear from you! Whether you have a question about our services, want to discuss a project, or
                    just want to say hello, feel free to reach out to us.
                </p>
            </section>
            <section className="mx-4 mb-8">
                {/* <h2 className="mb-4 text-2xl">Contact Us</h2> */}
                <form action="#" method="post" className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="col-span-3 mb-4 sm:col-span-1">
                        <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none" />
                    </div>
                    <div className="col-span-3 mb-4 sm:col-span-1">
                        <label for="email" className="block text-sm font-medium text-gray-700">Email*</label>
                        <input type="email" id="email" name="email" required
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none" />
                    </div>
                    <div className="col-span-3 mb-4 sm:col-span-1">
                        <label for="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                        <input type="phone" id="phone" name="phone" required
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none" />
                    </div>
                    <div className="col-span-3 mb-4">
                        <label for="message-after" className="block text-sm font-medium text-gray-700">Let us know what you are after</label>
                        <textarea id="message-after" name="message-after" rows="4" required
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none"></textarea>
                    </div>
                    <div className="col-span-3 mb-4">
                        <label for="message-size" className="block text-sm font-medium text-gray-700">Do you know the sizes of your dreamed louvre? Let us know here!</label>
                        <textarea id="message-size" name="message-size" rows="4" required
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none"></textarea>
                    </div>
                    <div className="col-span-3">
                        <button type="submit"
                            className="send-message w-full rounded-md p-2 text-white hover:bg-orange focus:bg-orange focus:outline-none">
                            Send Message
                        </button>
                    </div>
                </form>
            </section>

            <footer className="py-8 text-center text-gray-500">
                <p>Thank you for reaching out to Your Company Name. We look forward to connecting with you!</p>
            </footer>
        </div>
    )
}