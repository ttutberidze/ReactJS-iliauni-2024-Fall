import { revalidatePath, revalidateTag } from "next/cache"

export async function GET() {
    // revalidatePath('/users')
    revalidateTag('user')
    return Response.json({ message: 'Revalidated Successfully' })
  }