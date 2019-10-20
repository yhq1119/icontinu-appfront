<template>
  <v-card outlined  id="course-card">
    <v-col style="padding: 0 12px 0 12px;">
      <v-row>
        <v-col id="col1" :style="date_color" cols="3">
          <!-- <v-img :src="course.src"></v-img> -->
          <v-row justify="center">
              <span class="headline">

              {{day(course.course_time)}}
              </span>
              </v-row>
          <v-row justify="center">
              <span class="headline">

              {{month(course.course_time)}}
              </span>
              </v-row>
        </v-col>
        <v-col style="padding:0" cols="3">
          <v-img :src="course.src" height="100%"></v-img>
        </v-col>
        <v-col style="padding:0" cols="6">
          <v-col style="padding:0 0 0 10px">
            <v-row>
              <!-- <v-col> -->
              <span id="c-name" class="col-12 py-0 text-truncate subtitle-2">{{course.course_name}}</span>
              <span id="c-name" class="col-12 py-0 text-truncate caption">{{course.course_location}}</span>
              <span id="c-name" class="col-12 py-0 text-truncate caption">{{date_full(course.course_time)}}</span>

              <!-- </v-col> -->
              <!-- </v-row>
              <v-row>-->
              <!-- <v-col> -->
              <span id="c-desc" class="col-12 py-1 text-truncate white--text">
                <v-chip small color="#f26400" class="white--text">{{course.course_point}} points</v-chip>
              </span>
              <!-- </v-col> -->
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    course: {}
  },

  methods: {
    getDate(str) {
      return new Date(str).toDateString().split(" ");
    },
    month(str) {
      let ss = this.getDate(str);
      return ss[1].toUpperCase();
    },
    day(str) {
      let ss = this.getDate(str);
      return ss[2];
    },
    date_full(str) {
      let ss = this.getDate(str);
      return ss[1] + " " + ss[2] + ", " + ss[3];
    }
  },
  computed: {
    date_color() {
      // var half = new Date('June 30')
      var color = "#FB8533";
      var text = "#636069";
      var current = new Date(this.course.course_time);
      if (current.getMonth() > 6) {
        color = "#515C6F";
        text = "#FEFFFF";
      }
      return { background: color, color: text };
    }
  }
};
</script>

<style scoped>
#course-card {
  padding: 0;
  border-radius: 5px;
 
  /* min-height: 60px; */
}
#c-name {
  overflow: hidden;
  word-wrap: none;
}
#c-desc {
  overflow: hidden;
  word-wrap: none;
}
#col1 {
  border-radius: 5px 0 0 5px;
}
#course-card-col {
  padding: 0;
}
</style>