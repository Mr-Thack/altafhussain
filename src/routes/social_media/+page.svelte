<script lang='ts'>
    import { base } from '$app/paths';

    import YouTube from "$lib/assets/youtube_logo.png";

    class Social {
        title: string
        href: string
        img: string

        constructor(title: string, href: string, img: string) {
            this.title = title;
            this.href = href;
            this.img = img;
        }
    }

    const Socials = [
        new Social(
            "YouTube official channel",
            "https://youtube.com/@altafhussain_90?si=e0B24CC2EKjLNzxX",
            YouTube
        ),
        new Social(
            "Revelations with Altaf Hussain",
            "https://www.facebook.com/AltafHussainRev",
            "https://cdn.iconscout.com/icon/free/png-256/free-facebook-2038470-1718513.png"
        ),
        new Social(
            "Tiktok",
            "https://www.tiktok.com/@altafhussain_90",
            "https://img.freepik.com/premium-vector/square-tiktok-logo-isolated-white-background_469489-891.jpg"
        ),
        new Social(
            "Twitter official",
            "https://www.twitter.com/altafhussain_90",
            "https://m.media-amazon.com/images/I/61w1Q5OxE2L._AC_UF894,1000_QL80_.jpg",
        ),
        new Social(
           "Instagram",
           "https://www.instagram.com/altafhussain_90",
           "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png"
        )
    ];
</script>

<section class="grid grid-cols-5 md:grid-cols-9 gap-8 mx-16 mt-4 md:mt-8 xl:mt-16 2xl:mt-24">
    {#each Socials as social, i}
        {#if i != 0}
            <div></div>
        {/if}
        <a href={social.href} class="block max-w my-auto p-6 bg-white border border-gray-200 rounded-lg">
            <img src={social.img} style="height: 100%; width: 100%;" alt={social.href}>
            <p>{social.href}</p>
        </a>
    {/each}
</section>