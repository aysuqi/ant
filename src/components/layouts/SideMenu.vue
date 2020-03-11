<template>
<<<<<<< HEAD
  <div>菜单</div>
</template>

<script>
export default {};
=======
  <div style="width: 256px">
    <!-- SelectedKeys菜单选中的kye；OpenKeys菜单打开的key；openKeys.sync双向绑定 -->
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      mode="inline"
      :theme="theme"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from "../layouts/SubMenu";
export default {
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  components: {
    "sub-menu": SubMenu
  },
  watch: {
    "$route.path": function(val) {
      this.selectedKeys = this.selectedKeysMap[val];
      //当路由是关闭的时候，是不打开菜单的
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
    }
  },
  data() {
    //储存selectedKeys和openKeys的值
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    //通过this.$router.options.routes这个API，获取路由配置
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      menuData,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path]
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    //定义路由方法
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      //定义变量为空
      const menuData = [];
      //循环路由
      routes.forEach(item => {
        //如果有名字而且不隐藏的时候
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys; //接收路由信息,parentKeys来返回key
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          const newItem = { ...item }; //解构不改变原始数据
          delete newItem.children;
          //如果item有children而且不隐藏的时候
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          );
        }
      });
      return menuData;
    }
  }
};
>>>>>>> 初始版本
</script>

<style></style>
