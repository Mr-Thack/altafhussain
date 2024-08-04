import bio from "$lib/assets/box_images/bio.jpg";
import donate from "$lib/assets/box_images/donate.jpg";
import struggle from "$lib/assets/box_images/struggle.jpg";
import philosophy from "$lib/assets/box_images/philosophy.jpg";
import books from "$lib/assets/box_images/books.jpg";
import songs from "$lib/assets/box_images/songs.jpg";
import images from "$lib/assets/box_images/images.jpg";
import videos from "$lib/assets/box_images/videos.jpg";
import socials from "$lib/assets/box_images/socials.jpg";
import contact from "$lib/assets/box_images/contact.jpg"; 

class Box {
    href: string
    name: string
    description: string
    bg: string;

    constructor(name: string, description: string, bg: string) {
        this.name = name;
        this.href = name.toLowerCase().replaceAll(" ", "_");
        this.description = description;
        this.bg = bg;
    }
}

export default [
    new Box(
        "Biography",
        "Great Leader, Great Biography",
        bio
    ),
    new Box(
        "Gift",
        "Help us Help our Generation.",
        donate
    ),
    new Box(
        "Political Struggle",
        "Empowering the 98% oppressed people of Pakistan",
        struggle
    ),
    new Box(
        "Philosophy",
        "Altaf Hussain's: \"Philosophy of Realism and Practicalism\"",
        philosophy
    ),
    new Box(
        "Books",
        "Books written by Mr. Altaf Hussain",
        books
    ),
    new Box(
        "Songs",
        "MQM Songs",
        songs
    ),
    new Box(
        "Images",
        "Image Gallery of Mr Altaf Hussain",
        images
    ),
    new Box(
        "Videos",
        "Tehreeki Videos",
        videos
    ),
    new Box(
        "Social Media",
        "Follow Altaf Hussain on social media",
        socials
    ),
    new Box(
        "Contact",
        "Contact Me",
        contact
    )
]