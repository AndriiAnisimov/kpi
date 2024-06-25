import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { RoleInterface } from "@/interfaces/RoleInterface";

export default function Role({ allowedRoles, children }: RoleInterface) {
  const rolesState = useSelector((state: RootState) => state.roles.roles);
  const userRoles = useMemo(() => rolesState.map(role => role.name), [rolesState]);
  const hasAccess = useMemo(() => userRoles.some(roleName => allowedRoles.includes(roleName)), [userRoles, allowedRoles]);

  return <>{hasAccess ? children : null}</>;
}
