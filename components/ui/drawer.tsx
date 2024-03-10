import Hamburger from "./hamburger";

export default function Drawer({
  pageContent,
  SidebarConetent,
}: {
  pageContent: JSX.Element;
  SidebarConetent: JSX.Element;

}) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" defaultChecked={false}/>
      <div className="drawer-content ">
        <Hamburger label="my-drawer" />
        {pageContent}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 h-screen bg-base-200 text-base-content">
          <div>{SidebarConetent}</div>
        </ul>
      </div>
    </div>
  );
}
