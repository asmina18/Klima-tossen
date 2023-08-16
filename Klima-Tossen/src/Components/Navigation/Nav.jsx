import style from './Nav.module.scss'

export const Navigation = () => {
  const navItems = [
    { route: "START" },
    { route: "DIT CO2" },
    { route: "CLEAN UP" },
    { route: "TILMELD DIG" }
  ];

  return (
    <nav className={style.Nav} >
      <ul>
        {navItems.map((item, i) => {
          return <a key={i}>{item.route}</a>;
        })}
      </ul>
    </nav>
  );
};