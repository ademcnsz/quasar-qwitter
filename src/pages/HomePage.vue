<template>
  <q-page class="">
    <div class="q-pa-lg row items-end q-col-gutter-md">
        <div class="col">
          <q-input bottom-slots autogrow class="newTweetInput" v-model="newTweet" placeholder ="Neler oluyor?" counter maxlength="280" :dense="dense">
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://pbs.twimg.com/profile_images/1579971252277723136/6viwe3VO_400x400.jpg">
            </q-avatar>
          </template>


        </q-input></div>
        <div class="col col-shrink">
            <q-btn unelevated rounded color="primary" class="q-mb-md" label="Tweetle" no-caps :disable="newTweet"/>
        </div>
      </div>
      <q-separator color="grey-2 border border-primary" size="15px" class="divider"/>
  </q-page>
</template>
<!-- .divider
border-top: 1px solid
border-bottom: 1px solid
border-color : $gray4 -->
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  data(){
    return{
      newTweet:'',
    }
  }
})
</script>
<style lang="sass">
.newTweetInput
  textarea
  font-size:19px
  line-height:1.4 !important


</style>
