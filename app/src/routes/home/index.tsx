import { HomeModule } from '@/modules/home/page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <HomeModule />;
}
