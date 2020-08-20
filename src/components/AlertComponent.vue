<template>
    <v-snackbar
            top centerd
            v-if="$store.getters.alert.status"
            v-model="$store.getters.alert.status"
            color="success"
            max-width="600"
            :timeout="1000 * 5"
    >
        <v-card dark color="transparent" flat>
            <v-card-text>
                <v-row>
                    <v-col class="d-flex align-center" cols="10">
                        <span>{{ $store.getters.alert.data.message }}</span>
                    </v-col>
                    <v-col cols="2">
                        <v-btn icon @click="closeAlert" dark>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-snackbar>
</template>

<script>
    export default {
        name: "AlertComponent",
        data() {
            return {
            }
        },
        methods: {
            closeAlert() {
                this.$store.commit('close');
            }
        }
    }
</script>

<style scoped>

</style>
