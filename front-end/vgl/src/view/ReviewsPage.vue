<script setup lang="ts">
import LatestReviewCard from '@/components/LatestReviewCard.vue'
</script>


<template>
  <section id="section-latest">
    <div class="section-title">Latest</div>
    <LatestReviewCard
      iconsrc="./icons/latest-reviews/game1.jpg"
      :rating="5"
      gameName="Disney Dreamlight Valley"
      reviewText="My girlfriend liked it. I guess it’s alright."
      reviewerName="MarineM52"
      timeAgo="1 Hour Ago"
    />
    <LatestReviewCard
      iconsrc="./icons/latest-reviews/game2.avif"
      :rating="5"
      gameName="Fire Emblem Engage"
      reviewText="Did I freak out a little when meeting Ike? Yes, very much so."
      reviewerName="MimchetoBG"
      timeAgo="2 Hours Ago"
    />
    <LatestReviewCard
      iconsrc="./icons/latest-reviews/game3.jpg"
      :rating="4"
      gameName="Dead by Daylight"
      reviewText="I paid for the game. Now I still have to pay for skins."
      reviewerName="Shredrox"
      timeAgo="4 Hours Ago"
    />
  </section>
</template>
