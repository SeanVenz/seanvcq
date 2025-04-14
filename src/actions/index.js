import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams, setSuccess, setError) => {
    try {
        const hasSent = localStorage.getItem('hasSent');

        if (!hasSent) {
            const response = await emailjs.send(
                'service_c04rq66',
                'template_qy0n03u',
                templateParams,
                'UgNkB1s1YkbynNOmM'
            );

            if (response.status === 200) {
                setSuccess('Message Sent Successfully!');
                localStorage.setItem('hasSent', 1);
                return true;
            } else {
                setError("Failed to send message. Please try again.");
                return false;
            }
        } else {
            setError("You have already sent a message recently. Please try again later.");
            return false;
        }
    } catch (error) {
        console.error("Email sending error:", error);
        if (error.text) {
            setError(`Error: ${error.text}`);
        } else {
            setError("Failed to send message. Please try again later.");
        }
        return false;
    }
};