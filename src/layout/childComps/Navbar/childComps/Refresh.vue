<template>
  <div class="trigger-sidebar-wrapper">
    <navbar-button @click="handleClick">
      <icon name="icon-reload" size="18"></icon>
    </navbar-button>
  </div>
</template>

<script>
  import NavbarButton from "./NavbarButton";
  export default {
    name: "Refresh",
    components:{NavbarButton},
    methods:{
      handleClick(){
        console.log("刷新",this.$route.name)
        this.$store.dispatch('tagsView/removeCached',this.$route).then(()=>{
          this.$nextTick(()=>{
            this.$router.replace({
              path: '/redirect' + this.$route.path
            })
          })
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  }
</script>
