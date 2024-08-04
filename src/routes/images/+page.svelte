<script lang="ts">
    import { base } from '$app/paths';
    
    async function get() {
        const allimgsf = import.meta.glob("$lib/assets/gallery/images/*.jpg");
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

{#await get() then get}
    <div class="grid grid-cols-2 md:grid-cols-4 gap-y-10 mt-10 px-4 lg:px-8 justify-center align-center">
        <!-- I am aware that this isn't the correct way to do it, but it works-->
        {#each Object.values(get) as image}
            <img src={image.path + '.jpg'} class="max-w-[90%] h-auto rounded-lg" alt="{image.name}">
        {/each}
    </div>
{/await}