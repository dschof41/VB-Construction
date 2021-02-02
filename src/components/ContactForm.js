import React, {useState} from 'react'

const ContactForm = () => {
    const [formMessage, setFormMessage] = useState('hidden');

    const handleSubmit = (e) => {
        e.preventDefault()
        let contactForm = document.getElementById('contact');
        let formData = new FormData(contactForm)
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).then(() => {
            setFormMessage('success')
            contactForm.reset()
            console.log('Form successfully submitted')
        }).catch((error) => {
            setFormMessage('error')
            console.log('Form submission error')
            alert(error)
            }
        )
    }

    return(
        <>
        <div className="columns">
            <div className="column">
                <form
                name="contact"
                id="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" />
                        </label>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={'name'}>
                        Your name
                        </label>
                        <div className="control">
                        <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            id={'name'}
                            required={true}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={'email'}>
                        Email
                        </label>
                        <div className="control">
                        <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            id={'email'}
                            required={true}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={'message'}>
                        Message
                        </label>
                        <div className="control">
                        <textarea
                            className="textarea"
                            name={'message'}
                            id={'message'}
                            required={true}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-link" type="submit">
                        Send
                        </button>
                    </div>
                </form>
        </div>
        </div>
        {formMessage === 'success' && (
        <div className="columns is-centered">
            <div className="column is-half">
                <div className="notification is-success">
                    <button className="delete" onClick={() => setFormMessage('hidden')}></button>
                    Message received! We'll get back to you as soon as possible!
                </div>
            </div>
        </div>
        )}
        {formMessage === 'error' && (
        <div className="columns is-centered">
            <div className="column is-half">
                <div className="notification is-danger">
                    <button className="delete" onClick={() => setFormMessage('hidden')}></button>
                    There was an error sending your message, please try again soon or call us at <a href="tel:555-123-4567">555-123-4567</a>
                </div>
            </div>
        </div>
        )}
    </>
    )
}
export default ContactForm
