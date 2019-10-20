<template>
  <div>
      <v-row>
          <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="item in courses" :key="item.index">
              <CourseCard :course="item" />
          </v-col>
      </v-row>
  </div>
</template>

<script>
import CourseCard from '../components/CourseCard'
export default {
    components:{
        CourseCard
    },
    data(){
        return{
courses: [
        {
            "course_id": "BDP09251630",
            "course_name": "Big Data Processing",
            "course_time": "2019-09-25 12:30:00",
            "course_date": "25 09, 2019",
            "course_location": "12.08.04",
            "course_point": "7",
            "course_duration": "2.0",
            "course_month": "Sep",
            "course_day": "25",
            "course_desc": "Course for hadoop and related programming techniques",
            "src":"https://images.unsplash.com/photo-1569830904560-2afd7062213c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            "course_id": "WSEIR09261830",
            "course_name": "Web Search Engine and Information Retrieval",
            "course_time": "2019-09-26 08:30:00",
            "course_date": "26 09, 2019",
            "course_location": "12.08.02",
            "course_point": "5",
            "course_duration": "2.0",
            "course_month": "Sep",
            "course_day": "26",
            "course_desc": "",
            "src":'https://images.unsplash.com/photo-1562789363-3164f8a23bac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
        },
        {
            "course_id": "DM09231630",
            "course_name": "Data Mining",
            "course_time": "2019-09-23 06:30:00",
            "course_date": "23 09, 2019",
            "course_location": "05.03.01",
            "course_point": "5",
            "course_duration": "2.0",
            "course_month": "Sep",
            "course_day": "23",
            "course_desc": "No Description",
            "src":'https://images.unsplash.com/photo-1546694996-92f41a1821c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
        },
        {
            "course_id": "NP09181230",
            "course_name": "Network Programming",
            "course_time": "2019-09-18 02:30:00",
            "course_date": "18 09, 2019",
            "course_location": "56.01.01",
            "course_point": "5",
            "course_duration": "2.0",
            "course_month": "Sep",
            "course_day": "18",
            "course_desc": "No Description",
            "src":"https://images.unsplash.com/photo-1565793141907-f29cf7ec4f5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80"
        },
        {
            "course_id": "a t2019-10-15 00:04:05",
            "course_name": "A Testing Course",
            "course_time": "2019-10-15 00:04:05",
            "course_date": "15 10, 2019",
            "course_location": "14.08.06",
            "course_point": "5",
            "course_duration": "3.0",
            "course_month": "Oct",
            "course_day": "15",
            "course_desc": "Okay, here is description",
            "src":"https://images.unsplash.com/photo-1475906067486-6c5bd3aa9c9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
        ,
        {
            "course_id": "a t2019-10-15 00:04:05",
            "course_name": "A Testing Course",
            "course_time": "2019-06-15 00:04:05",
            "course_date": "15 10, 2019",
            "course_location": "14.08.06",
            "course_point": "5",
            "course_duration": "3.0",
            "course_month": "Oct",
            "course_day": "15",
            "course_desc": "Okay, here is description",
            "src":"https://images.unsplash.com/photo-1475906067486-6c5bd3aa9c9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
    ]
        }
    }

}
</script>

<style>

</style>