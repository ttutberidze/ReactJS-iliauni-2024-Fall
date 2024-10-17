import { createContact, getContacts } from "../contacts";
import {useLoaderData, Form, redirect, NavLink, Outlet} from 'react-router-dom'

export const rootLoader = async () => {
  return await getContacts()
}

export const createContactAction = async () => {
  const contact = await createContact()
  redirect(`/user/${contact.id}`)
  return contact
}

export default function Root() {
  const contacts = useLoaderData()

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form method="POST">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <NavLink
                  to={`/user/${contact.id}`}
                >
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </NavLink>
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
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}