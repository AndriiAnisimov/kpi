import { useSelector } from "react-redux";
import { RootState } from "../store";
import { RoleInterface } from "@/interfaces/RoleInterface";

function arraysIncludeArray(superset: string[], subset: string[]): boolean {
  return subset.every(item => superset.includes(item));
}

export default function Role({ allowedRoles, children }: RoleInterface) {
  const roles = useSelector((state: RootState) => state.roles.roles);

  if (arraysIncludeArray(roles, allowedRoles)) {
    return children;
  } else {
    return null;
  }
}
