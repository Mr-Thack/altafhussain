<script lang='ts'>
    import speech from '$lib/assets/speech.png';
    import Boxes from '$lib/boxes';
    import { onMount } from 'svelte';
    import isCustom from '$lib/isCustom';
    import { slide } from 'svelte/transition';
    import Donate from './Donate.svelte';

    

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

    let heroState = 0;

    let isLoaded = false;
    onMount(() => {
        offset = getOffset();
        window.onresize = () => {
            offset = getOffset();
        }
        isLoaded = true;
        heroState = 0;

        setInterval(() => {
            heroState = (heroState + 1) % 3;
        }, 5000);
    });

    const animSpeed = 500;
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap');

#hero {
    height: 50dvh;
}

.hero {
    overflow: auto;
    position: relative;
    height: 100%;
    width: 100%;
    backdrop-filter: opacity(100%);
}

.hero:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    filter: blur(.05rem);

    width: 100%;
    height: 100%;
}

#hero1:before {
    background-image: url(/src/lib/assets/hd1.png);

    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95% center;
}

#hero2:before {
    background-image: url(/src/lib/assets/building.png);

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

#hero3:before {
    background-image: url(/src/lib/assets/house.jpg);

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

/* .blink {
  animation: blink-animation 8s steps(8, start) infinite;
  -webkit-animation: blink-animation 8s steps(8, start) infinite;
}

@keyframes blink-animation {
  50% {
    visibility: hidden;
  }
  51% {
    visibilty: visible;
  }
}

@-webkit-keyframes blink-animation {
  50% {
    visibility: hidden;
  }
  51% {
    visibilty: visible;
  }
} */

/* .blink {
  animation: blink-animation 2s steps(10, start) infinite;
  -webkit-animation: blink-animation 12s steps(100, start) infinite;
}

@keyframes blink-animation {
  0% {
    visibility: visible;
  }
  40% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
} */


/* @-webkit-keyframes blink-animation {
  0% {
    visibility: visible;
  }
  47% {
    visibility: hidden;
  }
  48% {
    visibility: visible;
  }
  50% {
    visibility: hidden;
  }
  51% {
    visibility: visible;
  }
} */
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
<section id="hero" class="bg-gradient-to-br from-secondary-600">
    {#if heroState == 0}
        <div    in:slide={{ delay: 1000, duration: animSpeed, axis: 'x' }}
                out:slide={{ delay: 0, duration: animSpeed, axis: 'x' }}
                id="hero1" class="hero">
            <h1 class="pl-4 pb-4 md:pb-8 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold italic">Founder and Leader of MQM,</h1>
            <h1 class="pl-8 md:pl-16 xl:pl-24 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-display">Mr. Altaf Hussain</h1>
        </div>
    {:else if heroState == 1}
        <div    in:slide={{ delay: 1000, duration: animSpeed, axis: 'x' }}
                out:slide={{delay: 0, duration: animSpeed, axis: 'x' }}
                id="hero2" class="hero">
        </div>
    {:else if heroState == 2}
        <div    in:slide={{ delay: 1000, duration: animSpeed, axis: 'x' }}
                out:slide={{delay: 0, duration: animSpeed, axis: 'x' }}
                id="hero3" class="hero">
        </div>
    {/if}
</section>

<hr>
<hr>
<hr>
<hr>

<section class="bg-gradient-to-tr from-primary-600">
    <div class="max-w-screen-xl mx-auto py-8 md:py-16">
        <div class="flex flex-col place-self-center items-center text-center">
            <h1 class="max-w-2xl mb-5 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-primary-600 dark:text-green-300">
                Help us Build a Great Nation
            </h1>
            <h1 class="max-w-2xl mb-5 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-primary-600 dark:text-green-300">
                For our Future Generation
            </h1>
            <p class="mb-3 text-2xl tracking-tight text-primary-700 leading-none md:text-3xl xl:text-4xl dark:text-white">
                Help us build a great future for our deprived nation
            </p>
            

           <Donate isCenter={false} id={1} />
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
            <img src="/src/lib/assets/box_images/{box.bg}" alt={box.name} class="rounded-lg md:rounded-xl 2xl:rounded-3xl mx-auto md:w-[33dvh] md:h-auto">
            <h5 class="md:mb-1 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{box.name}</h5>
            <p class="font-bold text-center font-normal text-gray-700 dark:text-gray-400">{box.description}</p>
        </a>
    {/each}
    {/if}
</section>
{/if}
