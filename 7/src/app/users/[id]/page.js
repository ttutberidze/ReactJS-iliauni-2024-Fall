import { fetchUser } from "@/services/user.service"

const Page = async ({params}) => {
    const user = await fetchUser((await params).id)
    console.log(user)
    return (
        <div>{user.name}</div>
    )
}

export default Page