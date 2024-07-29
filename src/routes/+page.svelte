<script lang='ts'>
    import speech from '$lib/assets/speech.png';
    import pose from '$lib/assets/altaf_hussain.png';
    import Boxes from '$lib/boxes';
    import { Button } from 'flowbite-svelte';
    import isCustom from '$lib/isCustom';
</script>

<style>
.bigbox {
    backdrop-filter: opacity(50%);
}
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
            
            

            <p class="mb-5 mt-4 md:mt-8 font-bold tracking-tight leading-none text-2xl text-secondary-700 md:text-3xl xl:text-4xl dark:text-white">
                Gift for the Founder and Leader, Altaf Hussain
            </p>
            <div class="inline-flex flex-wrap flex-start justify-center gap-4">
                {#each [5, 10, 20, 50, 100] as amt}
                <button type="button" class="focus:outline-none text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium md:text-xl rounded-lg text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-900">
                    ${amt}
                </button>
                    <!--
                        <Button size="xl" class="text-xl">${amt}</Button>
                    -->
                {/each}
                <input type="number" class="text-xl rounded-lg" placeholder="Other">
            </div>
        </div>    
    </div>
</section>

<hr>
<hr>
<hr>
<hr>


<!--This is for the Boxes-->
<section class="bg-gradient-to-br from-primary-600 flex flex-row items-center flex-wrap gap-8 py-10 px-8 lg:px-24 justify-around">
    {#each Boxes as box}
        <div class="h-full flex-1 flex-grow">
            <div style="background-image: url({box.bg}); background-color: rgba(255,255,255,0.5);" class="relative bigbox bg-cover bg-center max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={box.href}>
                    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{box.name}</h5>
                </a>
                <br>
                <p class="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">{box.description}</p>
                
            </div>
            <a href={box.href} class="mt-5 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary-600 rounded-lg hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800">
                {box.more}
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    {/each}
</section>
{/if}
