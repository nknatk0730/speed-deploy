import Link from "next/link"
import { Button } from "./ui/button"
import { UserMenu } from "./user-menu"
import { currentUser } from "@/data/auth"
import { signIn } from "@/actions/auth"

export const Header = async () => {
  const user = await currentUser()

  return (
    <header className="h-16 flex items-center gap-2 px-4 justify-between">
      <Button className="font-bold text-xl" variant='ghost' asChild>
        <Link href='/'>App</Link>
      </Button>
      
      {user
        ?
          <UserMenu />
        :
          <form action={signIn}>
            <Button>Login</Button>
          </form>
      }
    </header>
  )
}