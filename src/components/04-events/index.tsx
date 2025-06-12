import { useState } from "react";


// When you provide the exact HTML element type in the angle brackets (<>), like HTMLInputElement in case, you're telling TypeScript exactly what kind of element the event is coming from.


function Events () {
    const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
    return(
        <>
        <section>
      <h2>events example</h2>
      <form className='form'>
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
        </>
    )
}
export default Events;