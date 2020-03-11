<template>
<<<<<<< HEAD
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <sider-menu></sider-menu>
      </a-layout-sider>
      <a-layout>
=======
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <!-- 左侧导航 -->
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        collapsible
        v-model="collapsed"
        width="256px"
      >
        <div class="logo">Ant Design Vue Pro</div>
        <!-- 导航菜单 -->
        <sider-menu :theme="navTheme"></sider-menu>
      </a-layout-sider>
      <a-layout>
        <!-- 顶部栏 -->
>>>>>>> 初始版本
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <Head></Head>
        </a-layout-header>
<<<<<<< HEAD
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
=======
        <!-- 内容区域 -->
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <!-- 底部栏 -->
>>>>>>> 初始版本
        <a-layout-footer style="text-align: center">
          <Foot></Foot>
        </a-layout-footer>
      </a-layout>
    </a-layout>
<<<<<<< HEAD
=======
    <setting-drawer></setting-drawer>
>>>>>>> 初始版本
  </div>
</template>

<script>
import Head from "./Head";
import Foot from "./Foot";
import SiderMenu from "./SideMenu";
<<<<<<< HEAD
=======
import SettingDrawer from "../SettingDrawer";
>>>>>>> 初始版本

export default {
  components: {
    Head,
    Foot,
<<<<<<< HEAD
    SiderMenu
=======
    SiderMenu,
    SettingDrawer
>>>>>>> 初始版本
  },
  data() {
    return {
      collapsed: false
    };
<<<<<<< HEAD
=======
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
>>>>>>> 初始版本
  }
};
</script>

<<<<<<< HEAD
<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
=======
<style scoped>
#components-layout-demo-side .logo {
  height: 64px;
>>>>>>> 初始版本
  margin: 16px;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
<<<<<<< HEAD

.trigger:hover {
  color: #1890ff;
}
=======
.trigger:hover {
  color: #1890ff;
}
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark >>> .logo {
  color: #fff;
}
>>>>>>> 初始版本
</style>
