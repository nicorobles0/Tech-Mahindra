import DashboardHead from "@/components/molecules/DashboardHead/DashboardHead"
import Table from "@/components/molecules/Table/Table"
import { DashboardDiv } from "./Dahsboard.style"

export const Dahsboard = () => {
  return (
    <DashboardDiv>
        <DashboardHead/>
        <Table/>
    </DashboardDiv>
  )
}
