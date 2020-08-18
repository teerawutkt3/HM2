<template>
  <div>
    <h3>
      Bill
    </h3>
    <v-row>
      <v-col>
        <BillTable />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BillTable from '@/components/Bill/BillTable'
export default {
  components: {
    BillTable
  }
}
</script>
