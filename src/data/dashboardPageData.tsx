import { CupIcon, KinfeIcon } from "@/components/Icons"
import { generateUniqueId } from "@/helper"

export const categories = [
  {
    key: "1",
    icon: <KinfeIcon />,
    label: "Morning",
  },
  {
    key: "2",
    icon: <KinfeIcon />,
    label: "Lunch",
  },
  {
    key: "3",
    icon: <KinfeIcon />,
    label: "Dinner",
  },
  {
    key: "4",
    icon: <CupIcon />,
    label: "Snack",
  },
]

export const products = [
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/morning1.jpg",
    label: "05.21.Morning",
  },
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/lunch1.jpg",
    label: "05.21.Lunch",
  },
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/dinner1.jpg",
    label: "05.21.Dinner",
  },
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/snack1.jpg",
    label: "05.21.Snack",
  },
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/morning1.jpg",
    label: "05.20.Morning",
  },
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/lunch2.jpg",
    label: "05.20.Lunch",
  },
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/dinner2.jpg",
    label: "05.20.Dinner",
  },
  {
    key: generateUniqueId(),
    thumbnail: "/images/dashboard/snack2.jpg",
    label: "05.20.Snack",
  },
]
