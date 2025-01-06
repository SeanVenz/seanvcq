import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams, setSuccess, setError) => {
    try {
        const response = await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        setSuccess('Message Sent Successfully.');
        console.log(response);
        return true;
    } catch (error) {
        setError("Failed to send Message.");
        console.log(error);
        return false;
    }
};