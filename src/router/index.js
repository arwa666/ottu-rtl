import Vue from 'vue'
import VueRouter from 'vue-router'



import NewContract from "../components/NewContract.vue"
import ManualPayment from "../components/ManualPayment.vue";
import EditUnit from "../components/EditUnit.vue";
import EditPrice from "../components/EditPrice.vue";
import AdvancePayment from "../components/AdvancePayment.vue";
import AddUnit from "../components/AddUnit.vue";
import AddTenant from "../components/AddTenant.vue";
import AddNewUnitType from "../components/AddNewUnitType.vue";
import RentManagement from "../components/RentManagement.vue";
import TerminateList from "../components/TerminateList.vue";
import TerminateContract from "../components/TerminateContract.vue";
import RenewContractList from "../components/RenewContractList.vue";
import Configuration from "../components/Configuration.vue";
import NewContractList from "../components/NewContractList.vue";
import ManualPaymentList from "../components/ManualPaymentList.vue";
import EditPriceList from "../components/EditPriceList";
import AdvancePaymentList from "../components/AdvancePaymentList";
import Properties from "../components/Properties.vue";
import PropertyDetails from "../components/PropertyDetails.vue";
import RenewContract from "../components/RenewContract.vue";
import TenantManagement from "../components/TenantManagement.vue";
import Unit from "../components/Unit.vue";
import UnitType from "../components/UnitType.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'configuration',
    component: Configuration
  },
  {
    path: '/rent_management',
    name: 'rent_management',
    component: RentManagement
  },
  {
    path: '/terminate_contract',
    name: 'terminate_contract',
    component:TerminateContract
  },
  {
    path: '/terminate_list',
    name: 'terminate_list',
    component:TerminateList
  },
  {
    path: '/new_contract',
    name: 'new_contract',
    component:NewContract
  },
  {
    path: '/renew_contract',
    name: 'renew_contract',
    component:RenewContract
  },
  {
    path: '/renew_contract_list',
    name: 'renew_contract_list',
    component:RenewContractList
  },
  {
    path: '/rent_management',
    name: 'rent_management',
    component:RentManagement
  },
  {
    path: '/new_contract_list',
    name: 'new_contract_list',
    component:NewContractList
  },
  {
    path: '/manual_payment_list',
    name: 'manual_payment_list',
    component:ManualPaymentList
  },
  {
    path: '/edit_price_list',
    name: 'edit_price_list',
    component:EditPriceList
  },
  {
    path: '/advance_payment_list',
    name: 'advance_payment_list',
    component:AdvancePaymentList
  },
  {
    path: '/add_new_unit_type',
    name: 'add_new_unit_type',
    component:AddNewUnitType
  },
  {
    path: '/add_tenant',
    name: 'add_tenant',
    component:AddTenant
  },
  {
    path: '/add_unit',
    name: 'add_unit',
    component:AddUnit
  },
  {
    path: '/advance_payment',
    name: 'advance_payment',
    component:AdvancePayment
  },
  {
    path: '/edit_price',
    name: 'edit_price',
    component:EditPrice
  },
  {
    path: '/edit_unit',
    name: 'edit_unit',
    component:EditUnit
  },
  {
    path: '/manual_payment',
    name: 'manual_payment',
    component:ManualPayment
  },
  {
    path: '/properties',
    name: 'properties',
    component:Properties
  },
  {
    path: '/property_details',
    name: 'property_details',
    component:PropertyDetails
  },
  {
    path: '/tenant_management',
    name: 'tenant_management',
    component:TenantManagement
  },
  {
    path: '/unit',
    name: 'unit',
    component:Unit
  },
  {
    path: '/unit_type',
    name: 'unit_type',
    component:UnitType
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
