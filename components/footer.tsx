import { ModeToggle } from "./mode-toggle"

export const Footer = () => {
  return (
    <footer className="p-6 h-16 flex justify-between items-center border-t sticky top-full">
      <p>&copy; doe</p>
      <ModeToggle />
    </footer>
  )
}