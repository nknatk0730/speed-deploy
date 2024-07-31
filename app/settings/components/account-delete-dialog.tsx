import { deleteAccount } from "@/actions/auth";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog"

export function AccountDeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Account Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <p>Account delete OK?</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant="ghost">
              cancel
            </Button>
          </DialogClose>
          <form action={deleteAccount}>
            <Button type="submit" variant="destructive" className="w-full">
              delete Account
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
