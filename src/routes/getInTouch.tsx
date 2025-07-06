import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/getInTouch')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/getInTouch"!</div>
}
