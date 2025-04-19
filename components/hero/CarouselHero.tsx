import { Carousel } from "./Carousel"

const CarouselHero = () => {

    const images = [
        "https://files.organicharvest.in/site-images/original/1920x527_12.jpg",
        "https://files.organicharvest.in/site-images/original/1920x527-Dgif.gif",
         "https://files.organicharvest.in/site-images/original/1920x527_12.jpg",
        "https://files.organicharvest.in/site-images/original/1920x527-Dgif.gif",
         "https://files.organicharvest.in/site-images/original/1920x527_12.jpg",
        "https://files.organicharvest.in/site-images/original/1920x527-Dgif.gif",
    ]
    return (


    <Carousel images={images} />
  )
}

export default CarouselHero
