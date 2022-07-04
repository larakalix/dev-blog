interface Props {
    text: string;
}

export default function MainHeader({ text }: Props) {
    return <h1 className="text-v-main-title">{text}</h1>;
}
