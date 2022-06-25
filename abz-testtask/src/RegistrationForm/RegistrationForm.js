import './RegistrationForm.scss'

export default function RegistrationForm() {
  return (
    <>
      <div>
        <footer>
          <h2 className='registration-title'>Working with POST request</h2>
          <form>
            <input></input>
            <input></input>
            <input></input>
            <p>+38 (XXX) XXX - XX - XX</p>
            <p>Select your position</p>
            <label>
              <input
                type="radio"
                name="position"
                value="frontend developer"
                checked
              />
              Frontend developer
            </label>
            <label>
              <input
                type="radio"
                name="position"
                value="backend developer"
                checked
              />
              Backend developer
            </label>
            <label>
              <input type="radio" name="position" value="designer" checked />
              Designer
            </label>
            <label>
              <input type="radio" name="position" value="qa" checked />
              QA
            </label>
            {/* upload photo */}
            <button type="submit">Sign up</button>
          </form>
        </footer>
      </div>
    </>
  );
}
