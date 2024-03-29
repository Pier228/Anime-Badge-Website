import { RootState } from "@/lib/store";
import styles from "@/styles/mainBadge/main-badge-footer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { toggleVisibility } from "@/lib/reducers/badgeReducer";
import { createSelector } from "reselect";

const ToolBar = () => {
    const dispatch = useDispatch();
    
    const getHiddenIcons = createSelector(
        (state: RootState) => state.badge,
        (badge) => badge.filter((obj) => obj.isHidden)
      );
    const icons = useSelector(getHiddenIcons);

    return (
        <div className={styles.taskbar_container}>
            {icons.map((badge) => (
                <Image
                    src={badge.icon}
                    alt="badge icon"
                    height={40}
                    width={40}
                    key={badge.id}
                    onClick={() => dispatch(toggleVisibility(badge.id))}
                    style={{ cursor: "pointer" }}
                />
            ))}
        </div>
    );
};

export default ToolBar;
