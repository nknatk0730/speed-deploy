import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getProfiles } from "@/data/profile"
import { format } from 'date-fns'

export default async function Page() {
  const profiles = await getProfiles();

  return (
    <div className="container py-6">
      <h1>Profiles</h1>

      <div className="grid grid-cols-2">
        {profiles?.map((profile) => (
          <div key={profile.id} className="border p-4 rounded-lg">
            <Avatar className="border">
            <AvatarImage src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${profile.id}`} alt="@shadcn" />
          </Avatar>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <time>{format(profile.createdAt, "yyyy/MM/dd")}</time>
          </div>
        ))}
      </div>
    </div>
  );
}
