import React, { useState, useEffect, useRef } from 'react'

const FormWaveAnimation = () => {
  const emailLabel = useRef(null)
  const passwordLabel = useRef(null)

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    emailLabel.current.innerHTML = emailLabel.current.innerHTML
      .split('')
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join('')

    passwordLabel.current.innerHTML = passwordLabel.current.innerHTML
      .split('')
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join('')
  }, [])

  return (
    <div className='container'>
      <h1>Please Login</h1>
      <form>
        <div className='form-control'>
          <input
            type='text'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label ref={emailLabel}>Email</label>
        </div>

        <div className='form-control'>
          <input
            type='password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label ref={passwordLabel}>Password</label>
        </div>

        <button className='btn'>Login</button>
        <p>
          Don't have an account? <a href='#'>Register</a>
        </p>
      </form>
    </div>
  )
}

export default FormWaveAnimation
