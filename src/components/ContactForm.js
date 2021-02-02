import React, {useState} from 'react'

const ContactForm = () => {
    const [confirmMessage, setConfirmMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        let myForm = document.getElementById('contact');
        let formData = new FormData(myForm)
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).then(() => {
            console.log('Form successfully submitted')
            setConfirmMessage(true)
        }).catch((error) =>
          alert(error))
      }

    return(
        <>
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
    {confirmMessage && (
    <div className="columns is-centered">
        <div className="column is-half">
            <div className="notification is-success">
                <button className="delete" onClick={() => setConfirmMessage(false)}></button>
                 Message received! We'll get back to you as soon as possible!
            </div>
        </div>
    </div>
    )}
    </>
    )
}
export default ContactForm

// {confirmMessage && (
//     <div className="columns is-centered">
//         <div className="column is-half">
//             <div className="notification is-success">
//                 <button className="delete" onClick={() => setConfirmMessage(true)}></button>
//                  Message received! We'll get back to you as soon as possible!
//             </div>
//         </div>
//     </div>
//     )}