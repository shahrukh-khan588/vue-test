<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container v-if="conected" max-width="90%">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">File Name</th>
            <th class="text-right">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td class="text-right">{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  props: {
    conected: {
      type: String,
    },
  },
  data() {
    return {
      desserts: [
        {
          name: "File 1",
          calories: "21-01-2023",
        },
        {
          name: "File 2",
          calories: "18-01-2023",
        },
        {
          name: "File 3",
          calories: "17-01-2023",
        },
        {
          name: "File 4",
          calories: "14-01-2023",
        },
        {
          name: "File 5",
          calories: "09-01-2023",
        },
        {
          name: "File 6",
          calories: "26-12-2022",
        },
        {
          name: "File 7",
          calories: "16-12-2022",
        },
        {
          name: "File 8",
          calories: "07-11-2022",
        },
        {
          name: "File 9",
          calories: "14-10-2022",
        },
        {
          name: "File 10",
          calories: "12-10-2022",
        },
      ],
    };
  },
};
</script>
