import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams, setSuccess, setError) => {
    try {
        const hasSent = localStorage.getItem('hasSent');

        if (!hasSent) {
            const response = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            setSuccess('Message Sent Successfully.');
            localStorage.setItem('hasSent', 1);
            console.log(response);
            return true;
        }
        if(hasSent){
            setError("You have already sent a message.");
        }

    } catch (error) {
        setError("Something went wrong");
        console.log(error);
        return false;
    }
};