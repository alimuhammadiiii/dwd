import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/FaQ')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/FaQ"!</div>
}
