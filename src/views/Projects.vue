<template>
  <div class="projects">
    <h1 class="subheading grey--text ml-6 mt-4">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header class="py-7">{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat >
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">{{project.due}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: '신규 웹사이트 개발',
          person: 'Designer',
          due: '2021.01.01',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iste magni officia maiores voluptatum, temporibus assumenda? Voluptas doloribus asperiores laborum aliquam id delectus minus mollitia. Quo accusamus distinctio iusto mollitia?',
        },
        {
          title: '메인페이지 코딩 작업',
          person: 'publisher',
          due: '2022.01.02',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum in commodi quia quaerat, neque maiores alias quo dolore. Placeat, perspiciatis. Distinctio magni debitis vel velit, error natus dolore sunt!',
        },
        {
          title: '웹사이트 커뮤니티 게시판 수정',
          person: 'frontend',
          due: '2023.01.03',
          status: 'complete',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore possimus repudiandae, magni ipsum consectetur aut pariatur expedita qui, quis deleniti eaque molestias earum, voluptate dolorem magnam distinctio velit! Possimus, minus!',
        },
      ],
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project=>{
        return project.person === 'Designer'
      })
    }
  }
}
</script>
