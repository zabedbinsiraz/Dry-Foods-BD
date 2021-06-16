import image1 from '../Images/food-banner1.jpg';
import image2 from '../Images/food-banner2.jpg';
import image3 from '../Images/food-banner3.jpg';
import image4 from '../Images/food-banner4.jpg'
import image5 from '../Images/food-banner5.jpg'

export const foods = [
    {
        id: 1,
        title: "Dry Food Daily Pack",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry ",
        price: 20,
        image: image1
    },
    {
        id: 2,
        title: "Dry Food Weekly Pack",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
        price: 120,
        image: image2
    },
    {
        id: 3,
        title: "Dry Food Monthly Package",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
        price: 450,
        image: image3
    },
    {
        id: 4,
        title: "Daily Pack Double",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
        price: 35,
        image: image4
    },
    {
        id: 5,
        title: "Weekly Pack Double",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
        price: 230,
        image: image5
    },
]

export function getFoodByID(id) {
    return foods.find((food) => food.id === id)

}