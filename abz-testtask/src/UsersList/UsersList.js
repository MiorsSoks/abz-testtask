import "./UserList.scss";

export default function UsersList() {
  return (
    <>
      <section className="user-list-section">
        <div className="container user-list-container">
          <h2 className="user-list-title">Working with GET request</h2>

          <ul className="user-card-list">
            <li className="user-card-item">
              <div className="user-card">
                <img
                  className="user-avatar"
                  src="https://history-teacher.com/uploads/posts/2021-09/1632254934_historic_.jpg"
                  alt="user avatar"
                  width="70px"
                  height="70px"
                />
                <p className="user-list-text">
                  Salvador Stewart Flynn Thomas Salva...
                </p>
                <p className="user-list-text">
                  Leading specialist of the department o...
                  JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
                </p>
              </div>
            </li>
          </ul>

          <button className="button">Show more</button>
        </div>
      </section>
    </>
  );
}
