import { FooterItem } from "../types/FooterItem";

export const footerItems : FooterItem[] = [
    {
        key: '1',
        icon: "search-outline",
        title: "Search"
    },
    {
        key: '2',
        icon: "heart-outline",
        title: "Saved"
    },
    {
        key: '3',
        icon: "briefcase-outline",
        title: "Bookings"
    },
    {
        key: '4',
        picture: require("../assets/profile_picture.jpg"),
        title: "My account"
    }
]