import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center  text-white">
        Home
      </header>
    </div>
  )
}
