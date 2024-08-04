<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let isCenter = false;
    /* [IMPORTANT]: Assign a unique ID for each Donate Modal or else they'll collide id's */    
    export let id: number;

    let curGift = 0;
    const gifts = ["giftLabel", "gift1", "gift2", "gift3", "gift4", "gift5", "giftCustom"];
    const blinkTime = 300;

    function blink3() {
        const elem: HTMLElement = document.getElementById(gifts[curGift] + id)!;
        elem.style.visibility = "hidden";
        setTimeout(() => {
            elem.style.visibility = "visible";
            setTimeout(() => {
                elem.style.visibility = "hidden";
                setTimeout(() => {
                    elem.style.visibility = "visible";
                    setTimeout(() => {
                        elem.style.visibility = "hidden";
                        setTimeout(() => {
                            elem.style.visibility = "visible";
                        }, blinkTime);
                    }, blinkTime);
                }, blinkTime);
            }, blinkTime);
        }, blinkTime);
    }

    let interval: number;
    onMount(() => {
        blink3();
        interval = setInterval(() => {
            curGift = (curGift + 1) % gifts.length;
            blink3();
        }, blinkTime * 6);
        // there are 5 steps, but I added one so that there would be a delay
        // so that it didn't look as if 2 of them were blinking at once
    });

    onDestroy(() => {
        // @ts-ignore
        clearInterval(interval);
    })
</script>

<p id="giftLabel{id}" class:text-center={isCenter} class="mb-5 mt-4 md:mt-8 font-bold tracking-tight leading-none text-2xl text-secondary-700 md:text-3xl xl:text-4xl dark:text-white">
    Gift for the Founder and Leader, Altaf Hussain
</p>

<div class:flex={isCenter} class:inline-flex={!isCenter} class="flex-wrap flex-start justify-center gap-4">
    {#each [5, 10, 20, 50, 100] as amt, i}
        <button type="button" id="gift{i+1}{id}" class="focus:outline-none text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium md:text-xl rounded-lg text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-900">
            ${amt}
        </button>
        <!--
            <Button size="xl" class="text-xl">${amt}</Button>
        -->
    {/each}
    <input type="number" id="giftCustom{id}" class="text-xl rounded-lg" placeholder="Other">
</div>

