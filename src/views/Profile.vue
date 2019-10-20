<template>
  <v-container>
    <!-- Profile -->
    <v-col>
      <v-row>
        <v-col id="upper-banner" :style="styleUpper" align="center">
          <h1>{{fullname}}</h1>
          <h3>{{user.email}}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-btn rounded outlined>Edit Profile</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-row>
            <v-col align="center" style="padding:0">
              <h1>{{user.r_point}}</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" style="padding:0">Required Points</v-col>
          </v-row>
        </v-col>
        <v-col align="center">
          <v-row>
            <v-col align="center" style="padding:0">
              <h1>{{user.m_point}}</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" style="padding:0">My Points</v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-text-field outlined rounded append-icon="mdi-magnify" placeholder="I'm looking for..."></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card outlined id="upcoming-card">
            <v-card-title>Upcoming Training</v-card-title>
            <v-img height="150px" :src="course.src"></v-img>
            <v-card-text>fafdafasffasfasfafafsfasfsfasfsaffafafafdas</v-card-text>
            <v-card-action>
              <v-col>
                <v-chip>{{course.point}} points</v-chip>
              </v-col>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <h2>
                  Suggest Trainings:
              </h2>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="4"  v-for="item in courses" :key="item.index">
              <v-card>
            <v-img height="60px" :src="item.src"></v-img>
            <v-card-text>
                <v-row>
                    
                <span class="col-12 pa-0 text-truncate">

                {{item.course_name}}
                </span>


                <span class="col-12 pa-0 text-truncate">

                {{item.course_location}}
                </span>
                <span class="col-12 pa-0 text-truncate">

                {{item.course_time}}
                </span>
                </v-row>
            </v-card-text>
            <v-card-action>
              <v-col>
                <v-chip small>{{item.course_point}} points</v-chip>
              </v-col>
            </v-card-action>
         
              </v-card>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-btn 
              block 
              dark
              to="/" 
              color="#f26400" >
                  LOG OFF
              </v-btn>
          </v-col>
      </v-row>
      <v-row>
          <v-col>

          </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        courses:[
{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},
{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
},{
    course_name:'nfdsadf',
    course_location:'Cdfe',
    course_time:new Date(),
    course_point:'5',
    src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
}

        ],

        course:{

            src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            point: "5",

            },

      styleUpper: {
        background: "#F26400"
      },
      user: {
        first_name: "Joe",
        last_name: "Doe",
        email: "test@test.com",
        r_point: "25",
        m_point: "15"
      }
    };
  },
  computed: {
    fullname() {
      return this.user.first_name + " " + this.user.last_name;
    }
  }
};
</script>

<style scoped>
#upper-banner {
  height: 90px;
  border-radius: 0 0 50px 50px;
}
#upcoming-card{
    border-color: white;
}
</style>