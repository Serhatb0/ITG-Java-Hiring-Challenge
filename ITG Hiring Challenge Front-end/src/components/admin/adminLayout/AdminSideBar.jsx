import Link from "next/link";
import styles from "./styles.module.css";

const AdminSideBar = () => {
  return (
    <div>
      <div className="admin-sidebar">
        <div className="list-group">
          <Link
            href="/admin"
            className="list-group-item d-flex align-items-center"
          >
            <i className="fa fa-home" />
            Dashboard
          </Link>
          <Link
            href="/admin/user"
            className="list-group-item d-flex align-items-center"
          >
            <i className="fa fa-users" />
            Users
          </Link>
          <Link
            href="/admin/product"
            className="list-group-item d-flex align-items-center"
          >
            <i className="fa fa-shopping-cart" />
            Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
