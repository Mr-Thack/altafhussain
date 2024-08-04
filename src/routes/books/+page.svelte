<script lang="ts">
    import Establishment from "$lib/assets/books/Establishment.png";
    import IsraelPalestine from "$lib/assets/books/Israel-Palestine.png";
    import Sach from "$lib/assets/books/Sach.png";
    import Safar from "$lib/assets/books/Safar.png";
    
    import { base } from '$app/paths';

    class Book {
        image: string;
        href: string;

        constructor(image: string, href: string) {
            this.image = image;
            this.href = href;
        }
    }

    const Books = [
        new Book(Safar, "/Safar-e-Zindagi.pdf"),
        new Book(Sach, "/Sachi Baatain.pdf"),
        new Book(Establishment, "/Establishment ki seh Jehti Hikmat-e-Amali.pdf"),
        new Book(IsraelPalestine, "/Israel-Palestine Conflict.pdf")
    ]
</script>



<section class="mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-y-8 md:gap-y-16 lg:gap-y-20 xl:gap-y-24 mt-12 md:mt-18 lg:mt-24 xl:mt-30">
    {#each Books as book}
        <a href={base + book.href} class="flex flex-col place-space-between">
            <img src={book.image} alt={book.href} class="mx-auto max-w-[33dvh] h-auto">
            <h1 class="text-2xl xl:text-4xl font-bold text-center">
                {book.href.replace(".pdf", "").replace("/", "")}
            </h1>
        </a>
    {/each}
</section>