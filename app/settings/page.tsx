import { AccountDeleteDialog } from "./components/account-delete-dialog";

export default function Page() {
  return (
    <div className="container">
      <h1 className="font-bold text-3xl">Account Settings</h1>

      <AccountDeleteDialog />
    </div>
  )
}
