import { getContact } from "../contacts";
import {useLoaderData, Form} from 'react-router-dom'

export const userLoader = async ({params}) => {
  const contact = await getContact(params.userId)
  return contact
}

export default function Contact() {

  const contact = useLoaderData()

  return (
    <div id="contact">
      <div>
        <img
          src={contact.avatar}
          alt={contact.first}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button>Edit</button>
          </Form>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

const Favorite = ({ contact }) => {
  let favorite = contact.favorite;

  return (
    <button
      name="favorite"
      value={favorite ? "false" : "true"}
      aria-label={
        favorite
          ? "Remove from favorites"
          : "Add to favorites"
      }
    >
      {favorite ? "★" : "☆"}
    </button>
  );
}