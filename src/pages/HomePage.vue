<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-pa-lg row items-end q-col-gutter-md">
          <div class="col">
            <q-input bottom-slots autogrow class="newTweetInput" v-model="newTweetContent" placeholder ="Neler oluyor?" counter maxlength="280" :dense="dense">
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://pbs.twimg.com/profile_images/1579971252277723136/6viwe3VO_400x400.jpg">
              </q-avatar>
            </template>


          </q-input></div>
          <div class="col col-shrink">
              <q-btn @click="addNewTweet" unelevated rounded color="primary" class="q-mb-md" label="Tweetle" no-caps :disable="newTweetContent"/>
          </div>
        </div>
        <q-separator color="grey-2 border border-primary" size="15px" class="divider"/>

        <q-list separator>
          <transition-group
            appear
            enter-active-class="animated fadeIn slow"
            leave-active-class="animated fadeOut slow"
          >
            <q-item v-for="tweet in tweets" :key="tweet.date" clickable v-ripple class="tweet q-py-md" >
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://pbs.twimg.com/profile_images/1579971252277723136/6viwe3VO_400x400.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label ><strong>Adem Cansız</strong>
                <span class="text-grey-7 q-ml-sm ">@ademmcansiz</span>
              </q-item-label>
              <q-item-label  >
                {{ tweet.content }}
              </q-item-label>
              <div class="row justify-between q-mt-md">
                <q-btn flat round color="grey" size="sm" icon="fa-solid fa-comment"></q-btn>
                <q-btn flat round color="grey" size="sm" icon="fa-solid fa-retweet"></q-btn>
                <q-btn flat round color="grey" size="sm" icon="fa-regular fa-heart"></q-btn>
                <q-btn @click="deleteTweet(tweet)" flat round color="grey" size="sm" icon="fa-solid fa-trash"></q-btn>
              </div>
            </q-item-section>

            <q-item-section side top>
              <!-- {{ formatTime(tweet.date)  }} -->
              {{ tweet.date  }}
            </q-item-section>
            </q-item>
          </transition-group>
          <q-separator inset="item" />


      </q-list>
  </q-scroll-area>
  </q-page>
</template>
<!-- .divider
border-top: 1px solid
border-bottom: 1px solid
border-color : $gray4 -->
<script>
import { defineComponent } from 'vue'
import {formatDistance,subDays} from 'date-fns'
import moment from 'moment';
import axios from "axios"

export default defineComponent({
  name: 'HomePage',
  data(){
    return{
      newTweetContent:'',
      tweets:[
      // {content:"Janet-- I'll be in your neighborhood doing errands thisweekend. Do you want to grab brunch?" , date: "1677497881612"},
      // {content:"Janet-- I'll be in your neighborhood doing errands thisweekend. Do you want to grab brunch?" , date: "1677498060754"},
    ],
    }
  },
  filters:{
    relativeData(value){
      return formatDistance(subDays(value),new Date())
    }
  },
  methods:{
    addNewTweet(){
        axios
        .post(
          "https://adem-quasar-todolist-default-rtdb.firebaseio.com/tweets.json",
          { content: this.newTweetContent , date : Date.now()}
        )
        .then((response) => {
          let newTweet ={
          content:this.newTweetContent,
          date: Date.now()
        }
          this.tweets.unshift(newTweet)
          this.newTweetContent=''
        })
        .catch((e) => {
          console.log(e);
        });

    }
    ,
    deleteTweet(props){
      console.log(props.id);
       axios
        .delete(
          "https://adem-quasar-todolist-default-rtdb.firebaseio.com/tweets/" +
            props.id +
            ".json"
        )
        .then((response) => {
          console.log("başarılı döndü");
          let dateToDelete = props.date
          let index = this.tweets.findIndex(tweet => tweet.date === dateToDelete)
          this.tweets.splice(index,1)
        })
        .catch((e) => {
          console.log(e);
        });

    }
    ,
  },
  computed: {
    formatTime(props) {
      return moment(props).fromNow();
    },
  },
  mounted() {
    axios
      .get(
        "https://adem-quasar-todolist-default-rtdb.firebaseio.com/tweets.json"
      )
      .then((response) => {
        for (let key in response.data) {
          let tweetsGet = {
            id: key,
            content: response.data[key].content,
            date: response.data[key].date,
          };
          this.tweets.push(tweetsGet);
        }
      });
  },
})
</script>
<style lang="sass">
.newTweetInput
  textarea
  font-size:19px
  line-height:1.4 !important


</style>
