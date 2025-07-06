import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/aboutUs"!</div>
}
