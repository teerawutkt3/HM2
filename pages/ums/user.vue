<template>
  <div>
    User
    <FormSearchUser />
    <TableUser />
  </div>
</template>
<script>
import TableUser from '@/components/Ums/User/TableUser'
import FormSearchUser from '@/components/Ums/User/FormSearchUser'
export default {
  components: {
    TableUser,
    FormSearchUser
  }
}
</script>
