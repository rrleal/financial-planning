<template>
    <div>

        <nav class="navbar sticky-top flex-md-nowrap p-0" :style="{ 'margin-left': sidebarWidth + 'rem'  }">

            <div class="nav-collapse-action px-2 py-1" style="margin-left: -4px;">
                <a-icon :type="sidebarCollapseIcon" @click="sidebarCollapse" :style="{ fontSize: '11px', cursor: 'pointer' }"/>
            </div>

            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#">Sign out</a>
                </li>
            </ul>

        </nav>

        <div class="container-fluid">
            <div class="row">
                <nav class="d-md-block sidebar" :style="{ width: sidebarWidth + 'rem' }">
                    <div class="sidebar-sticky">

                        <div class="logo pl-4 py-3" :class="{ 'ml-logo': isSidebarCollapsed }">
                            <a-icon type="fund" :style="{ fontSize : '26px' }" style="vertical-align: middle;"/>
                            <transition name="slide-fade">
                            <a class="ml-2" v-show="! isSidebarCollapsed" href="#">Middleware</a>
                            </transition>
                        </div>

                        <ul class="nav flex-column">
                            <li class="nav-item" v-for="menuItem in menuItems" :key="'menu-item-' + menuItem.id">
                                <a class="nav-link" :class="{ 'active': menuItem.active }" :href="menuItem.route">
                                    <a-icon :type="menuItem.icon" />
                                    <transition name="slide-fade">
                                    <span class="ml-3" v-if="! isSidebarCollapsed">{{ menuItem.name }}</span>
                                    </transition>
                                </a>
                            </li>
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

    export default {
        name: 'Layout',
        data() {
            return {
                menuItems: [
                    {
                        id: 1,
                        name: 'Dashboard',
                        route: '#',
                        icon: 'bar-chart',
                        active: true
                    },
                    {
                        id: 2,
                        name: 'Endpoints',
                        route: '#',
                        icon: 'minus-circle',
                        active: false
                    },
                    {
                        id: 3,
                        name: 'Configurações',
                        route: '#',
                        icon: 'plus-circle',
                        active: false
                    },
                    {
                        id: 4,
                        name: 'Fornecedores',
                        route: '#',
                        icon: 'edit',
                        active: false
                    },
                    {
                        id: 5,
                        name: 'Acesso',
                        route: '#',
                        icon: 'usergroup-add',
                        active: false
                    }
                ],
                collapseTooltipText: 'Recolher menu lateral',
                isSidebarCollapsed: false,
                sidebarCollapseIcon: 'left',
                sidebarWidth: 15,
                sidebarParams: {
                    collapsed: {
                        icon: 'right',
                        width: 6
                    },
                    expanded: {
                        icon: 'left',
                        width: 15
                    }
                }
            }
        },
        methods: {

            sidebarCollapse() {

                this.isSidebarCollapsed  = ! this.isSidebarCollapsed;

                let state = this.isSidebarCollapsed ? 'collapsed' : 'expanded';

                this.sidebarCollapseIcon = this.sidebarParams[state].icon;
                this.sidebarWidth        = this.sidebarParams[state].width;


            }

        }
    }

</script>

<style>

    .ml-logo {
        margin-left: 12px;
        transition: 0.3s;
    }

</style>
