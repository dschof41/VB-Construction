import React from 'react'

const ContactForm = () => (
    <form
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
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
)

export default ContactForm
