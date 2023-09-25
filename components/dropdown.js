import Link from "next/link";
import styles from "./dropdown.module.css"
import { useState } from "react";

export default function DropdownMenu({ menuName, items }) { 
    const [isDropdownVisible, setDropdownVisible] = useState(false)
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
    <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <button className={styles.dropdownbutton}
            >{menuName}</button>
        <div className={styles.dropdownMenu}>
            {isDropdownVisible && DropDownItems(items)}
        </div>
    </div>
    );
};

function DropDownItems(items) {
    return items.map((item) => {
        {console.log(item)}
        return <button className={styles.item} key={item.text}>
            <Link href={item.link}>{item.text}</Link>
        </button>
    })
}
  