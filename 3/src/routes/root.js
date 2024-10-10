export default function Root() {

  const contacts = [
    {
      id: '1',
      avatar: '',
      first: '',
      last: '',
      twitter: '',
      notes: '',
      favorite: false,
    }
  ];

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <button type="submit">New</button>
        </div>
        <nav>
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <a
                  href={`/user/${contact.id}`}
                >
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}