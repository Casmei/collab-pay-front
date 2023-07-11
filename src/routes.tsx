import { HomeIcon, BanknotesIcon, TrophyIcon } from "@heroicons/react/24/outline";

export const routes = [
  {
    path: "/",
    icon: <HomeIcon />,
    name: "Home",
  },
  {
    path: "/cobrancas",
    icon: <BanknotesIcon />,
    name: "Cobranças",
  },
  {
    path: "/objetivos",
    icon: <TrophyIcon />,
    name: "Objetivos",
  }
];
