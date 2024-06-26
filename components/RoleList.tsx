import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Title from "./Title";
import { RoleItemInterface } from "@/interfaces/RoleItemInterface";

export default function RoleList() {
  const rolesState = useSelector((state: RootState) => state.roles.roles as RoleItemInterface[]);
  const [checkedRoles, setCheckedRoles] = useState<string[]>([]);

  useEffect(() => {
    setCheckedRoles(rolesState.map((role) => role.name));
  }, [rolesState]);

  const handleCheckboxChange = (roleName: string) => {
    setCheckedRoles((prevCheckedRoles) =>
      prevCheckedRoles.includes(roleName)
        ? prevCheckedRoles.filter((r) => r !== roleName)
        : [...prevCheckedRoles, roleName]
    );
  };

  return (
    <div className="text-center">
      <Title title="Current roles:" />

      <form>
        {rolesState.map((role) => (
          <div key={role.id} className="my-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 w-5 h-5"
                checked={checkedRoles.includes(role.name)}
                onChange={() => handleCheckboxChange(role.name)}
              />
              <span className="text-gray-700 ml-2">{role.name}</span>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
