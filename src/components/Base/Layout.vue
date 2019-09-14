<template>
    <div>

        <nav class="navbar sticky-top flex-md-nowrap p-0" :style="{ 'margin-left': getSidebarWidth + 'rem'  }">

            <div class="nav-collapse-action px-2 py-1" style="margin-left: -4px;">
                <a-icon :type="getSidebarIcon" @click="sidebarCollapse" :style="{ fontSize: '11px', cursor: 'pointer' }"/>
            </div>

            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#">Sair</a>
                </li>
            </ul>

        </nav>

        <div class="container-fluid">
            <div class="row">
                <nav class="d-md-block sidebar" :style="{ width: getSidebarWidth + 'rem' }">
                    <div class="sidebar-sticky">

                        <div class="logo pl-4 py-3" :class="{ 'ml-logo': sidebar.isCollapsed }">
                            <a-icon type="dollar" :style="{ fontSize : '26px' }" style="vertical-align: middle;"/>
                            <transition name="slide-fade">
                            <a class="ml-2" v-show="! sidebar.isCollapsed" href="#">Planejamento Financeiro</a>
                            </transition>
                        </div>

                        <ul class="nav flex-column mt-5">
                            <sidebar-item v-for="menuItem in menuItems" :key="'menu-item-' + menuItem.id" :item="menuItem" ></sidebar-item>
                        </ul>

                    </div>
                </nav>

                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                </main>

            </div>
        </div>

    </div>
</template>

<script>

    import SidebarItem from "./SidebarItem";

    export default {
        components: {SidebarItem},
        name: 'Layout',
        data() {
            return {
                menuItems: [
                    {
                        id: 1,
                        name: 'Dashboard',
                        route: '#',
                        icon: 'bar-chart',
                        active: true,
                        child: []
                    },
                    {
                        id: 2,
                        name: 'Despesas',
                        route: '#',
                        icon: 'minus-circle',
                        active: false,
                        child: [
                            {
                                id: 6,
                                name: 'Cadastrar',
                                route: '#',
                                icon: 'right',
                                active: false
                            },
                            {
                                id: 7,
                                name: 'Relatório',
                                route: '#',
                                icon: 'right',
                                active: false
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Receitas',
                        route: '#',
                        icon: 'plus-circle',
                        active: false,
                        child: []
                    },
                    {
                        id: 4,
                        name: 'Planejamento',
                        route: '#',
                        icon: 'edit',
                        active: false,
                        child: [
                            {
                                id: 8,
                                name: 'Cadastrar',
                                route: '#',
                                icon: 'right',
                                active: false
                            },
                            {
                                id: 9,
                                name: 'Relatório',
                                route: '#',
                                icon: 'right',
                                active: false
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Acesso',
                        route: '#',
                        icon: 'usergroup-add',
                        active: false,
                        child: []
                    }
                ],
                clicked: false,
                sidebar: {
                    state: 'expanded',
                    isCollapsed: false,
                    params: {
                        collapsed: {
                            icon: 'right',
                            width: 6
                        },
                        expanded: {
                            icon: 'left',
                            width: 15
                        }
                    }
                },
            }
        },
        methods: {

            /**
             * Recolhe ou expande o menu lateral
             */
            sidebarCollapse() {

                this.sidebar.isCollapsed = ! this.sidebar.isCollapsed;
                this.sidebar.state       = this.sidebar.isCollapsed ? 'collapsed' : 'expanded';

            },

        },

        computed: {

            /**
             * Retorna o icon do botão de expandir e recolher o menu lateral
             * @returns string
             */
            getSidebarIcon() {
                return this.sidebar.params[this.sidebar.state].icon;
            },

            /**
             * Retorna a largura do menu lateral
             * @returns int
             */
            getSidebarWidth() {
                return this.sidebar.params[this.sidebar.state].width;
            },

        }

    }

</script>

<style>

    .ml-logo {
        margin-left: 12px;
        transition: 0.3s;
    }

</style>
