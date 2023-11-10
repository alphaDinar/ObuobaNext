import Link from 'next/link';
import { icon } from '../../External/external';
import styles from './managerSidebar.module.css';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { fireAuth } from '../../Firebase/base';

const ManagerSidebar = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const toggleSidebar=()=>{
    sidebarToggled ? setSidebarToggled(false) : setSidebarToggled(true);
  }

  return (
    <section className={ sidebarToggled ? `${styles.sideBar} ${styles.change}` : styles.sideBar}>
      <button style={{cursor:'pointer'}} onClick={toggleSidebar}>{icon('linear_scale')}</button>
      <header>
        <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1692289104/logo_2_nxwecd.png" alt="" />
      </header>
      <nav>
        <Link href={'/manager/programs'}>
          <a>{icon('mic')} <span>Programs</span></a>
        </Link>
        <Link href={'/manager/posts'}>
          <a>{icon('post_add')} <span>Posts</span></a>
        </Link>
        <Link href={'/manager/team'}>
          <a>{icon('group')} <span>Team</span></a>
        </Link>
      </nav>
      <footer>
        <a href=""><i className="material-symbols-outlined">power_settings_new</i> <span>Logout</span></a>
      </footer>
    </section>
  );
}

export default ManagerSidebar;