import Link from "next/link";
import Image from "next/image";
import rounded_btn from "@/styles/buttons/rounded-button.module.scss";
import type ILinkButton from "@/interfaces/ILingButton";

const LinkButton = (props: ILinkButton) => {
    return (
        <Link href={props.href} className={rounded_btn[props.classNames]}>
            <Image
                src={props.image_src}
                width={20}
                height={20}
                alt="settings"
            />
            {props.text}
        </Link>
    );
};

export default LinkButton;
