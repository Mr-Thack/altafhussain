<script lang="ts">
    import { base } from '$app/paths';
    
    async function get() {
        const allimgsf = import.meta.glob("$lib/assets/gallery/videos/*.mp4");
        const iterableImages = Object.entries(allimgsf);

        const allimgs = await Promise.all(
        iterableImages.map(async ([path, resolver]) => {
            // gets the resolved asset path
            // @ts-ignore
            const imgPath =  (await resolver()).default.slice(0, -4);

            return {
                path: imgPath,
                name: imgPath.split("/").at(-1),
            };
        })
        );

        return allimgs;
    };
</script>
<h1 class="text-2xl font-bold mt-4 text-center">Press to Play</h1>

<div class="grid grid-cols-2 md:grid-cols-4 gap-y-10 mt-10 justify-center align-center">
    <!-- I am aware that this isn't the correct way to do it, but it works-->
    {#await get() then get}
        {#each Object.values(get) as vid}
            <div class="max-w-[90%] h-auto">
                <a href={base + vid.path + ".mp4"} class="rounded-lg">
                    <video class="rounded-lg z-0">
                        <source src={base + vid.path + ".mp4"} type="video/mp4">
                        <p>
                            Your Browser Does not Support the Video Tag,
                            <br>
                            But you can download the Video here:
                            <br>
                            <a href={base + vid.path + ".mp4"}>{vid.name}</a>
                        </p>
                    </video>
                </a>
            </div>
        {/each}
    {/await}
</div>