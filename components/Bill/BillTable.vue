<template>
  <div>
    <div class="overflow-auto">
      <v-simple-table style="white-space: nowrap;">
        <template v-slot:default>
          <thead>
            <tr>
              <th>
                Bill
              </th>
              <th>ลำดับ</th>
              <th>Title</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>
                <v-text-field label="Title" color="#E040FB" :rules="rules" />
              </td>
              <td> <v-text-field label="Type" color="#E040FB" :rules="rules" /></td>
              <td> <v-text-field label="Cost" color="#E040FB" :rules="rules" /></td>
              <td class="text-right">
                <b-icon-add />
              </td>
            </tr>
            <tr v-for="(item,index) in billList" :key="index">
              <td>
                <b-icon-edit />
                <b-icon-delete />
              </td>
              <td>{{ index+1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.cost }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <v-row>
      <v-col cols="4" sm="2" md="2">
        <v-select
          v-model="table.perPage"
          :items="table.perPages"
        />
      </v-col>
      <v-col cols="8" sm="3" md="2" class="mt-5">
        จาก ทั้งหมด 150
      </v-col>
      <v-col cols="12" sm="7" md="8">
        <v-pagination
          v-model="table.page"
          circle
          class="float-right"
          color="#E040FB"
          :length="15"
          :total-visible="7"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: {
        perPage: 10,
        perPages: [10, 25, 50, 100],
        page: 1
      },
      billList: [
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        },
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 159
        }
      ]
    }
  }
}
</script>
