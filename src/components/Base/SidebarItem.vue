<template>
    <div>

        <li class="nav-item" @click="dropdownMenu">

            <a class="nav-link" :class="{ 'active': item.active }" :href="item.route">

                <a-icon :type="item.icon" />

                <transition name="slide-fade">
                    <span class="ml-3" v-if="! $parent.sidebar.isCollapsed">{{ item.name }}</span>
                </transition>

                <a-icon v-if="hasChildItems( item )" class="float-right mt-2" :class="{ 'arrow-rotated': clicked, 'arrow-normal': ! clicked }" :style="{ fontSize: '12px' }" type="right" />

            </a>

            <transition name="slide">

                <div v-if="hasChildItems( item ) && clicked">

                    <ul class="nav flex-column">

                        <li class="nav-item" v-for="childItem in item.child" :key="'child-menu-item-' + childItem.id">

                            <a class="nav-link" :class="{ 'active': childItem.active }" :href="childItem.route">
                                <a-icon :type="childItem.icon" />
                                <transition name="slide-fade">
                                    <span class="ml-3" v-if="! $parent.sidebar.isCollapsed">{{ childItem.name }}</span>
                                </transition>
                            </a>

                        </li>

                    </ul>

                </div>

            </transition>

        </li>
    </div>

</template>

<script>
    export default {

        name: "sidebar-item",

        props: ['item'],

        data() {
            return {

                clicked: false

            }
        },

        methods: {

            /**
             * Verifica se o item do menu possui filhos
             */
            hasChildItems( item ) {
                return item.child.length > 0;
            },

            /**
             * Adiciona a funcionalidade de dropdown do manu
             */
            dropdownMenu() {

                this.clicked = ! this.clicked;

            }

        }

    }
</script>

<style scoped>

</style>