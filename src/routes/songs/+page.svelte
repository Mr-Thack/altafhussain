<script lang="ts">
    import { base } from '$app/paths';
    
    const Songs = [
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136229544&amp;auto_play=false&amp;hide_related=false&amp;visual=true;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91429217&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91080604&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91081235&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91430911&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90720049&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90442774&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90394235&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91441362&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91443118&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90391703&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90389048&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90449330&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90449973&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91432647&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90451634&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91434090&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91435485&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91437364&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false",
        "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91438750&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false"
    ];
</script>


<section class="flex flex-col gap-8 mt-8">
    {#each Songs as song}
        <iframe class="mx-auto" width="55%" scrolling="no" height="auto" frameborder="no" src="{song}" loading="lazy"></iframe>
    {/each}
</section>