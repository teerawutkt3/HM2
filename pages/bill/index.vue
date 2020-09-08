<template>
  <div>
    <v-row>
      <v-col>
        <b class="float-left">
          Bill
        </b>
        {{ nowDate }}
        <v-btn @click="noti">
          noti
        </v-btn>
        <b-icon-add :right="true" :click="goForm" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(bill, index) in billList"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <BillCard :title="bill.title" :type="bill.type" :cost="bill.cost" :click="()=>{onPay(index)}" />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <h3>
          Payed
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(bill, index) in billList"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <BillCard :title="bill.title" :type="bill.type" :cost="bill.cost" :click="()=>{onPay(index)}" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BillCard from '@/components/Bill/BillCard'
import MessageConstants from '@/common/MessageConstants'
export default {
  components: {
    BillCard
  },
  data () {
    return {
      nowDate: new Date(),
      billList: [
        {
          title: 'ค่าไฟ',
          type: 'บ้าน',
          cost: 2000
        },
        {
          title: 'ค่าน้ำ',
          type: 'บ้าน',
          cost: 325
        },
        {
          title: 'ประกันสุขภาพลูก',
          type: 'AIA',
          cost: 2300
        },
        {
          title: 'บัตรเครดิต',
          type: 'Frist Choice',
          cost: 2300
        }
      ]
    }
  },
  mounted () {
    this.noti()
  },
  methods: {
    noti () {
      this.$toast.error(MessageConstants.FAIL)

      this.$toast.success(MessageConstants.SUCCESS)
    },
    onPay (index) {
      // console.log('Pay index: ', index)
    },
    goForm () {
      this.$router.push({ path: '/bill/b-form' })
    }
  }
}
</script>
