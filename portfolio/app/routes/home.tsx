import Lefter from "~/components/Lefter";
import type { Route } from "./+types/home";
import Body from "~/components/Body";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clémence Fortunato | Portfolio" },
    { name: "description", content: "Développeur full stack spécialisée en javascript et Python" },
  ];
}

export function links() {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
    },

  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <Lefter />
      <Body />
    </main>
  );
}
