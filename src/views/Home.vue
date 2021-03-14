<template>
  <div class="home">
    <h1 class="subheading grey--text ml-6 mt-4">Home</h1>
    <v-container class="my-5">
      <v-layout row class="mb-8">
        <v-tooltip bottom>
          <template v-slot:activator="{on, attrs}">
            <v-btn
              @click="sortBy('title')"
              small
              depressed
              color="grey lighten-2 mr-3"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small defressed>mdi-folder</v-icon>
              <span class="caption text-lowercase">프로젝트 이름순</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{on, attrs}">
            <v-btn
              @click="sortBy('person')"
              small
              depressed
              color="grey lighten-2 mr-3"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small defressed>mdi-account </v-icon>
              <span class="caption text-lowercase">담당자순</span>
            </v-btn>
          </template>
          <span>Sort project by Person</span>
        </v-tooltip>
      </v-layout>

      <v-card v-for="project in projects" :key="project.title" class="mb-4" flat>
        <v-layout row wrap :class="`pa-2 pl-5 project ${project.status}`" style="background:#f5f5f5;">
          <v-flex xs12 md6>
            <div class="caption grey--text">프로젝트 이름</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">담당자</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">만료일</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip :class="`${project.status} white--text caption my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import db from '@/firebase'

export default {
  data() {
    return {
      // projects:[],
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
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
    },
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

<style lang="scss">
.project.Complete {
  border-left: 4px solid #68be52;
}
.project.Proceeding {
  border-left: 4px solid #eb7975;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.Proceeding {
  background: #eb7975 !important;
}
.v-chip.Complete {
  background-color: #68be52 !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
