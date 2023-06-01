import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"

export const pageLinks = [
   { id: 1, href: "#home", text: "home" },
   { id: 2, href: "#about", text: "about" },
   { id: 3, href: "#services", text: "services" },
   { id: 4, href: "#tours", text: "tours" },
]

export const socialLinks = [
   { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
   { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
   { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
]

export const services = [
   {
      id: 1,
      icon: "fas fa-wallet fa-fw",
      title: "saving money",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
   },
   {
      id: 2,
      icon: "fas fa-tree fa-fw",
      title: "Endless Hiking",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
   },
   {
      id: 3,
      icon: "fas fa-socks fa-fw",
      title: "Amazing Comfort",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
   },
]

export const tours = [
   {
      id: 1,
      image: tour1,
      date: "August 26th, 2023",
      title: "Tibet Adventure",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "China",
      days: "6",
      price: "$2100",
   },
   {
      id: 2,
      image: tour2,
      date: "October 1st, 2023",
      title: "Best of Java",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "Indonesia",
      days: "11",
      price: "$4600",
   },
   {
      id: 3,
      image: tour3,
      date: "September 16th, 2023",
      title: "Explore Hong Kong",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "Hong Kong",
      days: "8",
      price: "$5100",
   },
   {
      id: 4,
      image: tour4,
      date: "February 12th, 2024",
      title: "Kenya Hightlights",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "Kenya",
      days: "20",
      price: "$16100",
   },
]
