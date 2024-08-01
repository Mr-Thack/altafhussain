<script lang='ts'>
    import speech from '$lib/assets/speech.png';
    import pose from '$lib/assets/altaf_hussain.png';
    import Boxes from '$lib/boxes';
    import { Button } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    import isCustom from '$lib/isCustom';

    const themeSizes = {
        "sm": 640,
        "md": 768,
        "lg": 1024
    };

    let offset = 4;

    // Don't have time, just copying and pasting 3 times
    function issm() {
        return !ismd() && !islg();
    }

    function ismd() {
        return window.innerWidth > themeSizes['md'] && !islg();
    }

    function islg() {
        return window.innerWidth > themeSizes['lg'];
    }

    function getSize() {
        if (islg()) {
            return 'lg';
        } else if (ismd()) {
            return 'md';
        } else {
            return 'sm';
        }
    }

    function getOffset() {
        return {
            'sm': 2,
            'md': 3,
            'lg': 4
        }[getSize()];
    }

    let isLoaded = false;
    onMount(() => {
        offset = getOffset();
        window.onresize = () => {
            offset = getOffset();
        }
        isLoaded = true;
    });
    


</script>

<style>
/* .bigbox {
    overflow: auto;
    position: relative;
    backdrop-filter: opacity(100%);
}

.bigbox::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    background-image: url(/src/lib/assets/box_images/bio.jpg);
    display: block;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    opacity: .5;
    filter: blur(.05rem); 
} */

.blink {
  animation: blink-animation 10s steps(10, start) infinite;
  /* -webkit-animation: blink-animation 1s steps(5, start) infinite; */
}

@keyframes blink-animation {
  
  50% {
    visibility: hidden;
  }
  51% {
    visibilty: visible;
  }
}

.blink-2 {
  animation: blink-animation-2 10s steps(10, start) infinite;
  /* -webkit-animation: blink-animation 1s steps(5, start) infinite; */
}

@keyframes blink-animation-2 {
  0% {
    visibility: visible;
  }
  30% {
    visibility: hidden;
  }
  31% {
    visibility: visible;
  }
  50% {
    visibility: hidden;
  }
  51% {
    visibility: visible;
  }
}


/* @-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
} */

.anim-delay1  { animation-delay: 1s }
.anim-delay2  { animation-delay: 2s }
.anim-delay3  { animation-delay: 3s }
.anim-delay4  { animation-delay: 4s }
.anim-delay5  { animation-delay: 5s }
.anim-delay6  { animation-delay: 6s }
</style>

{#if isCustom}
<!-- First, we need to introduce him -->
<section class="bg-gradient-to-tr from-green-600 to-gray-300 to-60%">
    <div class="bg-contain bg-[url($lib/assets/speech_opaque.png)] bg-no-repeat bg-center md:bg-none max-w-screen-xl px-4 py-8 mx-auto md:gap-8 md:gap-0 md:py-16 md:grid md:grid-cols-12">
        <div class="place-self-center text-center md:text-left md:mr-auto md:col-span-7">
            <h1 class="max-w-2xl mb-3 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                Help This Generation
            </h1>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-600">
                Build a Better Nation
            </h1>
        </div>   
        <div class="hidden mt-0 z-10 md:block md:col-span-5">
            <img src={speech} alt="Altaf Hussain Giving a Speech"> 
        </div>     
    </div>
</section>

<!-- Second, short bio -->
<section class="bg-gradient-to-tr from-green-600 to-gray-300 to-60%">
    <div class="max-w-screen-xl px-4 py-8 mx-auto md:gap-8 md:gap-0 md:py-16 md:grid md:grid-cols-12">
        <div class="place-self-center text-center md:text-left md:mr-auto md:col-span-7">
            <h1 class="max-w-2xl mb-3 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                
            </h1>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-600">
                Build a Better Nation
            </h1>
        </div>   
        <div class="hidden mt-0 z-10 md:block md:col-span-5">
            <img src={speech} alt="Altaf Hussain Giving a Speech"> 
        </div>     
    </div>
</section>


{:else}
<!--
<section class="bg-gradient-to-tr from-green-900">
    <div class="bg-contain bg-[url($lib/assets/altaf_hussain.png)] bg-no-repeat bg-center md:bg-none max-w-screen-xl px-4 py-8 mx-auto md:gap-8 md:gap-0 md:py-16 md:grid md:grid-cols-12">
        <div class="place-self-center text-center md:text-left md:mr-auto md:col-span-7">
            <h1 class="max-w-2xl mb-3 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                Help This Generation
            </h1>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-600">
                Build a Better Nation
            </h1>
            <p class="max-w-2xl mb-3 text-2xl tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
                Join Altaf Hussain Today
            </p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Donate Now
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>   
        <div class="hidden mt-0 z-10 md:block md:col-span-5">
            <img src={pose} alt="Altaf Hussain Giving a Speech"> 
        </div>     
    </div>
</section>
-->
<section class="bg-gradient-to-tr from-primary-600">
    <div class="max-w-screen-xl px-4 py-8 mx-auto md:gap-8 md:gap-0 md:py-16">
        <div class="flex flex-col place-self-center items-center text-center">
            
            <h1 class="max-w-2xl mb-5 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-primary-600 dark:text-green-300">
                Help Your Nation
            </h1>
            <h1 class="max-w-2xl mb-5 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-primary-600 dark:text-green-300">
                Build a New Generation
            </h1>
            <p class="mb-3 text-2xl tracking-tight text-primary-700 leading-none md:text-3xl xl:text-4xl dark:text-white">
                Help us build a great future for our deprived nation
            </p>
            
            

            <p class="blink-2 mb-5 mt-4 md:mt-8 font-bold tracking-tight leading-none text-2xl text-secondary-700 md:text-3xl xl:text-4xl dark:text-white">
                Gift for the Founder and Leader, Altaf Hussain
            </p>
            <div class="inline-flex flex-wrap flex-start justify-center gap-4">
                {#each [5, 10, 20, 50, 100] as amt, i}
                    <button type="button" class="blink anim-delay{(i+1)} focus:outline-none text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium md:text-xl rounded-lg text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-900">
                        ${amt}
                    </button>
                    <!--
                        <Button size="xl" class="text-xl">${amt}</Button>
                    -->
                {/each}
                <input type="number" class="blink anim-delay6 text-xl rounded-lg" placeholder="Other">
            </div>
        </div>    
    </div>
</section>

<hr>
<hr>
<hr>
<hr>


<!--This is for the Boxes-->
<!-- bg-gradient-to-br from-primary-600  -->
<section class="bg-gradient-to-br from-primary-600 flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 px-8 lg:px-24">
    {#if isLoaded}
    {#each Boxes as box, i}
        {#if i % offset == 0 && Boxes.length < i + offset}
            <div>
                <!-- This is to center the column -->
            </div>
        {/if}
        <a href="{box.href}" class="h-full w-full flex flex-col align-center">
            <!--
                <div class="relative bigbox max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                
                </div>
            -->
            <img src="/src/lib/assets/box_images/{box.bg}" alt={box.name} class="mx-auto md:w-[33dvh] md:h-auto">
            <h5 class="md:mb-1 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{box.name}</h5>
            <p class="font-bold text-center font-normal text-gray-700 dark:text-gray-400">{box.description}</p>
        </a>
    {/each}
    {/if}
</section>
{/if}
