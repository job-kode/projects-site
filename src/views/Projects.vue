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
// import db from '@/firebase'

export default {
  data() {
    return {
      // projects: [],
      projects: [
        {
          title: '신규 웹사이트 개발',
          person: 'Ms. Choe',
          due: '2021.01.01',
          status: 'Proceeding',
          content:
            '신규 웹사이트 개발 작업에 대한 내용입니다',
        },
        {
          title: '메인페이지 퍼블리싱',
          person: 'Terry',
          due: '2022.01.02',
          status: 'Complete',
          content:
            '메인페이지 퍼블리싱 작업에 대한 내용입니다',
        },
        {
          title: '웹사이트 커뮤니티 게시판 수정',
          person: 'Mr. Kim',
          due: '2023.01.03',
          status: 'Complete',
          content:
            '웹사이트 커뮤니티 게시판 수정 작업에 대한 내용입니다',
        },
        {
          title: '회원 관리 모듈 생성 및 수정 작업에 대한 내용입니다',
          person: 'Min Ho',
          due: '2023.01.03',
          status: 'Complete',
          content:
            '회원 관리 모듈 생성 및 수정 작업에 대한 내용입니다.',
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
  },
  // created() {
  //   db.collection('projects').onSnapshot(res => {
  //     const changes = res.docChanges()
  //     changes.forEach(change => {
  //       if (change.type==='added'){
  //         this.projects.push({
  //           ...change.doc.data(),
  //           id:change.doc.id
  //         })
  //       }
  //     })
  //   })
  // },

}
</script>
