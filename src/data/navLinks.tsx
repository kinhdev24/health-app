import { ChallengeIcon, InfoIcon, MemoIcon } from "@/components/Icons"
import { CLIENT_URL } from "@/constants/client-url"

type Navigation = {
  id?: string
  icon: React.ReactNode
  label: string
  count?: number
  path: string
}

type Menu = {
  key: string
  path: string
  label: string
}

export const navLinks: Navigation[] = [
  {
    id: "1",
    icon: <MemoIcon />,
    label: "自分の記録",
    path: CLIENT_URL.PROFILE,
  },
  {
    id: "2",
    icon: <ChallengeIcon />,
    label: "チャレンジ",
    path: "#",
  },
  {
    id: "3",
    icon: <InfoIcon />,
    label: "お知らせ",
    count: 1,
    path: "#",
  },
]

export const menuList: Menu[] = [
  {
    key: "1",
    path: CLIENT_URL.PROFILE,
    label: "自分の記録",
  },
  {
    key: "2",
    path: "#",
    label: "体重グラフ",
  },
  {
    key: "3",
    path: "#",
    label: "目標",
  },
  {
    key: "4",
    path: "#",
    label: "選択中のコース",
  },
  {
    key: "5",
    path: CLIENT_URL.COLUMNS,
    label: "コラム一覧",
  },
  {
    key: "6",
    path: "#",
    label: "設定",
  },
]

export const footerLinks = [
  {
    key: "1",
    path: "#",
    label: "会員登録",
  },
  {
    key: "2",
    path: "#",
    label: "運営会社",
  },
  {
    key: "3",
    path: "#",
    label: "利用規約",
  },
  {
    key: "4",
    path: "#",
    label: "個人情報の取扱について",
  },
  {
    key: "5",
    path: "#",
    label: "特定商取引法に基づく表記",
  },
  {
    key: "6",
    path: "#",
    label: "お問い合わせ",
  },
]
