import Logo from '../images/svg/Logo.svg'
import './AppBar.scss'
export default function AppBar() {
  return (
    <>
      
      <header className='header'>
        <div className='container header-container'>
          <img src={Logo} alt='Logo' width='104px' height='26px'></img>
          <ul className='sign-list'>
            <li className='sign-item'>
              <button className='button'>Users</button>
            </li>
            <li className='sign-item'>
              <button className='button'>Sing up</button>
            </li>
          </ul>
          </div>
        </header>
      
    </>
  );
}
