import { deleteContact, getContact, updateContact } from "../contacts";
import {useLoaderData, Form, redirect, useFetcher} from 'react-router-dom'

export const userLoader = async ({params}) => {
  const contact = await getContact(params.userId)
  return contact
}

export const viewUserAction = async ({params, request}) => {
  // Favorite
  if(request.method === 'POST') {
    const formData = await request.formData();
    return await updateContact(params.userId, {favorite: formData.get('favorite') === 'true'})
  } else {
    await deleteContact(params.userId)
    return redirect('/')
  }
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
          <Form method="DELETE">
            <button>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

const Favorite = ({ contact }) => {
  const fetcher = useFetcher()
  let favorite = contact.favorite;
  if(fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true'
  }

  return (
    <fetcher.Form method="POST">
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
    </fetcher.Form>
  );
}