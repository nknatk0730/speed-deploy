import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { currentProfile } from "@/data/profile"
import Link from "next/link";

export async function ProfileCard() {
  const profile = await currentProfile();

  if (!profile) {
    return null;
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{profile.name}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        {profile.description}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/profiles/${profile.id}`}></Link>
        </Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
