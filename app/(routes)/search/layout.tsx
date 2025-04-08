import { ReactNode } from "react";
import CategorySidebar from "./_components/CategorySidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-7">
        <div>
          {/* Side category nav bar */}
          <CategorySidebar />
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default layout;
