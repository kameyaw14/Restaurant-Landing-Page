import Burger from "./Burger.png";
import BurgerStack from "./BurgerStack.png";
import crack_burgers from "./crack burgers -.jpg";
import Fries from "./Fries.png";
import gptImage1 from "./gptImage1.webp";
import gptImage2 from "./gptImage2.webp";
import BgImage from "./BgImage.jpg";
import BgImage2 from "./BgImage2.webp";
import Noodles from "./Noodles.png";
import PlateNachos from "./PlateNachos.png";
import PlateOsman from "./PlateOsman.png";
import PlateStake from "./PlateStake.png";
import PlateStake2 from "./PlateStake2.png";
import PlateStakeLettuce from "./PlateStakeLettuce.png";
import PlateStakePotato from "./PlateStakePotato.png";
import PlateStakeTomato from "./PlateStakeTomato.png";
import grilled_chicken from "./grilled_chicken.jpg";
import Spaghetti_Carbonara from "./Spaghetti Carbonara.jpg";
import Veggie_Burger from "./Veggie Burger.jpg";
import Chocolate_Cake from "./Chocolate Cake.jpg";
import Tiramisu from "./Tiramisu.jpg";
import Cheesecake from "./Cheesecake.jpg";
import Jane from "./Jane.jpg";
import mike from "./mike.jpg";
import emily from "./emily.jpg";
import john from "./john.jpg";

export const assets = {
  Burger,
  crack_burgers,
  Fries,
  gptImage1,
  gptImage2,
  Noodles,
  PlateNachos,
  BurgerStack,
  PlateOsman,
  PlateStake,
  PlateStake2,
  PlateStakeLettuce,
  PlateStakeTomato,
  PlateStakePotato,
  BgImage,
  BgImage2,
};

export const menu_list = [
  {
    menu_name: "Burger",
    menu_image: Burger,
  },
  {
    menu_name: "Stake",
    menu_image: PlateStake,
  },

  {
    menu_name: "Noodles",
    menu_image: Noodles,
  },
  {
    menu_name: "Fries",
    menu_image: Fries,
  },
  {
    menu_name: "Sausages",
    menu_image: PlateOsman,
  },
];

export const foodItems = [
  {
    name: "Grilled Chicken",
    description: "Tender grilled chicken served with a side of veggies.",
    price: "$12.99",
    image: grilled_chicken,
  },
  {
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with pancetta and parmesan.",
    price: "$14.99",
    image: Spaghetti_Carbonara,
  },
  {
    name: "Veggie Burger",
    description: "A delicious plant-based burger with all the fixings.",
    price: "$11.49",
    image: Veggie_Burger,
  },
  {
    name: "Chocolate Cake",
    description: "Decadent chocolate cake with a rich ganache.",
    price: "$6.99",
    image: Chocolate_Cake,
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert made with coffee-soaked ladyfingers.",
    price: "$5.49",
    image: Tiramisu,
  },
  {
    name: "Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust.",
    price: "$5.99",
    image: Cheesecake,
  },
];

export const testimonials = [
  {
    name: "John Doe",
    role: "Customer",
    image: john,
    rating: "⭐⭐⭐⭐⭐",
    testimonial:
      "The food was absolutely amazing! The service was excellent, and I’ll definitely be coming back.",
  },
  {
    name: "Jane Smith",
    role: "Customer",
    image: Jane,
    rating: "⭐⭐⭐⭐⭐",
    testimonial:
      "I had an incredible experience. The ambiance was cozy, and the dishes were simply delightful.",
  },
  {
    name: "Michael Brown",
    role: "Customer",
    image: mike,
    rating: "⭐⭐⭐⭐⭐",
    testimonial:
      "An unforgettable meal. Every dish was packed with flavor, and the staff made us feel so welcome!",
  },
  {
    name: "Emily White",
    role: "Customer",
    image: emily,
    rating: "⭐⭐⭐⭐⭐",
    testimonial:
      "A wonderful dining experience. From start to finish, everything was top-notch. Highly recommend!",
  },
];
